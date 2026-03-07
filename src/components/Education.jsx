import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import './Education.css';

const education = [
    {
        degree: 'Bachelor of Technology',
        institution: 'M.L.V. Textile & Engineering College',
        period: '2023 — 2027',
        description: 'Information Technology',

    },
    
];

const Education = () => {
    return (
        <section id="education" className="education section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    Education
                </motion.h2>

                <div className="education__grid">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            className="education__card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true, margin: '-50px' }}
                        >
                            <div className="education__icon">
                                <FiBookOpen />
                            </div>
                            <span className="education__period">{edu.period}</span>
                            <h3 className="education__degree">{edu.degree}</h3>
                            <span className="education__institution">{edu.institution}</span>
                            <p className="education__description">{edu.description}</p>
                            {edu.highlights && edu.highlights.length > 0 && (
                                <div className="education__highlights">
                                    {edu.highlights.map((h) => (
                                        <span key={h} className="education__highlight">
                                            <FiAward /> {h}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
