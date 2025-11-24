import { useEffect, useRef, useState } from 'react';
import { BookOpen, TrendingUp, Award, ArrowRight } from 'lucide-react';
import './Roadmap.css';

const Roadmap = () => {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    const steps = [
        {
            icon: BookOpen,
            number: '01',
            title: 'Learn the System',
            description: 'Master our proven trading methodology through structured curriculum, study materials, and live sessions.',
            highlights: ['Fundamentals & technicals', 'Risk management', 'Psychology training']
        },
        {
            icon: TrendingUp,
            number: '02',
            title: 'Practice & Refine',
            description: 'Apply your knowledge in real market conditions with expert guidance and personalized feedback.',
            highlights: ['Live trading sessions', 'Expert mentorship', 'Trade analysis']
        },
        {
            icon: Award,
            number: '03',
            title: 'Achieve Mastery',
            description: 'Execute consistently profitable trades with confidence, discipline, and a systematic approach.',
            highlights: ['Consistent profits', 'Trading independence', 'Community support']
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;

            // Section is in view
            if (rect.top <= 0 && rect.bottom >= windowHeight) {
                // Calculate how far we've scrolled through the section
                const scrollProgress = Math.abs(rect.top) / (sectionHeight - windowHeight);

                // Determine which step should be active (0, 1, or 2)
                const step = Math.min(Math.floor(scrollProgress * 3), 2);
                setActiveStep(step);
            } else if (rect.top > 0) {
                // Before entering section
                setActiveStep(0);
            } else if (rect.bottom < windowHeight) {
                // After leaving section
                setActiveStep(2);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentStep = steps[activeStep];
    const CurrentIcon = currentStep.icon;

    return (
        <section className="roadmap section" id="roadmap" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Your Path to <span className="text-gradient">Trading Mastery</span>
                    </h2>
                    <p className="section-subtitle">
                        A clear, proven roadmap from beginner to consistently profitable trader
                    </p>
                </div>

                <div className="roadmap-content">
                    {/* Left Side - Vertical Progress */}
                    <div className="roadmap-sidebar">
                        <div className="roadmap-numbers-vertical">
                            {steps.map((step, index) => (
                                <div key={index} className="step-number-item">
                                    <div
                                        className={`step-number ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
                                    >
                                        {step.number}
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="step-connector">
                                            <div
                                                className="step-connector-fill"
                                                style={{
                                                    height: index < activeStep ? '100%' : '0%'
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Active Card */}
                    <div className="roadmap-cards">
                        <div className="roadmap-card glass" key={activeStep}>
                            <div className="step-icon-wrapper">
                                <CurrentIcon className="step-icon" size={40} />
                            </div>
                            <h3 className="step-title">{currentStep.title}</h3>
                            <p className="step-description">{currentStep.description}</p>
                            <ul className="step-highlights">
                                {currentStep.highlights.map((highlight, idx) => (
                                    <li key={idx}>
                                        <ArrowRight size={14} className="highlight-icon" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <span>Scroll to explore the journey</span>
                    <div className="scroll-arrow">↓</div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
