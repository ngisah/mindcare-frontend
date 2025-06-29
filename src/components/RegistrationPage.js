import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import Logo from './Logo';

// Placeholder data - in a real app, this would likely come from a library or API
const africanCountries = [
  "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cote d'Ivoire", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
];

const countryCodes = [
  { name: 'Nigeria', code: '+234' },
  { name: 'Ghana', code: '+233' },
  { name: 'Kenya', code: '+254' },
  { name: 'South Africa', code: '+27' },
];


const RegistrationPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <div className="auth-header">
          <Logo />
          <h2>Create Your Account</h2>
          <p>Start your mental wellness journey with MindCare today.</p>
        </div>
        <form className="auth-form">
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="country">Country of Origin</label>
            <select id="country" required>
              <option value="">Select your country</option>
              {africanCountries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="phone-input">
              <select className="country-code-dropdown">
                {countryCodes.map(c => (
                  <option key={c.code} value={c.code}>{c.name} ({c.code})</option>
                ))}
              </select>
              <input type="tel" id="phone" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="auth-btn">Register</button>
        </form>
        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage; 