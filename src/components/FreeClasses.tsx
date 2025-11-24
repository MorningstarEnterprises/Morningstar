import { Calendar, Users, Clock, ArrowRight } from 'lucide-react';
import './FreeClasses.css';

const FreeClasses = () => {
    const handleJoinClass = () => {
        const message = `Hi! I'm interested in joining the free seasonal trading classes. Please send me the details and schedule.`;
        window.open(`https://wa.me/254769879268?text=${encodeURIComponent(message)}`, '_blank');
    };

    const upcomingClasses = [
        {
            title: 'Forex Fundamentals Bootcamp',
            duration: 'Multi-Day',
            spots: 'Limited spots',
            topics: ['Market basics', 'Chart reading', 'Risk management']
        },
        {
            title: 'Technical Analysis Masterclass',
            duration: 'Multi-Day',
            spots: 'Limited spots',
            topics: ['Price action', 'Indicators', 'Entry/exit strategies']
        },
        {
            title: 'Psychology of Trading',
            duration: 'Multi-Day',
            spots: 'Limited spots',
            topics: ['Emotional control', 'Discipline', 'Trading mindset']
        }
    ];

    return (
        <section className="free-classes section" id="free-classes">
            <div className="container">
                <div className="section-header">
                    <div className="free-badge">
                        <Calendar size={16} />
                        <span>Seasonal Free Classes</span>
                    </div>
                    <h2 className="section-title">
                        Join Our <span className="text-gradient">Free Trading Classes</span>
                    </h2>
                    <p className="section-subtitle">
                        Get a taste of our proven teaching methodology. These seasonal classes fill up fast—secure your spot today.
                    </p>
                </div>

                <div className="classes-grid">
                    {upcomingClasses.map((classItem, index) => (
                        <div key={index} className="class-card glass">
                            <div className="class-header">
                                <h3 className="class-title">{classItem.title}</h3>
                                <div className="class-meta">
                                    <div className="class-duration">
                                        <Clock size={16} />
                                        <span>{classItem.duration}</span>
                                    </div>
                                    <div className="class-spots">
                                        <Users size={16} />
                                        <span>{classItem.spots}</span>
                                    </div>
                                </div>
                            </div>
                            <ul className="class-topics">
                                {classItem.topics.map((topic, idx) => (
                                    <li key={idx}>
                                        <ArrowRight size={14} className="topic-icon" />
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="classes-cta">
                    <button className="btn btn-primary btn-large" onClick={handleJoinClass}>
                        Reserve Your Free Spot on WhatsApp
                        <ArrowRight size={20} />
                    </button>
                    <p className="classes-note">
                        💬 Click to chat with us on WhatsApp and get the class schedule
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FreeClasses;
