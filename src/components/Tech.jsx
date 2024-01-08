import { technologies } from '../consts';
import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';

const Tech = () => (
    <div
        className="flex flex-row flex-wrap justify-center gap-10"
    >
        {technologies.map((technology, index) => (
            <div className="flex justify-center items-center w-28 h-28 rounded-full animate-pulse bg-transparent dark:bg-tertiary" key={technology.name}>
                {/* <BallCanvas icon={technology.icon} /> */}
                <img className="w-1/2 h-1/2 object-contain" src={technology.icon} alt={technology.name} />
            </div>
        ))}
    </div>
);

export default SectionWrapper(Tech);
