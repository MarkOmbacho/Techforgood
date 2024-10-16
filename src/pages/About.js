// src/pages/About.js
import React, { useRef } from 'react';

const About = () => {
  // Create a ref using useRef
  const headingRef = useRef(null);

  // Function to scroll to the heading
  const scrollToHeading = () => {
    if (headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 ref={headingRef}>About Page</h1>
      <p>This application helps you match skills with job opportunities.</p>
      <button onClick={scrollToHeading}>Scroll to Heading</button>
    </div>
  );
};

export default About;