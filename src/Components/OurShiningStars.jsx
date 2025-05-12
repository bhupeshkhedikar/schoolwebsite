import React from 'react';
import { FaStar, FaTrophy } from 'react-icons/fa';
import './OurShiningStars.css';

const OurShiningStars = () => {
  const toppers = [
    { 
      name: 'Rahul Sharma', 
      class: 'XII A', 
      position: 1,
      achievement: 'School Topper (98.6%)'
    },
    { 
      name: 'Priya Patel', 
      class: 'XI B', 
      position: 2,
      achievement: 'Science Olympiad Gold Medalist'
    },
    { 
      name: 'Amit Kumar', 
      class: 'X C', 
      position: 3,
      achievement: 'National Math Champion'
    }
  ];

  return (
    <div className="shining-stars-container">
      <div className="stars-header">
        <h2>
          <FaStar className="star-icon" /> Our Shining Stars <FaStar className="star-icon" />
        </h2>
        <p>Celebrating academic excellence and outstanding achievements</p>
      </div>

      <div className="toppers-grid">
        {toppers.map((topper, index) => (
          <div key={index} className="topper-card">
            <div className="topper-image">
              <img 
                src='https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png' 
                alt={topper.name}
              />
              <div className={`trophy-badge trophy-${topper.position}`}>
                <FaTrophy />
                <span className="position-number">{topper.position}</span>
              </div>
            </div>
            <div className="topper-details">
              <h3>{topper.name}</h3>
              <p className="topper-class">Class: {topper.class}</p>
              <p className="topper-achievement">{topper.achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurShiningStars;