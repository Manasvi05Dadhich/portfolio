import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
    {
        role: 'Blockchain Developer',
        company: 'Your Company',
        period: '2024 — Present',
        description: 'Developing smart contracts and dApps on Ethereum. Building DeFi protocols with Solidity and Foundry. Integrating on-chain data with React frontends.',
        tech: ['Solidity', 'Foundry', 'React', 'Ethers.js'],
    },
    {
        role: 'Full-Stack Developer',
        company: 'Your Company',
        period: '2023 — 2024',
        description: 'Built scalable web applications using the MERN stack. Designed RESTful APIs, implemented authentication systems, and optimized database queries.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
        role: 'Freelance Developer',
        company: 'Self-Employed',
        period: '2022 — 2023',
        description: 'Delivered custom web solutions for clients. Built responsive websites, e-commerce platforms, and integrated third-party APIs.',
        tech: ['JavaScript', 'React', 'CSS', 'Firebase'],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    Experience
                </motion.h2>

                <div className="experience__timeline">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            className="experience__item"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true, margin: '-50px' }}
                        >
                            <div className="experience__dot" />
                            <div className="experience__card">
                                <span className="experience__period">{exp.period}</span>
                                <h3 className="experience__role">{exp.role}</h3>
                                <span className="experience__company">{exp.company}</span>
                                <p className="experience__description">{exp.description}</p>
                                <div className="experience__tech">
                                    {exp.tech.map((t) => (
                                        <span key={t} className="experience__tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;