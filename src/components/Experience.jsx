import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { styles } from '../styles';
import { experiences } from '../consts';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        contentStyle={{
            background: '#1d1836',
            color: '#fff',
        }}
        contentArrowStyle={{
            borderRight: '7px solid #232631',
        }}
        date={experience.date}
        iconStyle={{
            background: experience.iconBg,
        }}
        icon={(
            <div className="flex justify-center items-center w-full h-full">
                <img
                    className="w-[70%] h-[70%] object- rounded-[40%]"
                    src={experience.icon}
                    alt={experience.company}
                />
            </div>
        )}
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">
                {experience.title}
            </h3>
            <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                {experience.company_name}
            </p>
        </div>
        <div className="mt-5 space-y-2">
            <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                Stack
            </p>
            <ul className="list-disc ml-5 space-y-2">
                <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                    {`Backend: ${experience.backStack}`}
                </li>
                <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                    {`Frontend: ${experience.frontStack}`}
                </li>
                <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                    {`DBMS: ${experience.dbms}`}
                </li>
            </ul>
        </div>
        <div className="mt-5 space-y-2">
            <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                Main tasks/directions of development
            </p>
            <ul className="list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                    // eslint-disable-next-line react/no-array-index-key
                        key={`experiance-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </div>

    </VerticalTimelineElement>
);

const Experience = () => (
    <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>What I have done so far</p>
            <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
        </motion.div>
        <div className="mt-20 flex flex-col">
            <VerticalTimeline>
                {experiences.map((exp, index) => (
                    <ExperienceCard
                        key={exp.title}
                        experience={exp}
                    />
                ))}
            </VerticalTimeline>
        </div>
    </>

);

export default SectionWrapper(Experience, 'work');
