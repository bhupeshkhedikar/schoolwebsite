import React from 'react';
import { FaStar, FaTrophy } from 'react-icons/fa';
import './OurShiningStars.css';

const OurShiningStars = () => {
  const notices = [
    {
      title: 'Annual Sports Day 2023',
      content: 'All students are required to participate in the Annual Sports Day events on November 25th. Please report to the school ground by 8:00 AM.',
      date: 'November 25, 2023'
    }
  ];

  const toppers = [
    { name: 'Rahul Sharma', class: 'XII A', position: 1 },
    { name: 'Priya Patel', class: 'XI B', position: 2 },
    { name: 'Amit Kumar', class: 'X C', position: 3 }
  ];

  return (
    <div className="notice-board">
 
      
      <div className="board-content">
        {/* Stars Section */}
        <div className="stars-section">
          <h3 className="section-title">
            <FaStar className="icon" /> Our Shining Stars <FaStar className="icon" />
          </h3>
          <div className="toppers-list">
            {toppers.map((topper, index) => (
              <div key={index} className="topper-card">
                <div className={`trophy-icon trophy-${topper.position}`}>
                  <FaTrophy />
                  <span className="position-badge">{topper.position}</span>
                    </div>
                    <div >
              <img src='https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png' height='100px' width='100%'/>
                </div>
                <div className="topper-info">
                  <h4>{topper.name}</h4>
                  <p>Class: {topper.class}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurShiningStars;