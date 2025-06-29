import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <div className="step-number">1</div>
          <h3>Sign Up</h3>
          <p>Create your account and tell us about your cultural and language preferences.</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3>Initial Assessment</h3>
          <p>Complete a short, confidential screening to help us understand your needs.</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3>Personalized Plan</h3>
          <p>Our AI creates a customized support plan based on your goals and preferences.</p>
        </div>
        <div className="step">
          <div className="step-number">4</div>
          <h3>Start Chatting</h3>
          <p>Begin your guided conversation with our culturally sensitive AI chatbot, 24/7.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 