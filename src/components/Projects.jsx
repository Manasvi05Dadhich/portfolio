import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projects = [
    {
        title: 'DeFi Exchange',
        description: 'A decentralized exchange built on Ethereum with automated market maker functionality. Supports token swaps, liquidity pools, and yield farming.',
        tech: ['Solidity', 'React', 'Ethers.js', 'Hardhat'],
        github: '#',
        live: '#',
    },
    {
        title: 'NFT Marketplace',
        description: 'Full-featured NFT marketplace where users can mint, buy, sell, and auction digital assets. Integrated with IPFS for decentralized storage.',
        tech: ['Solidity', 'Next.js', 'MongoDB', 'IPFS'],
        github: '#',
        live: '#',
    },
    {
        title: 'Web3 Social Platform',
        description: 'A decentralized social media platform where content is stored on-chain. Users own their data and interactions are transparent.',
        tech: ['React', 'Node.js', 'Solidity', 'The Graph'],
        github: '#',
        live: '#',
    },
    {
        title: 'Crypto Portfolio Tracker',
        description: 'Real-time portfolio tracker with price alerts, DeFi position tracking, and analytics dashboard. Pulls data from multiple chains.',
        tech: ['React', 'Express', 'MongoDB', 'Web3.js'],
        github: '#',
        live: '#',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.15 },
    }),
};

const Projects = () => {
    return (
        <section id="projects" className="projects section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    Projects
                </motion.h2>

                <div className="projects__grid">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            className="projects__card"
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                        >
                            <div className="projects__card-header">
                                <h3 className="projects__title">{project.title}</h3>
                                <div className="projects__links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link" aria-label="GitHub">
                                        <FiGithub />
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__link" aria-label="Live Demo">
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>
                            <p className="projects__description">{project.description}</p>
                            <div className="projects__tech">
                                {project.tech.map((t) => (
                                    <span key={t} className="projects__tech-tag">{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
