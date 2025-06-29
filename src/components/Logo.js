import React from 'react';

const Logo = () => {
  return (
    <svg className="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2A4B5C', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#5C9A9A', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#logoGradient)"
        d="M50,5 C74.8,5 95,25.2 95,50 C95,74.8 74.8,95 50,95 C25.2,95 5,74.8 5,50 C5,25.2 25.2,5 50,5 Z M50,15 C30.7,15 15,30.7 15,50 C15,69.3 30.7,85 50,85 C69.3,85 85,69.3 85,50 C85,30.7 69.3,15 50,15 Z"
      />
      <path
        fill="url(#logoGradient)"
        d="M50,25 C63.8,25 75,36.2 75,50 C75,63.8 63.8,75 50,75 C36.2,75 25,63.8 25,50 C25,36.2 36.2,25 50,25 Z M50,35 C41.7,35 35,41.7 35,50 C35,58.3 41.7,65 50,65 C58.3,65 65,58.3 65,50 C65,41.7 58.3,35 50,35 Z"
      />
    </svg>
  );
};

export default Logo; 