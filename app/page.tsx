// ./app/page.tsx

import React from 'react';
import HeroSlider from '../components/HeroSlider';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Hero Slider Project</h1>
      <HeroSlider />
    </div>
  );
};

export default HomePage;
