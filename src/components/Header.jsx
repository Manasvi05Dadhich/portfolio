import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [time, setTime] = useState('');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            setTime(`${hours}:${minutes}:${seconds}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map(link => document.getElementById(link.id));
            const scrollPos = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPos) {
                    setActiveSection(navLinks[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                <a
                    className="header__logo"
                    onClick={() => scrollToSection('hero')}
                    role="button"
                    tabIndex={0}
                >
                    M<span className="header__logo-dot">.</span>
                </a>

                <div className="header__time">
                    {time}
                </div>

                <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__nav-list">
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <a
                                    className={`header__nav-link ${activeSection === link.id ? 'header__nav-link--active' : ''}`}
                                    onClick={() => scrollToSection(link.id)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                className="header__nav-link header__nav-link--blog"
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Blog ↗
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="header__actions">
                    <button
                        className="header__theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                    </button>

                    <button
                        className="header__hamburger"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;