// ./components/HeroSlider.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { slides } from './slidesData'; // Import the slide data
import './HeroSlider.css';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

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
            src={slide.src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
          <div className="caption">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
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
