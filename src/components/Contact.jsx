import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const blankForm = {
    name: '',
    email: '',
    message: '',
};

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState(blankForm);
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.send(import.meta.env.VITE_EMAIL_SERVICE, import.meta.env.VITE_EMAIL_TEMPLATE, {
            from_name: form.name,
            to_name: 'PS',
            from_email: form.email,
            to_email: 'pshumakov11@mail.ru',
            message: form.message,
        }, import.meta.env.VITE_EMAIL_KEY).then(() => {
            setIsLoading(false);
            alert('Thank you. I will get back as soon as possible');
            setForm(blankForm);
        }, (error) => {
            setIsLoading(false);
            console.log('error', error);
            alert('Something went wrong!');
        });
    };

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={`${styles.sectionSubText}`}>Get in touch</p>
                <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your name</span>
                        <input
                            type="text"
                            autoComplete="off"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder={'What\'s your name?'}
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="email"
                            autoComplete="off"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder={'What\'s your email?'}
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your message</span>
                        <textarea
                            rows={7}
                            autoComplete="off"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');
