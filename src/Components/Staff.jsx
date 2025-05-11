import React from 'react';
import { FaChalkboardTeacher, FaUserTie, FaGraduationCap, FaQuoteLeft } from 'react-icons/fa';
import './Staff.css';

const Staff = () => {
  const teachingStaff = [
    {
      id: 1,
      name: "Mrs. Priya Sharma",
      role: "Senior Mathematics Teacher",
      qualification: "M.Sc, B.Ed",
      experience: "15+ Years",
      quote: "Mathematics is not about numbers, but understanding patterns."
    },
    {
      id: 2,
      name: "Mr. Rajesh Kumar",
      role: "Science HOD",
      qualification: "M.Sc (Physics), Ph.D",
      experience: "20+ Years",
      quote: "Science is the poetry of reality."
    },
    {
      id: 3,
      name: "Ms. Anjali Patel",
      role: "English Literature",
      qualification: "MA, B.Ed",
      experience: "10+ Years",
      quote: "Words have the power to change the world."
    }
  ];

  const adminStaff = [
    {
      id: 1,
      name: "Mr. Sanjay Verma",
      role: "Principal",
      qualification: "M.A, M.Ed, Ph.D",
      experience: "25+ Years",
      quote: "Education is the most powerful weapon."
    },
    {
      id: 2,
      name: "Mrs. Meena Desai",
      role: "Vice Principal",
      qualification: "M.Com, B.Ed",
      experience: "18+ Years",
      quote: "Discipline is the bridge between goals and accomplishment."
    }
  ];

  return (
    <div className="staff-container">
      <div className="staff-header">
        <h2><FaChalkboardTeacher className="icon" /> Our Dedicated Staff</h2>
        <p>Meet the talented educators and administrators shaping young minds at Mount Carmel Convent.</p>
      </div>

      <div className="staff-section">
        <h3><FaGraduationCap className="section-icon" /> Teaching Faculty</h3>
        <div className="staff-grid">
          {teachingStaff.map((teacher) => (
            <div key={teacher.id} className="staff-card">
              <div className="staff-image-placeholder"></div>
              <div className="staff-details">
                <h4>{teacher.name}</h4>
                <p className="staff-role">{teacher.role}</p>
                <div className="staff-qualification">
                  <span>{teacher.qualification}</span>
                  <span>{teacher.experience}</span>
                </div>
                <div className="staff-quote">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{teacher.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="staff-section">
        <h3><FaUserTie className="section-icon" /> Administrative Staff</h3>
        <div className="staff-grid">
          {adminStaff.map((admin) => (
            <div key={admin.id} className="staff-card">
              <div className="staff-image-placeholder"></div>
              <div className="staff-details">
                <h4>{admin.name}</h4>
                <p className="staff-role">{admin.role}</p>
                <div className="staff-qualification">
                  <span>{admin.qualification}</span>
                  <span>{admin.experience}</span>
                </div>
                <div className="staff-quote">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{admin.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;