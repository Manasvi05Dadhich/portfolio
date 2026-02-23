import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    About Me
                </motion.h2>

                <div className="about__content">
                    <motion.div
                        className="about__text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <p className="about__intro">
                            I&apos;m a <span className="about__highlight">Full-Stack Blockchain Developer</span> passionate
                            about building decentralized applications and modern web experiences.
                        </p>
                        <p className="about__description">
                            With expertise spanning the entire MERN stack and the Ethereum ecosystem,
                            I bridge the gap between traditional web development and Web3. From crafting
                            intuitive user interfaces to writing secure smart contracts in Solidity,
                            I bring ideas to life on-chain and off-chain.
                        </p>
                        <p className="about__description">
                            I love exploring new technologies, contributing to open-source projects,
                            and building tools that push the boundaries of what&apos;s possible on the blockchain.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about__stats"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <div className="about__stat">
                            <span className="about__stat-number">10+</span>
                            <span className="about__stat-label">Projects Built</span>
                        </div>
                        <div className="about__stat">
                            <span className="about__stat-number">5+</span>
                            <span className="about__stat-label">Smart Contracts</span>
                        </div>
                        <div className="about__stat">
                            <span className="about__stat-number">2+</span>
                            <span className="about__stat-label">Years Experience</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
