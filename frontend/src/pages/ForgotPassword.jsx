import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styling/Register.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [messages, setMessages] = useState('');
  const [messageType, setMessageType] = useState(''); // new state to handle message type (success or error)
  const [isQuestionVisible, setIsQuestionVisible] = useState(false);

  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  // Function to clear the error message when typing starts
  const handleInputChange = (e) => {
    if (messages) {
      setMessages('');
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'securityAnswer') {
      setSecurityAnswer(e.target.value);
    } else if (e.target.name === 'newPassword') {
      setNewPassword(e.target.value);
      validatePassword(e.target.value);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setMessages(''); // Clear any previous messages
    setMessageType('');
    try {
      const response = await axios.post('https://backend-echoevaluator-bmr9.onrender.com/auth/forgot-password', { email });
      if (response.status === 200) {
        setSecurityQuestion(response.data.securityQuestion);
        setIsQuestionVisible(true);
      }
    } catch (error) {
      setMessages('Email not found.');
      setMessageType('error');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessages(''); // Clear any previous messages
    setMessageType('');

    if (!validatePassword(newPassword)) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/auth/reset-password', {
        email,
        securityAnswer,
        newPassword,
      });
      if (response.status === 200) {
        setMessages('Password reset successful. You can now log in.');
        setMessageType('success');
        setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
      }
    } catch (error) {
      setMessages('Incorrect answer to the security question.');
      setMessageType('error');
    }
  };

  return (
    <div className="login-form">
      <div>
        <h1 className="heading">Forgot Password</h1>
      </div>
      {!isQuestionVisible ? (
        <form onSubmit={handleEmailSubmit} className="form-container">
          <p>Email:</p>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
            className="input-field"
            placeholder="Enter your email"
          />
          <button type="submit" className="submit-button signUp">Submit</button>
        </form>
      ) : (
        <form onSubmit={handleResetPassword} className="form-container">
          <h2 className="security-heading">Security Question: </h2>
          <p className='security-question'>{securityQuestion}</p>
          <input
            type="text"
            name="securityAnswer"
            value={securityAnswer}
            onChange={handleInputChange}
            required
            className="input-field"
            placeholder="Enter your answer"
          />
          <p>New Password:</p>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleInputChange}
            required
            className="input-field"
            placeholder="Enter your new password"
          />
          {passwordError && <p className="error">{passwordError}</p>}
          <button type="submit" className="submit-button signUp">Reset Password</button>
        </form>
      )}
      {messages && (
        <p className={`messages ${messageType}`}>{messages}</p> // Conditionally apply class based on message type
      )}
    </div>
  );
};

export default ForgotPassword;
