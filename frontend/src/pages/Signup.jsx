import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styling/Register.css';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const validateAge = (age) => {
    if (age < 10 || age > 100) {
      setAgeError('Invalid Age');
      return false;
    }
    setAgeError('');
    return true;
  };

  const validateFirstname = (firstname) => {
    const regex = /\d/;
    if (regex.test(firstname) || firstname.length < 3) {
      setFirstnameError('Invalid first name');
      return false;
    }
    setFirstnameError('');
    return true;
  };

  const validateLastname = (lastname) => {
    const regex = /\d/;
    if (regex.test(lastname) || lastname.length < 3) {
      setLastnameError('Invalid last name');
      return false;
    }
    setLastnameError('');
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (
      !validateAge(age) ||
      !validatePassword(password) ||
      !validateFirstname(firstname) ||
      !validateLastname(lastname)
    ) {
      return;
    }

    try {
      // Reset email error before making the request
      setEmailError('');
      
      const response = await axios.post('https://backend-echoevaluator-bmr9.onrender.com/auth/register', {
        firstname,
        lastname,
        age,
        gender,
        email,
        password,
        securityQuestion,  // Send security question
        securityAnswer,    // Send security answer
      });

      // On success, navigate to login
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        
        if (errorMessage === 'Email is already in use') {
          setEmailError('Email is already in use');
        } else {
          console.error(errorMessage);
        }
      } else {
        console.error('Signup failed. Please try again later.');
      }
    }
  };

  return (
    <div className="signup-form">
      <div>
        <h1 className="heading">Sign Up Form</h1>
      </div>
      <form onSubmit={submitHandler}>
        <p>First Name:</p>
        <input
          type="text"
          placeholder="Enter your first name"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
            validateFirstname(e.target.value);
          }}
          required
        />
        {firstnameError && <p className="error">{firstnameError}</p>}

        <p>Last Name:</p>
        <input
          type="text"
          placeholder="Enter your last name"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
            validateLastname(e.target.value);
          }}
          required
        />
        {lastnameError && <p className="error">{lastnameError}</p>}

        <p>Age:</p>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
            validateAge(e.target.value);
          }}
          required
        />
        {ageError && <p className="error">{ageError}</p>}

        <p>Gender:</p>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <p>Email:</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (isSubmitted) setEmailError('');
          }}
          required
        />
        {isSubmitted && emailError && <p className="error">{emailError}</p>}

        <p>Password:</p>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          required
        />
        {passwordError && <p className="error">{passwordError}</p>}

        {/* Security Question and Answer */}
        <p>Security Question:</p>
        <select
  value={securityQuestion}
  onChange={(e) => setSecurityQuestion(e.target.value)}
  required
>
  <option value="">Select a security question</option>
  <option value="Mother's maiden name?">Mother's maiden name?</option>
  <option value="First pet's name?">First pet's name?</option>
  <option value="First car?">First car?</option>
  <option value="Birth city?">Birth city?</option>
  <option value="Favorite teacher?">Favorite teacher?</option>
  <option value="Childhood nickname?">Childhood nickname?</option>
  <option value="First job?">First job?</option>
  <option value="Best friend's name?">Best friend's name?</option>
</select>


        <p>Answer:</p>
        <input
          type="text"
          placeholder="Enter your answer"
          value={securityAnswer}
          onChange={(e) => setSecurityAnswer(e.target.value)}
          required
        />

        <br />
        <button type="submit" className="signUp">Sign Up</button>
      </form>
      <p className="para1">If you have an account?</p>
      <Link to="/login" className="Login">Login</Link>
    </div>
  );
};

export default Signup;
