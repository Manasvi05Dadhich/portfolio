import { motion } from 'framer-motion';
import FlowingMenu from './FlowingMenu';
import './Projects.css';

const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];

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

                <div className="projects__flowing-menu-wrapper">
                    <FlowingMenu
                        items={demoItems}
                        speed={15}
                        textColor="#f5f1ed"
                        bgColor="#0f0e0a"
                        marqueeBgColor="#A7EF9E"
                        marqueeTextColor="#0f0e0a"
                        borderColor="#2a2824"
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
