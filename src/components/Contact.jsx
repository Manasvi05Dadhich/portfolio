import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUpRight } from 'react-icons/fi';
import './Contact.css';

const socials = [
    { name: 'GitHub', icon: <FiGithub />, url: '#', handle: '@manasvi' },
    { name: 'LinkedIn', icon: <FiLinkedin />, url: '#', handle: '/in/manasvi' },
    { name: 'Twitter', icon: <FiTwitter />, url: '#', handle: '@manasvi' },
    { name: 'Email', icon: <FiMail />, url: 'mailto:your@email.com', handle: 'your@email.com' },
];

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    className="contact__subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Want to collaborate, have a question, or just say hi?
                    <br />
                    Feel free to reach out — I&apos;m always open to new opportunities.
                </motion.p>

                <div className="contact__grid">
                    {socials.map((social, i) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target={social.url.startsWith('mailto') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="contact__card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <span className="contact__icon">{social.icon}</span>
                            <div className="contact__info">
                                <span className="contact__name">{social.name}</span>
                                <span className="contact__handle">{social.handle}</span>
                            </div>
                            <FiArrowUpRight className="contact__arrow" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
