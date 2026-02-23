import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaEthereum, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
    SiMongodb, SiExpress, SiSolidity, SiJavascript, SiTypescript,
    SiTailwindcss, SiNextdotjs, SiWeb3Dotjs, SiVercel, SiGithub,
    SiFlutter, SiDart, SiFirebase, SiShadcnui
} from 'react-icons/si';
import './Skills.css';

const row1 = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'shadcn/ui', icon: <SiShadcnui /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'Firebase', icon: <SiFirebase /> },
];

const row2 = [
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Solidity', icon: <SiSolidity /> },
    { name: 'Ethereum', icon: <FaEthereum /> },
    { name: 'Foundry', icon: <FaEthereum /> },
    { name: 'Web3.js', icon: <SiWeb3Dotjs /> },
    { name: 'Ethers.js', icon: <FaEthereum /> },
    { name: 'Flutter', icon: <SiFlutter /> },
    { name: 'Dart', icon: <SiDart /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Vercel', icon: <SiVercel /> },
];

const MarqueeRow = ({ items, direction = 'left' }) => {
    const doubled = [...items, ...items];

    return (
        <div className="marquee__track">
            <div className={`marquee__inner marquee__inner--${direction}`}>
                {doubled.map((skill, i) => (
                    <div key={`${skill.name}-${i}`} className="marquee__chip">
                        <span className="marquee__icon">{skill.icon}</span>
                        <span className="marquee__name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};



const Skills = () => {
    return (
        <section id="skills" className="skills section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    Skills & Tech
                </motion.h2>
            </div>

            <motion.div
                className="marquee__container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <MarqueeRow items={row1} direction="left" />
                <MarqueeRow items={row2} direction="right" />
            </motion.div>
        </section>
    );
};

export default Skills;
