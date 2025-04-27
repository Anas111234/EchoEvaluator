
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/FootprintCalc.css';
import { useEffect } from 'react';

const FootprintCalc = () => {
  const questions = [
    {
      section: 'About You',
      question: 'What is your age group?',
      options: ['Under 18', '19-30', '31-45', '45 and above'],
      key: 'ageGroup',
    },
    {
      section: 'About You',
      question: 'Where do you currently live?',
      options: ['Urban Area', 'Suburban Area', 'Rural Area', 'Internationally'],
      key: 'location',
    },
    {
      section: 'About You',
      question: 'How many people live in your household, including you?',
      options: ['Just Me', '2–3 people', '4–5 people', 'More than 5 people'],
      key: 'householdSize',
    },
    {
      section: 'About You',
      question: 'What type of housing do you live in?',
      options: ['Apartment', 'Detached House', 'Semi-Detached', 'Shared Housing'],
      key: 'homeType',
    },
    {
      section: 'About You',
      question: 'Do you own or rent your home?',
      options: ['I Own', 'I Rent', 'I Live with Family', 'Other'],
      key: 'ownHome',
    },
    {
      section: 'About You',
      question: 'How many rooms are in your home?',
      options: ['1–2 rooms', '3–5 rooms', '6 or more rooms', 'Open plan'],
      key: 'rooms',
    },
    {
      section: 'About You',
      question: 'Do you have access to recycling facilities?',
      options: ['Yes, at home', 'Yes, but not at home', 'No', 'Not available in my area'],
      key: 'recycling',
    },
  
    // Food Section
    {
      section: 'Food Section',
      question: 'How frequently do you consume meat?',
      options: ['Daily', 'Several times a week', 'Occasionally', 'Never'],
      key: 'meat',
    },
    {
      section: 'Food Section',
      question: 'How often do you consume dairy products?',
      options: ['Every day', 'A few times a week', 'Once in a while', 'Never'],
      key: 'dairy',
    },
    {
      section: 'Food Section',
      question: 'Do you regularly eat packaged or processed food?',
      options: ['Every day', 'Several times a week', 'Rarely', 'Never'],
      key: 'processedFood',
    },
    {
      section: 'Food Section',
      question: 'How often do you buy food that is locally sourced?',
      options: ['Always', 'Sometimes', 'Rarely', 'Never'],
      key: 'localFood',
    },
    {
      section: 'Food Section',
      question: 'How much food do you waste each week?',
      options: ['None', 'Small amounts', 'Moderate amounts', 'A lot'],
      key: 'foodWaste',
    },
    {
      section: 'Food Section',
      question: 'Do you grow any of your own food?',
      options: ['Yes, regularly', 'Occasionally', 'No, but I want to', 'No'],
      key: 'growFood',
    },
    {
      section: 'Food Section',
      question: 'How often do you eat out or order takeout?',
      options: ['Almost daily', 'A few times a week', 'Occasionally', 'Never'],
      key: 'eatOut',
    },
  
    // Transportation Section
    {
      section: 'Transportation Section',
      question: 'Do you use a personal vehicle for daily transportation?',
      options: ['Yes, I drive daily', 'Yes, occasionally', 'No, I use public transport', 'No, I walk or cycle'],
      key: 'personalVehicle',
    },
    {
      section: 'Transportation Section',
      question: 'What fuel type does your vehicle use?',
      options: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'I do not own a vehicle'],
      key: 'vehicleFuel',
    },
    {
      section: 'Transportation Section',
      question: 'On average, how far do you travel each day?',
      options: ['Less than 10 km', '10–30 km', '31–50 km', 'More than 50 km'],
      key: 'dailyTravel',
    },
    {
      section: 'Transportation Section',
      question: 'How frequently do you use public transport?',
      options: ['Every day', 'A few times a week', 'Rarely', 'Never'],
      key: 'publicTransport',
    },
    {
      section: 'Transportation Section',
      question: 'How often do you fly by airplane?',
      options: ['Monthly', 'Few times a year', 'Rarely', 'Never'],
      key: 'airTravel',
    },
    {
      section: 'Transportation Section',
      question: 'Do you prefer walking or cycling for short trips?',
      options: ['Always', 'Sometimes', 'Rarely', 'Never'],
      key: 'walkingCycling',
    },
    {
      section: 'Transportation Section',
      question: 'Do you use carpooling or ride-sharing services?',
      options: ['Always', 'Occasionally', 'Rarely', 'Never'],
      key: 'carpooling',
    },
  
    // Home Energy Section
    {
      section: 'Home Energy Section',
      question: 'What is the main source of energy used in your home?',
      options: ['Electricity', 'Gas', 'Solar energy', 'Combination of sources'],
      key: 'homeEnergy',
    },
    {
      section: 'Home Energy Section',
      question: 'Do you use renewable energy sources in your home?',
      options: ['Yes, fully renewable', 'Yes, partly renewable', 'No, but planning to', 'No'],
      key: 'renewableEnergy',
    },
    {
      section: 'Home Energy Section',
      question: 'How often do you use heating or air conditioning?',
      options: ['Every day', 'Several times a week', 'Occasionally', 'Rarely'],
      key: 'heatingCooling',
    },
    {
      section: 'Home Energy Section',
      question: 'Do you use energy-efficient appliances?',
      options: ['Yes, all appliances are energy-efficient', 'Some of them', 'None of them', 'Not sure'],
      key: 'energyEfficientAppliances',
    },
    {
      section: 'Home Energy Section',
      question: 'Do you turn off lights and devices when not in use?',
      options: ['Always', 'Sometimes', 'Rarely', 'Never'],
      key: 'turnOffDevices',
    },
    {
      section: 'Home Energy Section',
      question: 'Do you use water-saving fixtures in your home?',
      options: ['Yes, all fixtures', 'Some fixtures', 'No', 'Not applicable'],
      key: 'waterSavingFixtures',
    },
    {
      section: 'Home Energy Section',
      question: 'Do you insulate your home for energy conservation?',
      options: ['Yes, well-insulated', 'Some insulation', 'No', 'Not applicable'],
      key: 'homeInsulation',
    },
    {
      section: 'Home Energy Section',
      question: 'How many hours a day is your home occupied?',
      options: ['Less than 8 hours', '8–12 hours', 'More than 12 hours', 'Always occupied'],
      key: 'homeOccupied',
    },
  
    // Shopping and Lifestyle Section
    {
      section: 'Shopping and Lifestyle Section',
      question: 'How often do you purchase new clothes?',
      options: ['Once a month', 'A few times a year', 'Occasionally', 'Rarely'],
      key: 'buyNewClothes',
    },
    {
      section: 'Shopping and Lifestyle Section',
      question: 'Do you buy second-hand or thrifted items?',
      options: ['Often', 'Sometimes', 'Rarely', 'Never'],
      key: 'secondHandItems',
    },
    {
      section: 'Shopping and Lifestyle Section',
      question: 'How important are eco-friendly products to you?',
      options: ['Very important', 'Somewhat important', 'Not important', 'Not at all important'],
      key: 'ecoFriendlyProducts',
    },
    {
      section: 'Shopping and Lifestyle Section',
      question: 'How often do you recycle or compost waste?',
      options: ['Always', 'Sometimes', 'Rarely', 'Never'],
      key: 'recycleCompost',
    },
    {
      section: 'Shopping and Lifestyle Section',
      question: 'How often do you use reusable items (e.g., water bottles, shopping bags)?',
      options: ['Always', 'Occasionally', 'Rarely', 'Never'],
      key: 'reusableItems',
    },
    {
      section: 'Shopping and Lifestyle Section',
      question: 'How frequently do you avoid single-use plastics?',
      options: ['Always', 'Most of the time', 'Sometimes', 'Never'],
      key: 'avoidSingleUsePlastic',
    },
    {
      section: 'Shopping and Lifestyle Section',
      question: 'How often do you replace your electronic devices (phones, laptops, etc.)?',
      options: ['Annually', 'Every 2-3 years', 'When they break', 'I keep devices as long as possible'],
      key: 'replaceElectronics',
    },
    {
      section: 'Shopping and Lifestyle Section',
      question: 'Do you donate or recycle old items?',
      options: ['Regularly', 'Occasionally', 'Rarely', 'Never'],
      key: 'donateRecycle',
    },
  ];
  

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [sectionFootprints, setSectionFootprints] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (value) => {
    setResponses((prev) => ({
      ...prev,
      [questions[currentQuestionIndex].key]: value,
    }));
    setErrorMessage(''); // Clear error message when an option is selected
  };

  const calculateSectionFootprint = () => {
    const question = questions[currentQuestionIndex];
    let footprint = 0;

    switch (question.key) {
      case 'ageGroup':
        footprint =
          responses.ageGroup === 'Under 18'
            ? 0.02
            : responses.ageGroup === '18–30'
            ? 0.05
            : responses.ageGroup === '31-45'
            ? 0.07
            : 0.04;
        break;
    
      case 'location':
        footprint =
          responses.location === 'Urban Area'
            ? 0.15
            : responses.location === 'Suburban Area'
            ? 0.1
            : responses.location === 'Rural Area'
            ? 0.05
            : 0.2;
        break;
    
      case 'householdSize':
        footprint =
          responses.householdSize === 'Just Me'
            ? 0.05
            : responses.householdSize === '2–3 people'
            ? 0.03
            : responses.householdSize === '4–5 people'
            ? 0.07
            : 0.02;
        break;
    
      case 'homeType':
        footprint =
          responses.homeType === 'Apartment'
            ? 0.05
            : responses.homeType === 'Detached House'
            ? 0.08
            : responses.homeType === 'Semi-Detached'
            ? 0.06
            : 0.04;
        break;
    
      case 'ownHome':
        footprint = responses.ownHome === 'I Own' ? 0.1 : responses.ownHome === 'I Rent' ? 0.15 : 0.2;
        break;
    
      case 'rooms':
        footprint =
          responses.rooms === '1–2 rooms'
            ? 0.03
            : responses.rooms === '3–5 rooms'
            ? 0.05
            : responses.rooms === '6 or more rooms'
            ? 0.07
            : 0.04;
        break;
    
      case 'recycling':
        footprint =
          responses.recycling === 'Yes, at home'
            ? 0.05
            : responses.recycling === 'Yes, but not at home'
            ? 0.07
            : responses.recycling === 'No'
            ? 0.1
            : 0.12;
        break;
    
      case 'meat':
        footprint =
          responses.meat === 'Daily'
            ? 0.1
            : responses.meat === 'Several times a week'
            ? 0.07
            : responses.meat === 'Occasionally'
            ? 0.05
            : 0;
        break;
    
      case 'dairy':
        footprint =
          responses.dairy === 'Every day'
            ? 0.05
            : responses.dairy === 'A few times a week'
            ? 0.03
            : responses.dairy === 'Once in a while'
            ? 0.02
            : 0;
        break;
    
      case 'processedFood':
        footprint =
          responses.processedFood === 'Every day'
            ? 0.12
            : responses.processedFood === 'Several times a week'
            ? 0.08
            : responses.processedFood === 'Rarely'
            ? 0.05
            : 0;
        break;
    
      case 'localFood':
        footprint =
          responses.localFood === 'Always'
            ? 0.03
            : responses.localFood === 'Sometimes'
            ? 0.05
            : responses.localFood === 'Rarely'
            ? 0.08
            : 0.1;
        break;
    
      case 'foodWaste':
        footprint =
          responses.foodWaste === 'None'
            ? 0
            : responses.foodWaste === 'Small amounts'
            ? 0.05
            : responses.foodWaste === 'Moderate amounts'
            ? 0.08
            : 0.1;
        break;
    
      case 'growFood':
        footprint = responses.growFood === 'Yes, regularly' ? 0.03 : responses.growFood === 'Occasionally' ? 0.05 : 0.08;
        break;
    
      case 'eatOut':
        footprint =
          responses.eatOut === 'Almost daily'
            ? 0.12
            : responses.eatOut === 'A few times a week'
            ? 0.08
            : responses.eatOut === 'Occasionally'
            ? 0.05
            : 0.03;
        break;
    
      case 'personalVehicle':
        footprint = responses.personalVehicle === 'Yes, I drive daily' ? 0.3 : responses.personalVehicle === 'Yes, occasionally' ? 0.2 : responses.personalVehicle === 'No, I use public transport' ? 0.05 : 0;
        break;
    
      case 'vehicleFuel':
        footprint =
          responses.vehicleFuel === 'Petrol'
            ? 0.3
            : responses.vehicleFuel === 'Diesel'
            ? 0.35
            : responses.vehicleFuel === 'Electric'
            ? 0.2
            : responses.vehicleFuel === 'Hybrid'
            ? 0.25
            : 0.15;
        break;
    
      case 'dailyTravel':
        footprint =
          responses.dailyTravel === 'Less than 10 km'
            ? 0.05
            : responses.dailyTravel === '10–30 km'
            ? 0.2
            : responses.dailyTravel === '31–50 km'
            ? 0.3
            : 0.4;
        break;
    
      case 'publicTransport':
        footprint =
          responses.publicTransport === 'Every day'
            ? 0.02
            : responses.publicTransport === 'A few times a week'
            ? 0.05
            : responses.publicTransport === 'Rarely'
            ? 0.1
            : 0.15;
        break;
    
      case 'airTravel':
        footprint =
          responses.airTravel === 'Monthly'
            ? 0.5
            : responses.airTravel === 'Few times a year'
            ? 0.3
            : responses.airTravel === 'Rarely'
            ? 0.1
            : 0;
        break;
    
      case 'walkingCycling':
        footprint =
          responses.walkingCycling === 'Always'
            ? 0.05
            : responses.walkingCycling === 'Sometimes'
            ? 0.03
            : 0;
        break;
    
      case 'carpooling':
        footprint =
          responses.carpooling === 'Always'
            ? 0.03
            : responses.carpooling === 'Occasionally'
            ? 0.05
            : 0.1;
        break;
    
      case 'homeEnergy':
        footprint =
          responses.homeEnergy === 'Electricity'
            ? 0.15
            : responses.homeEnergy === 'Gas'
            ? 0.12
            : responses.homeEnergy === 'Solar energy'
            ? 0.08
            : 0.2;
        break;
    
      case 'renewableEnergy':
        footprint = responses.renewableEnergy === 'Yes, fully renewable' ? 0.03 : responses.renewableEnergy === 'Yes, partly renewable' ? 0.05 : 0.1;
        break;
    
      case 'heatingCooling':
        footprint =
          responses.heatingCooling === 'Every day'
            ? 0.2
            : responses.heatingCooling === 'Several times a week'
            ? 0.1
            : responses.heatingCooling === 'Occasionally'
            ? 0.05
            : 0;
        break;
    
      case 'energyEfficientAppliances':
        footprint =
          responses.energyEfficientAppliances === 'Yes, all appliances are energy-efficient'
            ? 0.05
            : responses.energyEfficientAppliances === 'Some of them'
            ? 0.08
            : 0.1;
        break;
    
      case 'turnOffDevices':
        footprint =
          responses.turnOffDevices === 'Always'
            ? 0.02
            : responses.turnOffDevices === 'Sometimes'
            ? 0.05
            : 0.08;
        break;
    
      case 'waterSavingFixtures':
        footprint = responses.waterSavingFixtures === 'Yes, all fixtures' ? 0.02 : 0.05;
        break;
    
      case 'homeInsulation':
        footprint = responses.homeInsulation === 'Yes, well-insulated' ? 0.02 : 0.05;
        break;
    
      case 'homeOccupied':
        footprint =
          responses.homeOccupied === 'Less than 8 hours'
            ? 0.02
            : responses.homeOccupied === '8–12 hours'
            ? 0.05
            : responses.homeOccupied === 'More than 12 hours'
            ? 0.1
            : 0;
        break;
    
      case 'buyNewClothes':
        footprint =
          responses.buyNewClothes === 'Once a month'
            ? 0.1
            : responses.buyNewClothes === 'A few times a year'
            ? 0.05
            : responses.buyNewClothes === 'Occasionally'
            ? 0.02
            : 0;
        break;
    
      case 'secondHandItems':
        footprint =
          responses.secondHandItems === 'Often'
            ? 0.02
            : responses.secondHandItems === 'Sometimes'
            ? 0.03
            : 0.05;
        break;
    
      case 'ecoFriendlyProducts':
        footprint =
          responses.ecoFriendlyProducts === 'Very important'
            ? 0.02
            : responses.ecoFriendlyProducts === 'Somewhat important'
            ? 0.05
            : 0.08;
        break;
    
      case 'recycleCompost':
        footprint =
          responses.recycleCompost === 'Always'
            ? 0.02
            : responses.recycleCompost === 'Sometimes'
            ? 0.05
            : 0.08;
        break;
    
      case 'reusableItems':
        footprint =
          responses.reusableItems === 'Always'
            ? 0.02
            : responses.reusableItems === 'Occasionally'
            ? 0.05
            : 0.08;
        break;
    
      case 'avoidSingleUsePlastic':
        footprint =
          responses.avoidSingleUsePlastic === 'Always'
            ? 0.02
            : responses.avoidSingleUsePlastic === 'Most of the time'
            ? 0.05
            : 0.08;
        break;
    
        case 'replaceElectronics':
          footprint =
            responses.replaceElectronics === 'Annually'
              ? 0.2
              : responses.replaceElectronics === 'Every 2-3 years'
              ? 0.1
              : responses.replaceElectronics === 'When they break'
              ? 0.05
              : 0;
          break;
  
        case 'donateRecycle':
          footprint = responses.donateRecycle === 'Regularly' ? 0.02 : 0.05;
          break;
  
        default:
          footprint = 0;
      }
  
           
    

    setSectionFootprints((prev) => ({
      ...prev,
      [question.section]: (prev[question.section] || 0) + footprint,
    }));
  };

  const nextQuestion = () => {
    if (!responses[questions[currentQuestionIndex].key]) {
      setErrorMessage('Please select an option before proceeding.');
      return;
    }

    calculateSectionFootprint();

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/results', { state: sectionFootprints });
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
    setErrorMessage(''); // Clear error message when navigating back
  };

  const [fade, setFade] = useState(false);
  const [prevSection, setPrevSection] = useState(questions[0].section);

  useEffect(() => {
    const currentSection = questions[currentQuestionIndex].section;

    // Trigger animation only if section has changed
    if (currentSection !== prevSection) {
      setFade(false);
      setTimeout(() => setFade(true), 50);
      setPrevSection(currentSection);
    } else {
      setFade(true); // Ensure it's visible normally
    }
  }, [currentQuestionIndex]);

  return (
    <div className="calc">
      <div className="calculator-container">
        <h1 className="calculator-title">Carbon Footprint Calculator</h1>
        <div className={`question-container ${fade ? 'fade-in' : ''}`}>
          <h2 className="question-section">{questions[currentQuestionIndex].section}</h2>
          <p className="question-text">{questions[currentQuestionIndex].question}</p>
          <div className="options-container">
            {questions[currentQuestionIndex].options.map((option) => (
              <div className="option-item" key={option}>
                <input
                  type="radio"
                  id={option}
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={responses[questions[currentQuestionIndex].key] === option}
                  onChange={() => handleChange(option)}
                  className="option-input"
                />
                <label htmlFor={option} className="option-label">
                  {option}
                </label>
              </div>
            ))}
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="button-container">
            <button
              className="navigation-button back-button"
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Back
            </button>
            <button
              className="navigation-button next-button"
              onClick={nextQuestion}
            >
              {currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootprintCalc;
