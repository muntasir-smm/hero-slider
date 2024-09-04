'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import hero1 from '../resources/images/hero1.jpg';
import hero2 from '../resources/images/hero2.jpg';
import hero3 from '../resources/images/hero3.jpg';
import hero4 from '../resources/images/hero4.jpg';
import './HeroSlider.css';

const HeroSlider: React.FC = () => {
  const slides = [
    { src: hero1, title: 'Butterfly', description: 'Butterfly on the flower' },
    { src: hero2, title: 'Tulip', description: 'Colorful Tulip' },
    { src: hero3, title: 'Rain', description: 'Rain drop on a leaf' },
    { src: hero4, title: 'Sunset', description: 'Sunset and white flower' },
  ];

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
