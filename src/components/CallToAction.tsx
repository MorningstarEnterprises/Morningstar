import { useState } from 'react';
import { Zap, Check, ArrowRight, Calendar, Gift } from 'lucide-react';
import PreQualifierModal from './PreQualifierModal';
import './CallToAction.css';

const CallToAction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalSubmit = (answers: { question1: string; question2: string }) => {
        const message = `Hi, I want to join the Lifetime Mentorship Program (KShs 2,000 offer).\\n\\nExperience Level: ${answers.question1}\\nPrimary Goal: ${answers.question2}\\n\\nPlease confirm my enrollment.`;

        window.open(`https://wa.me/254769879268?text=${encodeURIComponent(message)}`, '_blank');
        setIsModalOpen(false);
    };

    return (
        <section className="cta section" id="classes">
            <div className="container">
                <div className="cta-content glass">
                    <div className="cta-badge">
                        <Calendar size={16} />
                        <span>⚡ URGENT: Offer Ends December 30th, 2025</span>
                    </div>

                    <h2 className="cta-title">
                        Lifetime Mentorship<br />
                        <span className="text-gold">Only KShs 2,000!</span>
                    </h2>
                    <p className="cta-subtitle">
                        🔥 <strong>Limited Time Only!</strong> Get lifetime access to expert mentorship,
                        free seasonal classes, and proven strategies for just KShs 2,000.
                        This exclusive offer expires on <strong>December 30th, 2025</strong> - Don't miss out!
                    </p>

                    <div className="cta-offer-box">
                        <div className="offer-price">
                            <span className="price-label">One-Time Payment</span>
                            <span className="price-amount">KShs 2,000</span>
                            <span className="price-note">Lifetime Access • Ends Dec 30</span>
                        </div>
                    </div>

                    <div className="cta-features">
                        <div className="cta-feature">
                            <Check size={20} className="feature-icon" />
                            <span>Lifetime 1-on-1 mentorship</span>
                        </div>
                        <div className="cta-feature">
                            <Check size={20} className="feature-icon" />
                            <span>Free seasonal training classes</span>
                        </div>
                        <div className="cta-feature">
                            <Check size={20} className="feature-icon" />
                            <span>Proven systematic strategies</span>
                        </div>
                        <div className="cta-feature">
                            <Check size={20} className="feature-icon" />
                            <span>HFM broker partnership benefits</span>
                        </div>
                    </div>

                    <div className="cta-buttons">
                        <button
                            className="btn btn-primary btn-large"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Gift size={20} />
                            Claim Your Lifetime Access Now
                            <ArrowRight size={20} />
                        </button>
                        <button
                            className="btn btn-secondary btn-large"
                            onClick={() => {
                                document.getElementById('free-classes')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Get Access to Free Classes
                        </button>
                    </div>

                    <p className="cta-countdown">
                        <Zap size={16} />
                        <span>⏰ This special KShs 2,000 offer expires on <strong>December 30th, 2025</strong>. After that, prices return to normal. Secure your spot today!</span>
                    </p>
                </div>
            </div>

            <PreQualifierModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleModalSubmit}
            />
        </section>
    );
};

export default CallToAction;
