import { useEffect, useState } from 'react';
import { FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import './StaffComponent.css';

const StaffComponent = () => {
  const [leadership, setLeadership] = useState([]);
  const [teachingStaff, setTeachingStaff] = useState([]);
  const [otherMembers, setOtherMembers]=useState([])

  // Fetch staff data in real-time
  useEffect(() => {
    const unsubscribeLeadership = onSnapshot(collection(db, 'leadership'), (snapshot) => {
      setLeadership(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    
    const unsubscribeTeaching = onSnapshot(collection(db, 'teachingStaff'), (snapshot) => {
      setTeachingStaff(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

      const unsubscribeOtherStaff = onSnapshot(collection(db, 'otherStaff'), (snapshot) => {
    setOtherMembers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      unsubscribeLeadership();
      unsubscribeTeaching();
       unsubscribeOtherStaff()
    };
  }, []);

  return (
    <div className="staff-container">
      <div className="staff-header">
        <h2><FaChalkboardTeacher className="icon" /> Our Dedicated Staff</h2>
        <p>Meet the educators and administrators guiding our students</p>
      </div>

      {/* Leadership Section */}
      <div className="leadership-section">
        <h3><FaUserTie className="section-icon" /> शाळा नेतृत्व</h3>
        <div className="leadership-grid">
          {leadership.length > 0 ? (
            leadership.map((leader) => (
              <div key={leader.id} className="leader-card">
                <div className="leader-photo-circle">
                  <img 
                    src={leader.photo || 'https://cdn-icons-png.flaticon.com/512/266/266033.png'} 
                    alt={leader.name} 
                  />
                </div>
                <div className="leader-details">
                  <h4>{leader.name}</h4>
                  <p className="leader-role">{leader.role}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No leadership information available</p>
          )}
        </div>
      </div>

      {/* Teaching Staff Section */}
      <div className="teaching-staff-section">
        <h3><FaChalkboardTeacher className="section-icon" /> कर्मचारी वृंद</h3>
        <div className="teaching-staff-grid">
          {teachingStaff.length > 0 ? (
            teachingStaff.map((teacher) => (
              <div key={teacher.id} className="teacher-card">
                <div className="teacher-photo-circle">
                  <img 
                    src={teacher.photo || 'https://cdn-icons-png.flaticon.com/512/266/266033.png'} 
                    alt={teacher.name} 
                  />
                </div>
                <div className="teacher-details">
                  <h5>{teacher.name}</h5>
                  <p>{teacher.role}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No teaching staff information available</p>
          )}
        </div>
      </div>

        {/* Teaching Staff Section */}
      <div className="teaching-staff-section" style={{marginTop:'35px'}}>
        <h3><FaChalkboardTeacher className="section-icon" />शैक्षणिक विविध समिती </h3>
        <div className="teaching-staff-grid">
          {otherMembers.length > 0 ? (
            otherMembers.map((teacher) => (
              <div key={teacher.id} className="teacher-card">
                <div className="teacher-photo-circlee">
                  <img 
                    src={teacher.photo || 'https://cdn-icons-png.flaticon.com/512/266/266033.png'} 
                    alt={teacher.name} 
                  />
                </div>
                <div className="teacher-details">
                  <h5>{teacher.name}</h5>
                  <p>{teacher.role}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No शैक्षणिक विविध समिती information available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffComponent;