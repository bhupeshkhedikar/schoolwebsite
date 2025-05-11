import { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const slides = [
    {
      image: "https://i.ibb.co/RG9KdwX2/Whats-App-Image-2025-05-11-at-17-18-48-9fc66263.jpg",
      title: 'Our Campus',
      description: 'State-of-the-art facilities for holistic learning'
    },
    {
      image: 'https://i.ibb.co/qM7Ds05g/Whats-App-Image-2025-05-11-at-17-18-46-95739738.jpg',
      title: 'Interactive Learning',
      description: 'Modern classrooms with smart teaching aids'
    },
    {
      image: 'https://i.ibb.co/nq4LgTH7/Whats-App-Image-2025-05-11-at-17-18-45-3a7901f9.jpg',
      title: 'Sports Facilities',
      description: 'Excellent infrastructure for physical development'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="image-container">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="slide-image"
              />
            </div>
            <div className="slide-info">
              <h3 className="slide-title">{slide.title}</h3>
              <p className="slide-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="slider-button next" onClick={nextSlide}>
        &gt;
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;