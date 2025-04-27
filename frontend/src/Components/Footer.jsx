import '../Styling/Footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Added Instagram
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';  // Import Link for SPA navigation

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>EchoEvaluator</h3>
          <p>Empowering individuals to understand and reduce their carbon footprint for a sustainable future.</p>
        </div>

         {/* Links Section */}
         <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/faq" className="footer-link">FAQ</Link>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/learnmore" className="footer-link">Learn More</Link>
          <Link to="/aboutproject" className="footer-link">About Project</Link>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />Mumbai,Nagpada(Prabhunivas building)</p>
          <p><FontAwesomeIcon icon={faPhone} className="icon" />9326183927</p>
          <p><FontAwesomeIcon icon={faEnvelope} className="icon" /> shaikhmohdanas406@gmail.com</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://www.instagram.com/_anas._sk" className="social-link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a> {/* Instagram Icon */}
          <a href="https://www.facebook.com/shaikh.anas.829404" className="social-link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.linkedin.com/in/anas-shaikh-2b6503347" className="social-link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p><strong>@</strong> 2025 EchoEvaluator. All Rights Reserved.</p>
        <p>Created by Shaikh Anas</p>
      </div>
    </footer>
  );
}

export default Footer;
