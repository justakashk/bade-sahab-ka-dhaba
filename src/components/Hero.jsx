import React from 'react';
import './Hero.css'; // for custom styles

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Bade Sahab Ka Dhaba</h1>
        <h2>Your favorite food destination</h2>
        <p>"Where every meal is a celebration!"</p>
        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
};

export default Hero;
