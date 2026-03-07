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
                            I&apos;m a <span className="about__highlight">Web3-focused Full Stack Developer</span>, <span className="about__highlight">mobile dev</span>, and <span className="about__highlight">video editor</span> who loves building things that actually matter.
                        </p>
                        <p className="about__description">
                            With 2+ hackathon wins under my belt, I enjoy bridging Web2 and Web3  whether it&apos;s shipping a full-stack app, crafting a mobile experience, or editing a killer demo video. Currently looking for internships to keep learning and building.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
