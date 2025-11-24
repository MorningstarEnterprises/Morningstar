import { Star, MessageCircle, Phone, AlertTriangle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <Star className="logo-icon" size={24} />
                            <span className="logo-text">Morningstar</span>
                        </div>
                        <p className="footer-description">
                            Your trusted partner in forex trading education and success.
                            Join thousands of traders achieving their financial goals.
                        </p>
                        <div className="footer-social">
                            <a href="https://wa.me/254769879268" target="_blank" rel="noopener noreferrer" className="social-link">
                                <MessageCircle size={18} />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section" id="materials">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Home</a></li>
                            <li><a onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Services</a></li>
                            <li><a onClick={() => document.getElementById('materials')?.scrollIntoView({ behavior: 'smooth' })}>Study Materials</a></li>
                            <li><a onClick={() => document.getElementById('free-classes')?.scrollIntoView({ behavior: 'smooth' })}>Free Classes</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Our Services</h4>
                        <ul className="footer-links">
                            <li><a onClick={() => window.open('https://wa.me/254769879268?text=Tell me about Live Trading Sessions', '_blank')}>Live Trading Sessions</a></li>
                            <li><a onClick={() => window.open('https://wa.me/254769879268?text=Tell me about Trading Signals', '_blank')}>Trading Signals</a></li>
                            <li><a onClick={() => window.open('https://wa.me/254769879268?text=Tell me about Study Materials', '_blank')}>Study Materials</a></li>
                            <li><a onClick={() => window.open('https://wa.me/254769879268?text=Tell me about Free Classes', '_blank')}>Seasonal Classes</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <Phone size={18} className="contact-icon" />
                                <a href="https://wa.me/254769879268" target="_blank" rel="noopener noreferrer">
                                    +254 769 879 268
                                </a>
                            </li>
                            <li>
                                <MessageCircle size={18} className="contact-icon" />
                                <span>Available 24/7 on WhatsApp</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-disclaimer">
                        <p>
                            <AlertTriangle size={16} />
                            <strong>Risk Disclaimer:</strong> Forex trading involves substantial risk of loss and is not suitable for all investors.
                            Past performance is not indicative of future results. Please trade responsibly.
                        </p>
                    </div>
                    <div className="footer-copyright">
                        <p>&copy; {currentYear} Morningstar Forex Trading. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
