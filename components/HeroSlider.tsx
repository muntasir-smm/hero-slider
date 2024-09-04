// ./components/HeroSlider.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import hero1 from '../resources/images/hero1.jpg';
import hero2 from '../resources/images/hero2.jpg';
import hero3 from '../resources/images/hero3.jpg';
import './HeroSlider.css';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${currentSlide === index ? 'active' : ''}`}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
          <div className="caption">
            <h2>Slide {index + 1} Title</h2>
            <p>Slide {index + 1} Description</p>
          </div>
        </div>
      ))}
      <button className="nav-button prev" onClick={goToPreviousSlide}>
        &lt;
      </button>
      <button className="nav-button next" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default HeroSlider;
