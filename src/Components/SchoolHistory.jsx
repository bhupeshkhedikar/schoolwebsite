import React from 'react';
import { FaSchool, FaHistory, FaAward, FaUserGraduate } from 'react-icons/fa';
import './SchoolHistory.css';

const SchoolHistory = () => {
  const historyMilestones = [
    {
      year: '1950',
      title: 'Foundation',
      description: 'Mount Carmel Convent was established by the Sisters of Charity with just 35 students and 2 teachers.',
      icon: <FaSchool />
    },
    {
      year: '1965',
      title: 'First Expansion',
      description: 'Added high school section and constructed new building to accommodate growing student population.',
      icon: <FaHistory />
    },
    {
      year: '1982',
      title: 'Junior College',
      description: 'Started junior college with Science and Commerce streams, becoming a complete educational institution.',
      icon: <FaUserGraduate />
    },
    {
      year: '2005',
      title: 'Excellence Award',
      description: 'Received State Award for Academic Excellence and Best School Infrastructure.',
      icon: <FaAward />
    },
    {
      year: 'Present',
      title: 'Modern Institution',
      description: 'Now educating over 1,200 students annually with smart classrooms and comprehensive facilities.',
      icon: <FaSchool />
    }
  ];

  return (
    <div className="history-container">
      <div className="history-header">
        <h2><FaHistory className="history-icon" /> A Brief History of Mount Carmel Convent</h2>
        <p>Our journey of excellence in education since 1950</p>
      </div>

      <div className="history-timeline">
        {historyMilestones.map((milestone, index) => (
          <div 
            key={index} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <div className="timeline-year">{milestone.year}</div>
              <div className="timeline-icon">{milestone.icon}</div>
              <div className="timeline-card">
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="history-footer">
        <p>Continuing our legacy of nurturing young minds with values and knowledge</p>
      </div>
    </div>
  );
};

export default SchoolHistory;