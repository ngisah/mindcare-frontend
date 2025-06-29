import React from 'react';
import './TrustIndicators.css';

const TrustIndicators = () => {
  return (
    <section className="trust-indicators" id="trust">
      <div className="trust-item">
        <h4>Endorsed by Professionals</h4>
        <p>Our platform is backed by leading mental health experts across Africa.</p>
      </div>
      <div className="trust-item">
        <h4>Secure & Confidential</h4>
        <p>Your privacy is our priority. All data is end-to-end encrypted.</p>
      </div>
      <div className="trust-item">
        <h4>Real User Testimonials</h4>
        <p>"MindCare has been a transformative experience for me." - A. User</p>
      </div>
    </section>
  );
};

export default TrustIndicators; 