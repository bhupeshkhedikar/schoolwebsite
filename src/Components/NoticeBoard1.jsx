import { useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import './NoticeBoard1.css';

const NoticeBoard1 = () => {
  const notices = [
    {
      id: 1,
      title: 'Annual Sports Day 2023',
      description:
        'All students are required to participate in the Annual Sports Day events on November 25th. Please report to the school ground by 8:00 AM.',
    },
    {
      id: 2,
      title: 'Winter Vacation Schedule',
      description:
        'School will remain closed for winter vacation from December 25th to January 5th. Classes will resume on January 6th.',
    },
    {
      id: 3,
      title: 'Parent-Teacher Meeting',
      description:
        'The next parent-teacher meeting is scheduled for November 30th from 2:00 PM to 5:00 PM. Please confirm your attendance.',
    },
  ];

  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNoticeIndex((prevIndex) =>
        prevIndex === notices.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentNotice = notices[currentNoticeIndex];

  return (
    <div className="notice-board">
      <div className="notice-header">
        <h4 className="notice-titlee">सूचना फलक</h4>
      </div>

      <div className="notices-container">
        <div className="notice-item fade-slide">
          <h4 className="notice-item-titlee">{currentNotice.title}</h4>
          <p className="notice-description">{currentNotice.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard1;
