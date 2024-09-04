// ./app/page.tsx

import React from 'react';
import HeroSlider from '../components/HeroSlider';
import './HomePage.css'; // Import the CSS file

const HomePage: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="page-heading">Welcome to Hero Slider Project</h1>
      <div className="hero-slider">
        <HeroSlider />
      </div>
    </div>
  );
};

export default HomePage;
