import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Do I need a large capital to start trading?",
            answer: "No. You can start with as little as $100. We teach proper risk management so you can grow your account sustainably. Many of our successful students started with small accounts and scaled up over time."
        },
        {
            question: "Is this suitable for complete beginners?",
            answer: "Absolutely! Our curriculum is structured to take you from zero to proficient. We start with the fundamentals and progressively build your skills. Our free seasonal classes are perfect for getting started."
        },
        {
            question: "How much time do I need to dedicate daily?",
            answer: "It depends on your goals. For learning, 1-2 hours daily is ideal. For active trading, our strategies work on multiple timeframes—you can trade with as little as 30 minutes per day once you're trained."
        },
        {
            question: "What makes your mentorship different from YouTube tutorials?",
            answer: "We provide personalized 1-on-1 guidance, live market analysis, and direct access to expert advisors via WhatsApp. You're not just watching videos—you're getting real-time feedback on your trades and psychology coaching."
        },
        {
            question: "How long until I see results?",
            answer: "Most students see their first profitable trades within 2-3 months of consistent learning and practice. However, mastery takes time. We focus on building sustainable skills, not get-rich-quick schemes."
        },
        {
            question: "Do you guarantee profits?",
            answer: "No one can guarantee profits in trading—anyone who does is lying. What we guarantee is quality education, proven strategies, and expert support. Your success depends on your commitment to learning and following the system."
        },
        {
            question: "Why do I need to answer questions to access WhatsApp?",
            answer: "Our expert advisory is reserved for serious traders. The pre-qualifier helps us understand your goals so we can provide personalized guidance, not generic tech support. It takes 30 seconds and ensures you get real value."
        },
        {
            question: "What is the HFM partnership benefit?",
            answer: "As an official HFM partner, our students get preferential spreads, faster withdrawals, and dedicated account support. It's a trusted broker we've vetted for reliability and fair execution."
        }
    ];

    return (
        <section className="faq section" id="faq">
            <div className="container">
                <div className="section-header">
                    <div className="faq-badge">
                        <HelpCircle size={16} />
                        <span>Got Questions?</span>
                    </div>
                    <h2 className="section-title">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="section-subtitle">
                        Everything you need to know before starting your trading journey with us.
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown
                                    size={20}
                                    className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}
                                />
                            </button>
                            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-cta">
                    <p>Still have questions?</p>
                    <button
                        className="btn btn-outline"
                        onClick={() => window.open('https://wa.me/254769879268?text=I have a question about the mentorship program', '_blank')}
                    >
                        Ask Us on WhatsApp
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
