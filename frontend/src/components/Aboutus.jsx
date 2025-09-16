import React from 'react';

const Aboutus = () => {
  return (
    <div className="about-us-container">
      <h1>Hello! Welcome to Our Story.</h1>
      <p>
        Every great journey starts with a simple idea. Ours was born from a passion for [mention your passion or the core idea of your business/project]. We're not just a company; we're a group of dreamers, doers, and creators who believe in [mention your core belief or mission].
      </p>
      <p>
        Our team is a small, but mighty family. We're a mix of [mention a few key roles or personality traits, e.g., "tech enthusiasts," "creative minds," "problem solvers"]. We're dedicated to bringing you [mention what you offer, e.g., "the best possible experience," "products that make a difference"].
      </p>
      <p>
        Thank you for being a part of our story. We're excited to see what we can achieve together!
      </p>
    </div>
  );
};

export default Aboutus;

// src/components/Aboutus.js



// Define the styles as a JavaScript object
const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    textAlign: 'center'
  },
  heading: {
    fontSize: '2.5em',
    color: '#0056b3'
  },
  paragraph: {
    fontSize: '1.1em',
    marginBottom: '20px'
  }
};

