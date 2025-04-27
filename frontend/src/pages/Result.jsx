import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../Styling/Result.css";
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useAuth } from "../context/AuthContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = () => {
  const { state } = useLocation();
  const { authState, login, logout } = useAuth(); 

  // Calculate the total carbon footprint
  const totalFootprint = Object.values(state).reduce((a, b) => a + b, 0);
  const averageIndianFootprint = 2.7; // Average carbon footprint for an Indian in tons/year

  const [showComparison, setShowComparison] = useState(false);
  const [showTips, setShowTips] = useState(false);

  // Data for individual sections (Pie Chart)
  const sectionData = {
    labels: Object.keys(state),
    datasets: [
      {
        label: 'Carbon Footprint Breakdown (percentage)',
        data: Object.values(state).map((value) => ((value / totalFootprint) * 100).toFixed(2)),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Data for comparison with the average Indian footprint (Pie Chart)
  const comparisonData = {
    labels: ['Your Footprint', 'Average Indian Footprint'],
    datasets: [
      {
        label: 'Carbon Footprint Comparison',
        data: [totalFootprint.toFixed(2), averageIndianFootprint.toFixed(2)],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  // Tips data based on different sections
  const tipsData = [
    {
      section: 'About You',
      tips: [
        'Use energy-saving appliances to lower electricity use.',
        'Recycle plastic, paper, and glass to reduce waste.',
        'Save water by fixing leaks and using less water when washing.',
        'Turn off and unplug devices when not in use to save energy.',
        'Plan your trips to avoid extra travel and save fuel.',
      ],
    },
    {
      section: 'Food Section',
      tips: [
        'Buy local food to cut down on transport pollution.',
        'Eat less meat and dairy to help the environment.',
        'Plan meals carefully to avoid wasting food.',
        'Choose organic food when possible for healthier farming.',
        'Turn food scraps into compost instead of throwing them away.',
      ],
    },
    {
      section: 'Transportation Section',
      tips: [
        'Share rides or use public transport to save fuel.',
        'Walk or ride a bike for short trips to stay healthy and reduce pollution.',
        'Use electric or hybrid cars for cleaner travel.',
        'Take care of your car to use less fuel.',
        'Turn off your car when waiting to save gas.',
      ],
    },
    {
      section: 'Home Energy Section',
      tips: [
        'Use solar panels or wind energy if possible.',
        'Keep your home warm in winter and cool in summer with good insulation.',
        'Use smart thermostats to control heating and cooling efficiently.',
        'Switch to LED bulbs to use less electricity.',
        'Use energy-saving windows to keep indoor temperatures steady.',
      ],
    },
    {
      section: 'Shopping and Lifestyle Section',
      tips: [
        'Choose reusable items instead of single-use plastics.',
        'Buy second-hand items to reduce waste.',
        'Donate or recycle old things instead of throwing them away.',
        'Support brands that use eco-friendly materials.',
        'Use digital tickets and documents to save paper.',
      ],
    },
  ];
  

  return (
    <div className="result">
      <h1 className="greeting-title">
  🌱 Hello, {authState.user?.firstname || "Guest"} 👋! Welcome to your Carbon Footprint Results 🌍
</h1>


      


      <div className="result-container">
        <h1 className="result-title">Your Carbon Footprint Results</h1>
        <ul className="result-list">
          {Object.keys(state).map((section) => (
            <li key={section} className="result-item">
              <strong>{section}:</strong> {state[section].toFixed(2)} tons/year
            </li>
          ))}
        </ul>

        <div className="pie-chart-container">
          <Pie data={sectionData} options={graphOptions} />
        </div>

        {/* Display total carbon footprint with color based on comparison to average */}
        <h3 className={`result-total-footprint ${totalFootprint < averageIndianFootprint ? 'positive' : 'negative'}`}>
          Total Carbon Footprint: {totalFootprint.toFixed(2)} tons/year
        </h3>

        {totalFootprint < averageIndianFootprint ? (
          <h3 className="congratulations-message">
            🎉 Congratulations! Your carbon footprint is lower than the average Indian's. Keep up the good work! 🌿
          </h3>
        ) : (
          <div className="motivation-message">
            <h3>💪 Don't worry! You can always improve. Here are some tips to reduce your carbon footprint. 🌍</h3>
            <button
              onClick={() => setShowTips(!showTips)}
              className="toggle-button"
            >
              {showTips ? 'Hide Tips' : 'Show Tips to Reduce Footprint'}
            </button>
          </div>
        )}

        {showTips && (
          <div className="tips-container">
            <h1 className="tips-title">Sustainable Living Tips</h1>
            {tipsData.map((section, index) => (
              <div
                className={`tips-section ${section.section.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '')}`}
                key={index}
              >
                <h2 className="tips-section-title">{section.section}</h2>
                <ul className="tips-list">
                  {section.tips.map((tip, idx) => (
                    <li className="tips-item" key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Comparison Section */}
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="toggle-button"
        >
          {showComparison ? 'Hide Comparison' : 'Show Comparison with Average Indian Footprint'}
        </button>

        {showComparison && (
          <div className="pie-chart-container">
            <h3>Comparison with Average Indian Footprint</h3>
            <Pie data={comparisonData} options={graphOptions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
