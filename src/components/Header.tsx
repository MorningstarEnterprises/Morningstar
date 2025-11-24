import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <img src="/favicon.png" alt="Morningstar" className="logo-icon" />
            <span className="logo-text">Morningstar</span>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a onClick={() => scrollToSection('free-classes')}>Classes</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>

          <button
            className="btn btn-primary cta-button"
            onClick={() => window.open('https://www.hfm.com/ke/en/?refid=30448802', '_blank')}
          >
            Open HFM Trading Account
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
