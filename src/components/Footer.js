import React from 'react';
import './Footer.css';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <Logo />
          <p>MindCare is the first AI-powered mental health platform designed by Africans, for Africans.</p>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section links">
          <h4>Support</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/crisis">Crisis Support</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            {/* Replace with actual links */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MindCare Africa. All rights reserved.
        <p className="crisis-disclaimer">
          If you are in a crisis or any other person may be in danger, don't use this site. <a href="/crisis">Get immediate help.</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 