import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import './Navbar.css'; // We'll create this CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) => setActiveDropdown(activeDropdown === index ? null : index);

  const navItems = [
    { name: 'Home', link: '/' },
    {
      name: 'About Us',
      link: '#',
      submenu: [
        { name: 'History', link: '/history' },
        { name: 'Mission & Vision', link: '/mission-vision' },
        { name: 'Principal\'s Message', link: '/principal-message' },
      ],
    },
    {
      name: 'Academics',
      link: '#',
      submenu: [
        { name: 'High School', link: '/high-school' },
        { name: 'Junior College', link: '/junior-college' },
        { name: 'Curriculum', link: '/curriculum' },
      ],
    },
    { name: 'Admissions', link: '/admissions' },
    { name: 'Facilities', link: '/facilities' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <header className="navbar-header">
      {/* Top contact bar */}
      <div className="navbar-topbar">
        <div className="navbar-container">
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <span className="navbar-contact-item">Email: info@mountcarmel.edu</span>
            <span className="navbar-contact-item">Phone: +91 1234567890</span>
          </div>
        </div>
      </div>

      {/* School logo/name */}
      <div className="navbar-logo-section">
              <div className="navbar-container navbar-logo-container">
                  <img src='https://igsdm.co.in/wp-content/uploads/2021/03/IGSDM-LOGO.png' height={120} width={150}/>
          <h1>राष्ट्रमाता इंदिरा गांधी विद्यालय तथा विज्ञान कनिष्ठ महाविद्यालय</h1>
          <p>मुरमाडी/तुपकर, तालुका-लाखनी, जिल्हा-भंडारा</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;