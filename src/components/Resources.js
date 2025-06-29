import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <section className="resources" id="resources">
      <h2>A Library of Culturally-Informed Resources</h2>
      <p>Access a wealth of content designed to support your mental wellness journey, all created with a deep understanding of African cultural contexts.</p>
      <div className="resource-list">
        <div className="resource-card">Coping Strategies</div>
        <div className="resource-card">Guided Meditations</div>
        <div className="resource-card">Mental Health Education</div>
        <div className="resource-card">Country-Specific Helplines</div>
      </div>
    </section>
  );
};

export default Resources; 