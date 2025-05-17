import { useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import './NoticeBoard1.css';

const NoticeBoard1 = () => {
  const [notices, setNotices] = useState([]);
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  // Fetch notices in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'notices'), (snapshot) => {
      const noticesList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNotices(noticesList);
    });
    return () => unsubscribe();
  }, []);

  // Auto-rotate notices
  useEffect(() => {
    if (notices.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentNoticeIndex((prevIndex) =>
        prevIndex === notices.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [notices]);

  if (notices.length === 0) {
    return (
      <div className="notice-board">
        <div className="notice-header">
          <h4 style={{textAlign:'center !important'}}>सूचना फलक</h4>
        </div>
        <p>No notices available</p>
      </div>
    );
  }

  const currentNotice = notices[currentNoticeIndex];

  return (
    <div className="notice-board">
      <div className="notice-header">
           <h4 style={{textAlign:'center !important'}}>सूचना फलक</h4>
      </div>

      <div className="notices-container" style={{marginTop:'-26px'}}>
        <div className="notice-item fade-slide">
          <h4 className="notice-item-titlee">{currentNotice.title}</h4>
          <p className="notice-description">{currentNotice.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard1;