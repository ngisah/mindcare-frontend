import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Logo from './Logo';
import TrustIndicators from './TrustIndicators';
import HowItWorks from './HowItWorks';
import Resources from './Resources';
import Community from './Community';
import AboutUs from './AboutUs';
import Footer from './Footer';

const LandingPage = () => {
  const handleLearnMoreClick = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">
          <Logo />
          <span className="logo-text">MindCare</span>
        </div>
        <nav className="nav-links">
          <a href="#how-it-works">How it Works</a>
          <a href="#resources">Resources</a>
          <a href="#community">Community</a>
          <a href="#about">About Us</a>
        </nav>
        <div className="header-actions">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/register" className="book-assessment-btn">Start Free Chat</Link>
        </div>
      </header>

      <main className="hero">
        <div className="hero-text">
          <h1>Mental health support in your language, respecting your culture.</h1>
          <p>
            MindCare is the first AI-powered mental health platform designed by Africans, for Africans—providing culturally sensitive support in your language, respecting your values, and understanding your unique context.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="book-assessment-btn">Start Free Chat</Link>
            <button className="learn-more-btn" onClick={handleLearnMoreClick}>Learn More</button>
          </div>
          <div className="language-selector">
            <select>
              <option>English</option>
              <option>Swahili</option>
              <option>French</option>
              <option>Arabic</option>
              <option>Yoruba</option>
              <option>Igbo</option>
              <option>Hausa</option>
              <option>Zulu</option>
              <option>Xhosa</option>
              <option>Amharic</option>
            </select>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://plus.unsplash.com/premium_photo-1692504792692-58c79c296b08?q=80&w=418&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mental Wellness in Africa" />
        </div>
      </main>

      <TrustIndicators />
      <HowItWorks />
      <Resources />
      <Community />
      <AboutUs />

      <Footer />
    </div>
  );
};

export default LandingPage;