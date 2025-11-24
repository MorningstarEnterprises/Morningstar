import { Star, User } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Nimo',
            role: 'Student',
            rating: 5,
            text: 'This has been incredibly valuable to me! I\'m so grateful for everything I\'ve learned, and I\'m just getting started on this amazing journey!'
        },
        {
            name: 'Miriam',
            role: 'Student',
            rating: 5,
            text: 'The impact has been absolutely positive! I\'m so excited about what the future holds and can\'t wait to see where this takes me!'
        },
        {
            name: 'Kylan',
            role: 'Trader',
            rating: 5,
            text: 'It\'s been an incredible year since I started my Forex journey! I\'ve mastered so much and continue perfecting my skills through the amazing one-on-one mentorship and free training. As this year ends, I\'m truly grateful for your dedication to mentoring and guiding us. Your passion inspires everyone who\'s willing to learn and grow!'
        }
    ];

    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What Our <span className="text-gradient">Traders Say</span></h2>
                    <p className="section-subtitle">
                        Join thousands of successful traders who trust Morningstar
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card glass" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" className="star" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    <User size={24} />
                                </div>
                                <div className="author-info">
                                    <div className="author-name">{testimonial.name}</div>
                                    <div className="author-role">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
