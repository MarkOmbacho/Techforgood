// src/pages/Home.js
import React from 'react';
import './Dashboard.css'; // Import any additional styling

const Home = () => {
  return (
    <div className="dashboard">
      <div className="content">
        {/* User Info Header */}
        <header className="header">
          <div className="user-info">
            <span className="user-icon"></span>
            <span className="notifications">3</span>
            <span className="messages">5</span>
          </div>
        </header>

        {/* Analytics Section */}
        <section className="analytics">
          <div className="upgrade-banner">
            <p>See Projects by the community</p>
            <button className="upgrade-button">Community Projects</button>
          </div>
          <div className="stats">
            <div className="stat-item">
              <h3>Active Projects</h3>
              <p>97.66k <span className="change decrease">-3.96%</span></p>
            </div>
            <div className="stat-item">
              <h3>Users</h3>
              <p>28.05k <span className="change increase">+16.24%</span></p>
            </div>
            <div className="stat-item">
              <h3>Project Completion Rate</h3>
              <p>33.48% <span className="change increase">+7.05%</span></p>
            </div>
            <div className="stat-item">
              <h3>Avg. Project Duration</h3>
              <p>3months 4days <span className="change decrease">-0.24%</span></p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map">
          <h3>Live Users By Country</h3>
          {/* Map or visualization component goes here */}
        </section>
      </div>
    </div>
  );
};

export default Home;
