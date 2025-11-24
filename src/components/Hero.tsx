import { useState } from 'react';
import { Zap, MessageCircle, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import PreQualifierModal from './PreQualifierModal';
import './Hero.css';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalSubmit = (answers: { question1: string; question2: string }) => {
        // Create personalized WhatsApp message with pre-qualifier answers
        const message = `Hi, I'm interested in your expert mentorship program.\n\nExperience Level: ${answers.question1}\nPrimary Goal: ${answers.question2}\n\nI'd like to discuss how you can help me achieve trading mastery.`;

        window.open(`https://wa.me/254769879268?text=${encodeURIComponent(message)}`, '_blank');
        setIsModalOpen(false);
    };

    return (
        <section className="hero" id="home">
            <div className="hero-background"></div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-copy">

                        <h1 className="hero-title animate-fadeInUp">
                            Stop Gambling. Start <span className="text-gradient">Mastering</span> Forex.
                        </h1>
                        <p className="hero-subtitle animate-fadeInUp">
                            If you're tired of inconsistent results and emotional trading, this is for you.
                            Join our elite mentorship program and learn the systematic approach that delivers a 92% success rate.
                        </p>

                        {/* Scarcity Messaging - Implied, not explicit */}
                        <div className="scarcity-banner animate-fadeInUp">
                            <Zap className="scarcity-icon" size={20} />
                            <span className="scarcity-text">
                                <strong>Limited Availability:</strong> Mentorship slots are carefully managed to ensure quality
                            </span>
                        </div>

                        <div className="hero-stats animate-fadeInUp">
                            <div className="stat">
                                <div className="stat-value">5+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value">92%</div>
                                <div className="stat-label">Success Rate</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value">HFM</div>
                                <div className="stat-label">Partner Broker</div>
                            </div>
                        </div>

                        <div className="hero-cta animate-fadeInUp">
                            <button
                                className="btn btn-primary btn-large"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Request Expert Advisory Access
                                <ArrowRight size={20} />
                            </button>
                            <button className="btn btn-outline btn-large" onClick={() => {
                                document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                View Free Classes
                            </button>
                        </div>

                        <p className="hero-note animate-fadeInUp">
                            <MessageCircle size={16} className="text-muted" />
                            <span>Our WhatsApp advisory is a direct line to expert guidance, not tech support. Serious traders only.</span>
                        </p>
                    </div>

                    <div className="hero-panel glass animate-fadeInUp">
                        <div className="hero-panel-header">
                            <span className="hero-panel-label">Mentorship • Live Trading • Signals</span>
                            <h3>Get a clear roadmap to trading mastery</h3>
                        </div>
                        <ul className="hero-panel-list">
                            <li>
                                <CheckCircle2 size={18} className="text-accent-gold" />
                                <span>Structured curriculum from fundamentals to advanced systems.</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} className="text-accent-gold" />
                                <span>Live market sessions with breakdown of every trade.</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} className="text-accent-gold" />
                                <span>Risk management and trading psychology coaching.</span>
                            </li>
                            <li>
                                <CheckCircle2 size={18} className="text-accent-gold" />
                                <span>Direct WhatsApp access to an expert advisor.</span>
                            </li>
                        </ul>
                        <div className="hero-panel-footer">
                            <div className="hero-panel-highlight">
                                <span className="hero-panel-highlight-label">Next intake</span>
                                <div className="hero-panel-highlight-value">
                                    <Calendar size={16} />
                                    <span>Limited rolling slots</span>
                                </div>
                            </div>
                            <p className="hero-panel-note">
                                Answer two quick questions to see if you're a good fit for the mentorship program.
                            </p>
                            <button
                                className="btn btn-secondary hero-panel-cta"
                                onClick={() => window.open('https://www.hfm.com/ke/en/?refid=30448802', '_blank')}
                            >
                                Open HFM Trading Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <PreQualifierModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleModalSubmit}
            />
        </section>
    );
}

export default Hero;
