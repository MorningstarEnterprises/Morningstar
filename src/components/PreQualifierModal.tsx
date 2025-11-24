import { useState } from 'react';
import './PreQualifierModal.css';

interface PreQualifierModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (answers: { question1: string; question2: string }) => void;
}

const PreQualifierModal = ({ isOpen, onClose, onSubmit }: PreQualifierModalProps) => {
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (question1 && question2) {
            onSubmit({ question1, question2 });
            // Reset form
            setQuestion1('');
            setQuestion2('');
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="modal-header">
                    <h3>Request Expert Advisory Access</h3>
                    <p className="modal-subtitle">
                        Our WhatsApp advisory is reserved for serious traders. Please answer these questions to ensure we can provide you with the most relevant guidance.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="pre-qualifier-form">
                    <div className="form-group">
                        <label htmlFor="question1">
                            1. What is your current experience level with forex trading?
                        </label>
                        <select
                            id="question1"
                            value={question1}
                            onChange={(e) => setQuestion1(e.target.value)}
                            required
                        >
                            <option value="">Select your experience level</option>
                            <option value="complete-beginner">Complete Beginner - Never traded before</option>
                            <option value="beginner">Beginner - Less than 6 months experience</option>
                            <option value="intermediate">Intermediate - 6 months to 2 years</option>
                            <option value="advanced">Advanced - 2+ years of trading</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="question2">
                            2. What is your primary goal in joining our mentorship program?
                        </label>
                        <select
                            id="question2"
                            value={question2}
                            onChange={(e) => setQuestion2(e.target.value)}
                            required
                        >
                            <option value="">Select your primary goal</option>
                            <option value="learn-basics">Learn the fundamentals of forex trading</option>
                            <option value="consistent-profits">Achieve consistent profitable trading</option>
                            <option value="risk-management">Master risk management strategies</option>
                            <option value="full-time">Transition to full-time trading</option>
                            <option value="supplement-income">Supplement my current income</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary btn-large" disabled={!question1 || !question2}>
                        Access Expert Advisory
                    </button>

                    <p className="modal-note">
                        🔒 Your information is confidential and helps us provide personalized guidance
                    </p>
                </form>
            </div>
        </div>
    );
};

export default PreQualifierModal;
