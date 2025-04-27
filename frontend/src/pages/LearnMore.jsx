import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "../Styling/LearnMore.css";
import Accordion from '../Components/Accordion.jsx';
import Footer from "../Components/Footer.jsx";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import { useAuth } from "../context/AuthContext"; // Import useAuth for authentication state

const LearnMore = () => {
  const [showError, setShowError] = useState(false); // State to control error message visibility
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
      <div className="learn-more-container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Learn More About Sustainability</h1>
          <p>
            Understanding sustainability and its impact on climate change is more crucial than ever. In a world where our daily activities contribute significantly to carbon emissions, it is vital to comprehend the science behind our actions. On this page, you will find a wealth of knowledge, including articles, videos, and graphical insights to help you understand the urgency of taking action. From learning about CO2 emissions to exploring practical solutions, we hope this section sparks a deeper awareness of the environmental challenges we face.
          </p>
        </section>

        {/* Scientists Section */}
        <section className="scientists-section">
          <h2 className="section-title">Key Scientists in Climate Change Research</h2>
          <div className="scientists-container">
            <div className="scientist-card">
              <img src="/scientist1.jpg" />
              <h3>James Hansen</h3>
              <p>
                James Hansen, a former NASA scientist, is one of the most prominent voices in climate science. His research in the 1980s helped raise awareness about human-caused climate change. He is known for his work on global warming and advocacy for climate action.
              </p>
            </div>
            <div className="scientist-card">
              <img src="/scientist2.jpg" />
              <h3>Greta Thunberg</h3>
              <p>
                Greta Thunberg is a Swedish climate activist who has inspired millions to join the fight against climate change. Her "Fridays for Future" movement has led to worldwide protests demanding action on global warming.
              </p>
            </div>
            <div className="scientist-card">
              <img src="/scientist3.jpg" alt="Al Gore" />
              <h3>Al Gore</h3>
              <p>
                Former U.S. Vice President Al Gore has been a key advocate for climate action. His documentary "An Inconvenient Truth" educated millions about the dangers of global warming.
              </p>
            </div>
          </div>
        </section>

        {/* Article Section */}
        <section className="article-section">
          <h2 className="section-title">The Science of Carbon Emissions</h2>
          <div className="article-content">
            <p>
              Carbon emissions, primarily from burning fossil fuels, are a major driver of climate change. The science behind carbon footprints is complex, involving both direct and indirect emissions. Direct emissions come from sources such as vehicles, factories, and energy consumption, while indirect emissions are linked to the entire lifecycle of products and services.
            </p>
            <p>
              Reducing our carbon footprint is critical to stabilizing global temperatures and mitigating climate-related disasters. It involves personal choices, like switching to renewable energy, reducing waste, and supporting policies that promote sustainability.
            </p>
            <p>
              Over the years, research has shown a significant link between carbon emissions and rising global temperatures. As emissions increase, the Earth's temperature rises, causing melting ice caps, rising sea levels, and extreme weather patterns.
            </p>
          </div>
        </section>

        {/* CO2 Levels Graph Section */}
        <section className="graph-section">
          <h2 className="section-title">Impact of CO2 Levels Over Time</h2>
          <div className="graph">
            <div className="graph-container">
              <img src="/circle.jpg" />
            </div>
            <div className="text1">
              <p>
                This graph represents the rising levels of CO2 in the atmosphere from 2010 to 2022. As seen in the data, there has been a steady increase in CO2 concentration, which directly correlates with global warming and other environmental changes. It is crucial to monitor and reduce these levels to avoid further detrimental effects on our planet's climate.
              </p>
            </div>
          </div>
        </section>

        {/* Pie Chart of Major Carbon Sources */}
        <section className="carbon-sources-section">
          <h2 className="section-title">Major Sources of Carbon Emissions</h2>
          <div className="graph">
            <div className="graph-container">
              <img src="/chart.jpeg" />
            </div>
            <div className="text1">
              <p>
                The chart shows the major contributors to carbon emissions across various sectors. Energy production, transportation, and industry are the largest culprits, highlighting the importance of transitioning to renewable energy and more sustainable practices. Understanding these sources is the first step toward addressing the climate crisis and taking meaningful action.
              </p>
            </div>
          </div>
        </section>

        {/* Informational Section */}
        <section className="info-section">
          <h2 className="section-title">Why Carbon Footprints Matter</h2>
          <p>
            The carbon footprint is a measure of the environmental impact of human activities in terms of the amount of carbon dioxide and other greenhouse gases emitted. It includes both direct emissions (e.g., driving a car) and indirect emissions (e.g., manufacturing goods).
          </p>
          <p>
            Reducing your carbon footprint can contribute significantly to decreasing the global warming effect, improving air quality, and preserving natural resources. Simple steps like reducing energy consumption, using public transport, and minimizing waste can have a profound impact on your overall carbon footprint.
          </p>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2>Take Action Today</h2>
          <p>Start making sustainable choices today and reduce your carbon footprint. Every small step counts towards a healthier planet.</p>
          <button className="cta-button" onClick={handleButtonClick}> {/* Check login status before navigating */}
            Calculate Your Footprint
          </button>
        </section>

        {/* Error Message Box */}
        {showError && (
          <div className="modal-overlay">
            <div className="modal-box">
              <div className="modal-icon">⚠️</div>
              <p>You need to log in to access the Carbon Footprint Calculator.</p>
              <button className="modal-close-btn" onClick={closeErrorModal}>Close</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default LearnMore;
