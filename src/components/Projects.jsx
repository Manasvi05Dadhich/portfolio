import { motion } from 'framer-motion';
import FlowingMenu from './FlowingMenu';
import './Projects.css';

const demoItems = [
    { link: 'https://github.com/Manasvi05Dadhich/skillchain', text: 'SkillChain', image: 'https://picsum.photos/600/400?random=1' },
    { link: 'https://github.com/Manasvi05Dadhich/zerosync-backend', text: 'ZeroSync', image: 'https://picsum.photos/600/400?random=2' },
    { link: 'https://github.com/Manasvi05Dadhich/SnapSync', text: 'SnapSync', image: 'https://picsum.photos/600/400?random=3' },
    { link: 'https://github.com/Manasvi05Dadhich/OneWipe', text: 'OneWipe', image: 'https://picsum.photos/600/400?random=4' },
    { link: 'https://github.com/Manasvi05Dadhich/StabilityNet', text: 'StabilityNet', image: 'https://picsum.photos/600/400?random=5' }
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
