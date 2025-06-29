import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceholderPage.css';
import Logo from './Logo';

const CrisisPage = () => {
  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <Logo />
        <h1>Crisis Support</h1>
        <p>
          If you are in a crisis or any other person may be in danger, please seek immediate help.
          Do not use this site.
        </p>
        <p>
          <strong>Contact your local emergency services immediately.</strong>
        </p>
        <Link to="/" className="placeholder-btn">Return to Homepage</Link>
      </div>
    </div>
  );
};

export default CrisisPage; 