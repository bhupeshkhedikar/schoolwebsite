import React from 'react';
import { FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';
import './StaffComponent.css';

const StaffComponent = () => {
  // Leadership Team
  const leadership = [
    {
      id: 1,
      name: "सौ.शारदाताई एल. कोरे",
      role: "अध्यक्ष शारदा महिला मंडळ मुरमाडी/तूप",
      photo: "https://i.ibb.co/60RdtKr4/Whats-App-Image-2025-05-12-at-19-03-01-6e0099be.jpg"
    },
    {
      id: 2,
      name: "श्री हरिदास किसन भुरे",
      role: "मुख्याध्यापक",
      photo: "https://i.ibb.co/n8MdBbSV/Whats-App-Image-2025-05-12-at-22-49-18-a28ac0d4.jpg"
    }
  ];

  // Teaching Staff
  const teachingStaff = [
    {
      id: 1,
      name: "श्री. सुरेंद्र एस. गिऱ्हेपुजे",
      role: "कनिष्ठ लिपीक",
      photo: "https://i.ibb.co/VWD7c7bg/Whats-App-Image-2025-05-12-at-22-49-19-e8602b21.jpg"
    },
    {
      id: 2,
      name: "Mr. Rajesh Kumar",
      role: "Physics",
      photo: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Ms. Anjali Patel",
      role: "English",
      photo: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      id: 4,
      name: "Mr. Amit Singh",
      role: "Chemistry",
      photo: "https://randomuser.me/api/portraits/men/70.jpg"
    }
  ];

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
          {leadership.map((leader) => (
            <div key={leader.id} className="leader-card">
              <div className="leader-photo-circle">
                <img src={leader.photo} alt={leader.name} />
              </div>
              <div className="leader-details">
                <h4>{leader.name}</h4>
                <p className="leader-role">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teaching Staff Section */}
      <div className="teaching-staff-section">
        <h3><FaChalkboardTeacher className="section-icon" /> कर्मचारी वृंद </h3>
        <div className="teaching-staff-grid">
          {teachingStaff.map((teacher) => (
            <div key={teacher.id} className="teacher-card">
              <div className="teacher-photo-circle">
                <img src={teacher.photo} alt={teacher.name} />
              </div>
              <div className="teacher-details">
                <h5>{teacher.name}</h5>
                <p>{teacher.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffComponent;