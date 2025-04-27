import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Accordion from "../Components/Accordion";
import "../Styling/About.css";
import Footer from "../Components/Footer";
import { useAuth } from "../context/AuthContext"; // Import useAuth for authentication state
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

const About = () => {
  const [showError, setShowError] = useState(false);
  const { authState } = useAuth(); // Get auth state to check user login status
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Check if the user is logged in based on the authState
  const userLoggedIn = Boolean(authState.token);

  const handleButtonClick = () => {
    if (!userLoggedIn) {
      setShowError(true); // Show error if the user is not logged in
    } else {
      setShowError(false);
      // Redirect to the Carbon Footprint Calculator page if the user is logged in
      navigate("/footprintcalc"); // Replace with your actual route
    }
  };

  const closeErrorModal = () => {
    setShowError(false); // Close the error message box
  };

  return (
    <>
      <Navbar />
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>Welcome to About Page</h1>
          <p>
            EchoEvaluator is designed to help individuals and organizations
            better understand and reduce their carbon footprint. Our platform
            provides practical tools for calculating carbon emissions and
            offers actionable tips to promote sustainability, ultimately
            fostering a greener, healthier planet for future generations.
          </p>
          <button className="cta-button" onClick={handleButtonClick}>
            Calculate Your Footprint
          </button>
        </section>

        {/* Error Message Box */}
        {showError && (
          <div className="modal-overlay">
            <div className="modal-box">
              <div className="modal-icon">⚠️</div>
              <p>You need to log in to access the Carbon Footprint Calculator.</p>
              <button className="modal-close-btn" onClick={closeErrorModal}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Environmental Challenges Section */}
        <section className="about-challenges">
          <h2>Recent Environmental Challenges</h2>
          <p>
            The Earth is facing critical environmental challenges due to human
            activity. Understanding these issues is key to reducing their
            impact. Some of the most pressing concerns include:
          </p>
          <ul className="conditions-list">
            <li>
              <strong>Global Temperature Rise:</strong> The average global
              temperature has increased by approximately 1.2°C since the late
              19th century, contributing to more extreme weather events.
            </li>
            <li>
              <strong>Melting Polar Ice Caps:</strong> Arctic sea ice is
              shrinking rapidly, with about 13% less ice cover per decade since
              1979.
            </li>
            <li>
              <strong>Deforestation:</strong> Over 18 million acres of
              forests are lost each year, threatening biodiversity and
              increasing carbon dioxide levels in the atmosphere.
            </li>
            <li>
              <strong>Air Pollution:</strong> Air quality in many cities around
              the world continues to deteriorate, leading to respiratory issues
              and environmental degradation.
            </li>
          </ul>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            At EchoEvaluator, our mission is to empower individuals and
            organizations to reduce their carbon footprints by offering clear
            tools and education. By measuring your personal or organizational
            emissions, we provide you with strategies to minimize your impact
            on the planet.
          </p>
          <p>
            We're committed to making sustainable practices easier and more
            accessible. By focusing on realistic, actionable steps, we aim to
            create a world where everyone contributes to a low-carbon future.
          </p>
          <p>
            We work with environmental experts to offer up-to-date data and
            guidance on various topics such as renewable energy, eco-friendly
            transportation, and waste reduction. Together, we can help address
            climate change, preserve natural resources, and safeguard ecosystems
            for future generations.
          </p>
        </section>

        {/* Tools Section */}
        <section className="about-tools">
          <h2>Our Tools and Resources</h2>
          <p>
            We offer practical tools to help users measure, track, and reduce
            their carbon footprint. Our primary tools include:
          </p>
          <div className="tools-container">
            <div className="tool-card">
              <h3>Carbon Footprint Calculator</h3>
              <p>
                Our user-friendly tool allows you to estimate your carbon
                emissions based on your daily activities, such as travel, energy
                use, and waste. This calculation provides a starting point for
                making meaningful reductions.
              </p>
            </div>
            <div className="tool-card">
              <h3>Actionable Tips</h3>
              <p>
                After calculating your footprint, we provide personalized
                recommendations, such as using energy-efficient appliances,
                adopting public transportation, and reducing food waste.
              </p>
            </div>
            <div className="tool-card">
              <h3>Community Challenges</h3>
              <p>
                Join the global community by participating in challenges aimed
                at reducing carbon footprints. Track your progress and compete
                with others for a greener future.
              </p>
            </div>
          </div>
        </section>

        {/* Real-Time Data Section */}
        <section className="about-data">
          <h2>Real-Time Environmental Data</h2>
          <p>
            Access up-to-date global data about environmental conditions and
            carbon emissions. This data is crucial for understanding the
            urgency of action in various sectors:
          </p>
          <ul className="data-list">
            <li>Current global CO<sub>2</sub> levels: 415 ppm</li>
            <li>Average temperature increase: +1.2°C since 1880</li>
            <li>Deforestation rate: 18 million acres lost annually</li>
            <li>Global renewable energy adoption rate: 26% of total energy use</li>
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="about-cta">
          <h2>Start Your Sustainability Journey</h2>
          <p>
            Taking action starts with understanding your carbon footprint. We
            provide all the tools you need to get started on your sustainability
            journey. Calculate your footprint today and explore practical
            steps to reduce your impact on the environment.
          </p>
          <button className="cta-button" onClick={handleButtonClick}>
            Get Started Now
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
