import React from 'react';
import Navbar from '../Components/Navbar'; // Adjust the path if necessary
import Footer from '../Components/Footer'; // Adjust the path if necessary
import '../Styling/AboutProject.css';

const AboutProject = () => {
  return (
    <div className="about-project">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section with Nature Background */}
      <section className="project-hero">
        <div className="hero-content">
          <h1>About EchoEvaluator</h1>
          <p className="animated-text">Empowering individuals to reduce their carbon footprint and protect our planet!</p>
        </div>
      </section>

      {/* Project Details Section */}
      <div className="main-section">
      <section className="project-details">
        <h2 className="fade-in diff">Our Vision</h2>
        <p className="fade-in">EchoEvaluator was born out of a simple yet powerful idea: to help individuals understand and reduce their carbon footprint. Our mission is to provide a user-friendly tool that not only calculates emissions but empowers users to take meaningful action toward sustainability. By raising awareness and tracking progress, we aim to create a ripple effect—small steps can lead to big changes in protecting our environment.</p>

        <h2 className="fade-in">Technologies Behind EchoEvaluator</h2>
        <p className="fade-in diff-p">EchoEvaluator is crafted with cutting-edge technologies to provide an intuitive and responsive user experience. Using the MERN stack (MongoDB, Express, React, Node.js), we’ve created a scalable, modern web application that puts powerful environmental tools right at your fingertips. The Carbon Footprint Calculator, the heart of the platform, offers users a detailed yet simple way to calculate and track their environmental impact based on everyday activities.</p>
        <ul className="fade-in">
          <li><strong>MERN Stack</strong>: The combination of MongoDB, Express, React, and Node.js for a solid, scalable architecture.</li>
          <li><strong>Responsive Design</strong>: Optimized for all devices to ensure a seamless experience, from desktop to mobile.</li>
          <li><strong>Carbon Footprint Calculator</strong>: A tool that allows users to calculate emissions from their daily actions, promoting informed decision-making.</li>
          <li><strong>JWT Authentication</strong>: Ensuring secure logins and maintaining privacy with JSON Web Tokens (JWT).</li>
        </ul>

        <h2 className="fade-in">Overcoming Challenges</h2>
        <p className="fade-in">The journey wasn’t always smooth. As a beginner developer, I faced numerous challenges, but each one became an opportunity to learn. One major obstacle was implementing a secure authentication system that still provided a smooth, user-friendly experience. Additionally, designing a carbon emissions calculator that was both accurate and easy to use was a complex task. But these challenges pushed me to grow as a developer, teaching me valuable lessons in full-stack development, security best practices, and the importance of clean code.</p>

        <h2 className="fade-in">What’s Next?</h2>
        <p className="fade-in">Looking ahead, EchoEvaluator will continue to evolve. Future features will include personalized carbon reduction tips based on user data, an interactive community forum for users to exchange ideas and experiences, and a more advanced carbon footprint tracking system. Our goal is to transform EchoEvaluator from a tool into a platform—one that brings people together to take action against climate change, one footprint at a time.</p>
      </section>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default AboutProject;

