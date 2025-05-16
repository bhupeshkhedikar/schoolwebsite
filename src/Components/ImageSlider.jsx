import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import './ImageSlider.css';

const ImageSlider = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch slides in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'slides'), (snapshot) => {
      const slidesList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSlides(slidesList);
    });
    return () => unsubscribe();
  }, []);

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
    if (slides.length === 0) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [slides, currentIndex]);

  if (slides.length === 0) {
    return <div className="slider-container">No slides available</div>;
  }

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
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