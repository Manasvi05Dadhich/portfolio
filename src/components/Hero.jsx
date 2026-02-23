import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import PixelBlast from './PixelBlast';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            {/* PixelBlast Background */}
            <div className="hero__bg">
                <PixelBlast
                    variant="square"
                    pixelSize={4}
                    color="#e66700"
                    patternScale={2}
                    patternDensity={1}
                    pixelSizeJitter={0}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid={false}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.5}
                    edgeFade={0.25}
                    transparent
                />
            </div>

            {/* Content */}
            <div className="hero__content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="hero__text"
                >
                    <motion.p
                        className="hero__greeting"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Hey, I&apos;m
                    </motion.p>

                    <motion.h1
                        className="hero__name"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        MANASVI
                    </motion.h1>

                    <div className="hero__typewriter">
                        <span className="hero__typewriter-prefix">I&apos;m a </span>
                        <TypeAnimation
                            sequence={[
                                'Web Developer',
                                2000,
                                'Blockchain Developer',
                                2000,
                                'Smart Contract Engineer',
                                2000,
                                'App Developer',
                                2000,
                                'Full-Stack Builder',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="hero__typewriter-text"
                        />
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="hero__scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className="hero__scroll-line" />
                    <span className="hero__scroll-text">scroll</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
