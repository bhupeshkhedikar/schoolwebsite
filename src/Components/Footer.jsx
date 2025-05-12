import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Academics", link: "/academics" },
    { name: "Admissions", link: "/admissions" },
    { name: "Events", link: "/events" },
    { name: "Contact", link: "/contact" }
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: "+91 1234567890" },
    { icon: <FaEnvelope />, text: "info@mountcarmel.edu" },
    { icon: <FaMapMarkerAlt />, text: "123 School Road, City, State - 123456" }
  ];

  const socialMedia = [
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaYoutube />, link: "#" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* School Logo & Description */}
        <div className="footer-section">
          <div className="footer-logo">
            <MdSchool className="school-icon" />
            <h3>Mount Carmel Convent</h3>
          </div>
          <p className="footer-description">
            Providing quality education since 1950. We nurture young minds with values, discipline, and knowledge.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            {contactInfo.map((item, index) => (
              <li key={index}>
                <span className="contact-icon">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social">
            {socialMedia.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} राष्ट्रमाता इंदिरा गांधी विद्यालय तथा विज्ञान कनिष्ठ महाविद्यालय. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;