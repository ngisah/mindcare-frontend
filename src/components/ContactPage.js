import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceholderPage.css';
import Logo from './Logo';

const ContactPage = () => {
  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <Logo />
        <h1>Contact Us</h1>
        <p>This page is under construction. Please check back later for contact information.</p>
        <Link to="/" className="placeholder-btn">Return to Homepage</Link>
      </div>
    </div>
  );
};

export default ContactPage; 