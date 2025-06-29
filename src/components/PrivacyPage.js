import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceholderPage.css';
import Logo from './Logo';

const PrivacyPage = () => {
  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <Logo />
        <h1>Privacy Policy</h1>
        <p>This page is under construction. Our full privacy policy will be available here soon.</p>
        <Link to="/" className="placeholder-btn">Return to Homepage</Link>
      </div>
    </div>
  );
};

export default PrivacyPage; 