import React from 'react';
import { FaCalendarAlt, FaRunning, FaMusic, FaFlask, FaPaintBrush } from 'react-icons/fa';
import './EventsActivities.css';

const EventsActivities = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Sports Day',
      date: '2023-11-25',
      time: '8:00 AM - 2:00 PM',
      location: 'School Ground',
      category: 'sports',
      description: 'A day filled with competitive sports and team activities for all classes.'
    },
    {
      id: 2,
      title: 'Science Fair',
      date: '2023-12-15',
      time: '10:00 AM - 3:00 PM',
      location: 'School Auditorium',
      category: 'science',
      description: 'Showcasing innovative science projects by our students.'
    },
    {
      id: 3,
      title: 'Music Festival',
      date: '2024-01-20',
      time: '4:00 PM - 7:00 PM',
      location: 'School Amphitheater',
      category: 'arts',
      description: 'Annual musical extravaganza featuring our talented students.'
    }
  ];

  const activities = [
    {
      id: 1,
      title: 'Yoga Club',
      schedule: 'Every Monday & Wednesday',
      time: '3:00 PM - 4:00 PM',
      category: 'sports',
      icon: <FaRunning />
    },
    {
      id: 2,
      title: 'School Band',
      schedule: 'Every Tuesday & Thursday',
      time: '3:30 PM - 5:00 PM',
      category: 'arts',
      icon: <FaMusic />
    },
    {
      id: 3,
      title: 'Science Club',
      schedule: 'Every Friday',
      time: '3:00 PM - 4:30 PM',
      category: 'science',
      icon: <FaFlask />
    },
    {
      id: 4,
      title: 'Art Society',
      schedule: 'Every Wednesday',
      time: '3:30 PM - 5:00 PM',
      category: 'arts',
      icon: <FaPaintBrush />
    }
  ];

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'sports': return <FaRunning />;
      case 'science': return <FaFlask />;
      case 'arts': return <FaPaintBrush />;
      default: return <FaCalendarAlt />;
    }
  };

  return (
    <div className="events-activities-container">
      <div className="header-section">
        <h2><FaCalendarAlt className="header-icon" /> Events & Activities</h2>
        <p>Discover what's happening at Mount Carmel Convent</p>
      </div>

      <div className="content-wrapper">
        {/* Upcoming Events Section */}
        <div className="events-section">
          <h3>Upcoming Events</h3>
          <div className="events-grid">
            {events.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-date">
                  <div className="event-day">
                    {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric' })}
                  </div>
                  <div className="event-month">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                  </div>
                </div>
                <div className="event-content">
                  <div className="event-category">
                    {getCategoryIcon(event.category)}
                    <span>{event.category.toUpperCase()}</span>
                  </div>
                  <h4>{event.title}</h4>
                  <div className="event-meta">
                    <span>{event.time}</span>
                    <span>{event.location}</span>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <button className="event-button">More Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Activities Section */}
        <div className="activities-section">
          <h3>Regular Activities</h3>
          <div className="activities-grid">
            {activities.map(activity => (
              <div key={activity.id} className="activity-card">
                <div className="activity-icon" style={{
                  backgroundColor: 
                    activity.category === 'sports' ? '#e3f2fd' :
                    activity.category === 'science' ? '#f3e5f5' :
                    '#e8f5e9'
                }}>
                  {activity.icon}
                </div>
                <div className="activity-content">
                  <h4>{activity.title}</h4>
                  <div className="activity-schedule">
                    <span>{activity.schedule}</span>
                    <span>{activity.time}</span>
                  </div>
                  <button className="activity-button">Join Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsActivities;