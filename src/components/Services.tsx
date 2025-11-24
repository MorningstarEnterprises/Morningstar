import { useState } from 'react';
import { BarChart2, TrendingUp, BookOpen, GraduationCap, Check, ArrowRight } from 'lucide-react';
import PreQualifierModal from './PreQualifierModal';
import './Services.css';

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const handleServiceClick = (serviceTitle: string) => {
        setSelectedService(serviceTitle);
        setIsModalOpen(true);
    };

    const handleModalSubmit = (answers: { question1: string; question2: string }) => {
        const message = `Hi, I want to learn more about ${selectedService}.\n\nExperience Level: ${answers.question1}\nPrimary Goal: ${answers.question2}\n\nPlease provide more details about this service.`;

        window.open(`https://wa.me/254769879268?text=${encodeURIComponent(message)}`, '_blank');
        setIsModalOpen(false);
    };

    const services = [
        {
            icon: BarChart2,
            title: 'Live Trading Sessions',
            description: 'Join our expert traders in real-time market analysis. Watch, learn, and execute trades alongside professionals using proven systematic strategies.',
            features: ['Real-time market analysis', 'Live trade execution', 'Expert commentary', 'Daily market insights']
        },
        {
            icon: TrendingUp,
            title: 'Trading Signals',
            description: 'Receive high-probability signals with detailed entry, stop-loss, and take-profit levels. Our 92% success rate speaks for itself.',
            features: ['92% accuracy rate', 'Instant notifications', 'Risk management included', 'Multiple currency pairs']
        },
        {
            icon: BookOpen,
            title: 'Study Materials',
            description: 'Comprehensive learning resources designed to transform you from a gambler to a master trader. Learn the systematic approach that works.',
            features: ['Video tutorials', 'PDF guides & eBooks', 'Proven strategies', 'Chart pattern mastery']
        },
        {
            icon: GraduationCap,
            title: 'Elite Mentorship Program',
            description: 'Limited slots available for serious traders. Get direct access to expert guidance and personalized coaching to achieve trading mastery.',
            features: ['1-on-1 mentorship', 'Personalized guidance', 'HFM partnership benefits', 'Exclusive community']
        }
    ];

    return (
        <section className="services section" id="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Transform Your Trading with <span className="text-gradient">Proven Systems</span></h2>
                    <p className="section-subtitle">
                        Stop gambling. Start mastering. Everything you need to achieve consistent profitability.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card glass" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="service-icon-wrapper">
                                <service.icon className="service-icon" size={32} />
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <Check size={16} className="feature-check" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="btn btn-outline service-btn"
                                onClick={() => handleServiceClick(service.title)}
                            >
                                Request Access
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
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

export default Services;
