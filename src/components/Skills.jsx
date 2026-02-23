import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaEthereum, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
    SiMongodb, SiExpress, SiSolidity, SiJavascript, SiTypescript,
    SiTailwindcss, SiNextdotjs, SiWeb3Dotjs, SiVercel, SiGithub
} from 'react-icons/si';
import './Skills.css';

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React', icon: <FaReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'HTML5', icon: <FaHtml5 /> },
            { name: 'CSS3', icon: <FaCss3Alt /> },
            { name: 'Tailwind', icon: <SiTailwindcss /> },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Express', icon: <SiExpress /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
        ],
    },
    {
        title: 'Blockchain',
        skills: [
            { name: 'Solidity', icon: <SiSolidity /> },
            { name: 'Ethereum', icon: <FaEthereum /> },
            { name: 'Foundry', icon: <FaEthereum /> },
            { name: 'Web3.js', icon: <SiWeb3Dotjs /> },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'GitHub', icon: <SiGithub /> },
            { name: 'Docker', icon: <FaDocker /> },
            { name: 'Vercel', icon: <SiVercel /> },
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

                <motion.div
                    className="skills__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            className="skills__category"
                            variants={categoryVariants}
                        >
                            <h3 className="skills__category-title">{category.title}</h3>
                            <div className="skills__list">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="skills__item">
                                        <span className="skills__icon">{skill.icon}</span>
                                        <span className="skills__name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
