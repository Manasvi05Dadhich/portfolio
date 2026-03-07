import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
    {
        role: 'Blockchain Developer Fellow',
        company: 'Dev3pack',
        period: 'jan 2025 — present',
        description: 'Developing smart contracts and dApps on Ethereum. Building DeFi protocols with Solidity and Foundry. Integrating on-chain data with React frontends.uniswap, base protocol, and more.',
        tech: ['Solidity', 'Foundry', 'React', 'Ethers.js', 'Uniswap SDK'],
    },
    {
        role: 'Freelance Flutter Developer',
        company: 'Self-Employed',
        period: 'Nov 2025 — Jan 2025',
        description: 'built a cross-platform mobile app for a local business. Implemented responsive UI, integrated Firebase for backend services, and deployed to Android.',
        tech: ['Flutter', 'Dart', 'Firebase', 'Android'],
    },
    {
        role: 'Freelance Flutter Developer',
        company: 'Self-Employed',
        period: 'Oct 2024 — Nov 2024',
        description: 'Worked on a cross-platform mobile app for a local business. Implemented responsive UI, integrated Firebase for backend services, and deployed to Android.',
        tech: ['Flutter', 'Dart', 'Firebase', 'Android'],
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