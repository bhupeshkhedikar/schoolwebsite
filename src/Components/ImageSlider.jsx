import { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const slides = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCFZzASji8pKQ5YGzVUCe0cojjDwuRAV4JQ&s',
      title: 'Our Campus',
      description: 'State-of-the-art facilities for holistic learning'
    },
    {
      image: 'https://www.successacademies.org/wp-content/uploads/2024/01/Blog-Header-01.jpg',
      title: 'Interactive Learning',
      description: 'Modern classrooms with smart teaching aids'
    },
    {
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/three-indian-schools-win-2024-worlds-best-school-prizes-260526243-16x9_0.jpg?VersionId=.sY9X0v3Id534bN40LBl_sqX623_609m',
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