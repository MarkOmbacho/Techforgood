import React, { useState } from 'react';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState('tabiya'); // Default to Tabiya API

  return (
    <div className="features-page">
      <header className="features-header">
        <h1>Project Features</h1>
        <p1>Explore how we leverage Tabiya API and Compass AI to deliver innovative solutions.</p1>
      </header>

      <div className="feature-tabs">
        <button
          className={selectedFeature === 'tabiya' ? 'tab active' : 'tab'}
          onClick={() => setSelectedFeature('tabiya')}
        >
          Tabiya API
        </button>
        <button
          className={selectedFeature === 'compass' ? 'tab active' : 'tab'}
          onClick={() => setSelectedFeature('compass')}
        >
          Compass AI
        </button>
      </div>

      <div className="feature-content">
        {selectedFeature === 'tabiya' && (
          <div className="tabiya-feature">
            <h2>Tabiya API Integration</h2>
            <p>
              The <strong>Tabiya API</strong> allows us to harness the power of data and analytics to create personalized user experiences. 
              Our integration enables real-time analysis, making it easier to match users with projects that align with their skills and interests.
            </p>
            <ul>
              <li>Real-time project suggestions based on user behavior.</li>
              <li>Data-driven insights to help organizations find the right candidates for community work.</li>
              <li>Seamless integration with LinkedIn profiles to analyze professional backgrounds.</li>
            </ul>
            <div className="feature-image">
              <img src="https://via.placeholder.com/600x300" alt="Tabiya API illustration" />
            </div>
          </div>
        )}

        {selectedFeature === 'compass' && (
          <div className="compass-feature">
            <h2>Compass AI Integration</h2>
            <p>
              <strong>Compass AI</strong> helps us automate the matching process between users and projects. With its advanced machine learning algorithms, 
              Compass AI can predict the most suitable projects for users based on their preferences, past experiences, and project needs.
            </p>
            <ul>
              <li>Predictive matching to pair users with relevant community projects.</li>
              <li>Automated suggestions based on user data and project requirements.</li>
              <li>Continuous learning from user feedback to improve recommendations over time.</li>
            </ul>
            <div className="feature-image">
              <img src="https://via.placeholder.com/600x300" alt="Compass AI illustration" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
