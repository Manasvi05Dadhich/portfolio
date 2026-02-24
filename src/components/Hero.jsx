import { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import PixelBlast from './PixelBlast';
import './Hero.css';

const bootLines = [
    '> booting portfolio...',
    '> loading modules...',
    '> connected to blockchain',
];

const getTimeString = () => {
    const now = new Date();
    const day = now.getDate();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${day} ${month} ${year} | ${String(hours).padStart(2, '0')}:${minutes} ${ampm} IST`;
};

const CHAR_SPEED = 35; // ms per character

function TypingLine({ text, onDone, className, children }) {
    const [displayed, setDisplayed] = useState('');
    const idx = useRef(0);

    useEffect(() => {
        idx.current = 0;
        setDisplayed('');
        const interval = setInterval(() => {
            idx.current++;
            setDisplayed(text.slice(0, idx.current));
            if (idx.current >= text.length) {
                clearInterval(interval);
                if (onDone) setTimeout(onDone, 200);
            }
        }, CHAR_SPEED);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <p className={`hero__line ${className || ''}`}>
            {displayed}
            {idx.current >= text.length && children}
            {idx.current < text.length && <span className="hero__cursor">_</span>}
        </p>
    );
}

const Hero = () => {
    const { theme } = useTheme();
    const pixelColor = theme === 'dark' ? '#A7EF9E' : '#b19eef';
    const [step, setStep] = useState(0);
    const [currentTime, setCurrentTime] = useState(getTimeString());

    // Live clock
    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(getTimeString()), 1000);
        return () => clearInterval(interval);
    }, []);

    const advance = () => setStep(s => s + 1);

    // Total steps: bootLines.length (0,1,2) + user(3) + role(4) + time(5) + ready(6)
    const userStep = bootLines.length;
    const roleStep = userStep + 1;
    const timeStep = roleStep + 1;
    const readyStep = timeStep + 1;

    return (
        <section id="hero" className="hero">
            <div className="hero__bg">
                <PixelBlast
                    key={theme}
                    variant="square"
                    pixelSize={4}
                    color={pixelColor}
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

            <div className="hero__content">
                <div className="hero__terminal">
                    {bootLines.map((line, i) => (
                        step >= i && (
                            <TypingLine
                                key={i}
                                text={line}
                                onDone={step === i ? advance : undefined}
                            />
                        )
                    ))}

                    {step >= userStep && (
                        <TypingLine
                            text="> user: "
                            className="hero__line--highlight"
                            onDone={step === userStep ? advance : undefined}
                        >
                            <span className="hero__value">Manasvi</span>
                        </TypingLine>
                    )}

                    {step >= roleStep && (
                        <div className="hero__line hero__line--highlight">
                            <span>{`> role: `}</span>
                            <TypeAnimation
                                sequence={[
                                    'SMART CONTRACT ENGINEER',
                                    2000,
                                    'WEB DEVELOPER',
                                    2000,
                                    'BLOCKCHAIN DEVELOPER',
                                    2000,
                                    'APP DEVELOPER',
                                    2000,
                                    'FULL-STACK BUILDER',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="hero__value hero__value--typed"
                                preRenderFirstString={false}
                            />
                            {step === roleStep && (
                                <span style={{ visibility: 'hidden' }}>
                                    {/* auto advance after a short delay */}
                                    <AutoAdvance onDone={advance} delay={800} />
                                </span>
                            )}
                        </div>
                    )}

                    {step >= timeStep && (
                        <TypingLine
                            text={`> system time: ${currentTime}`}
                            onDone={step === timeStep ? advance : undefined}
                        />
                    )}

                    {step >= readyStep && (
                        <motion.p
                            className="hero__line hero__line--ready"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {'> ready'}<span className="hero__cursor">_</span>
                        </motion.p>
                    )}
                </div>
            </div>

            <motion.div
                className="hero__scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= readyStep ? 1 : 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="hero__scroll-line" />
                <span className="hero__scroll-text">scroll</span>
            </motion.div>
        </section>
    );
};

function AutoAdvance({ onDone, delay }) {
    useEffect(() => {
        const timer = setTimeout(onDone, delay);
        return () => clearTimeout(timer);
    }, []);
    return null;
}

export default Hero;
