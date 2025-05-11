import { useState } from 'react';
import { FaBullhorn, FaCalendarAlt, FaFilePdf, FaArrowRight } from 'react-icons/fa';
import './NoticeBoard.css';

const NoticeBoard = () => {
  const [activeTab, setActiveTab] = useState('notices');

  const notices = [
    {
      id: 1,
      title: 'Annual Sports Day 2023',
      date: '2023-11-25',
      category: 'Sports',
      pdf: '/notices/sports-day.pdf',
      excerpt: 'All students are required to participate in the Annual Sports Day events.'
    },
    {
      id: 2,
      title: 'Winter Vacation Schedule',
      date: '2023-12-20',
      category: 'Academic',
      pdf: '/notices/winter-vacation.pdf',
      excerpt: 'School will remain closed from December 25th to January 5th.'
    },
    {
      id: 3,
      title: 'Parent-Teacher Meeting',
      date: '2023-11-30',
      category: 'Academic',
      pdf: '/notices/ptm.pdf',
      excerpt: 'Schedule for the upcoming parent-teacher meetings for all classes.'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Science Exhibition',
      date: '2023-12-15',
      time: '10:00 AM - 3:00 PM',
      location: 'School Auditorium'
    },
    {
      id: 2,
      title: 'Christmas Celebration',
      date: '2023-12-22',
      time: '9:00 AM - 12:00 PM',
      location: 'School Ground'
    }
  ];

  return (
    <div className="notice-board">
      <div className="notice-header">
        <h2>
          <FaBullhorn className="icon" /> Notice Board
        </h2>
        <div className="notice-tabs">
          <button
            className={`tab-btn ${activeTab === 'notices' ? 'active' : ''}`}
            onClick={() => setActiveTab('notices')}
          >
            Notices
          </button>
          <button
            className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
        </div>
      </div>

      <div className="notice-content">
        {activeTab === 'notices' ? (
          <div className="notices-list">
            {notices.map((notice) => (
              <div key={notice.id} className="notice-card">
                <div className="notice-badge">{notice.category}</div>
                <div className="notice-date">
                  {new Date(notice.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </div>
                <h3 className="notice-title">{notice.title}</h3>
                <p className="notice-excerpt">{notice.excerpt}</p>
                <div className="notice-actions">
                  <a href={notice.pdf} className="pdf-link">
                    <FaFilePdf /> Download PDF
                  </a>
                  <button className="read-more">
                    Read More <FaArrowRight className="arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="events-list">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-date">
                  <FaCalendarAlt className="calendar-icon" />
                  <div>
                    <span className="event-day">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        day: 'numeric'
                      })}
                    </span>
                    <span className="event-month">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short'
                      })}
                    </span>
                  </div>
                </div>
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-meta">
                    <span className="event-time">{event.time}</span>
                    <span className="event-location">{event.location}</span>
                  </div>
                  <button className="event-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="view-all">
        <button className="view-all-btn">
          View All {activeTab === 'notices' ? 'Notices' : 'Events'} <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard;