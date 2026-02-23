import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer__container">
                <span className="footer__logo">M<span className="footer__dot">.</span></span>
                <p className="footer__text">
                    &copy; {year} Manasvi. Built with React &amp; passion.
                </p>
                <a
                    className="footer__back-top"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    role="button"
                    tabIndex={0}
                >
                    ↑ Back to top
                </a>
            </div>
        </footer>
    );
};

export default Footer;
