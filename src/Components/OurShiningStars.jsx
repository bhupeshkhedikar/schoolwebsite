import { useState, useEffect } from 'react';
import { FaStar, FaTrophy } from 'react-icons/fa';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import './OurShiningStars.css';

const OurShiningStars = () => {
  const [toppers, setToppers] = useState([]);

  // Fetch toppers in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'toppers'), (snapshot) => {
      const toppersList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Sort by position and take top 3
      setToppers(toppersList.sort((a, b) => a.position - b.position));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="shining-stars-container">
      <div className="stars-header">
        <h2>
          <FaStar className="star-icon" /> Our Shining Stars <FaStar className="star-icon" />
        </h2>
        <p>Celebrating academic excellence and outstanding achievements</p>
      </div>

      {toppers.length > 0 ? (
        <div className="toppers-grid">
          {toppers.map((topper) => (
            <div key={topper.id} className="topper-card">
              <div className="topper-image">
                <img 
                  src={topper.image || 'https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png'} 
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
      ) : (
        <p className="no-toppers">No toppers to display</p>
      )}
    </div>
  );
};

export default OurShiningStars;