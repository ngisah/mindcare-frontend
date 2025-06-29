import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import Logo from './Logo';

const LoginPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <div className="auth-header">
          <Logo />
          <h2>Welcome Back</h2>
          <p>Login to continue your journey with MindCare.</p>
        </div>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="emailOrPhone">Email or Phone Number</label>
            <input type="text" id="emailOrPhone" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 