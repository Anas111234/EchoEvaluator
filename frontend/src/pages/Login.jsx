import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "../Styling/Register.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState("");

  const { login } = useAuth(); // Use login from AuthContext
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      return;
    }

    try {
      const response = await axios.post("https://backend-echoevaluator-bmr9.onrender.com/auth/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      // Save user and token in the AuthContext
      login(token, user, rememberMe);

      // Clear form and reset state
      setEmail("");
      setPassword("");
      setPasswordError("");
      setRememberMe(false);

      navigate("/");
    } catch (error) {
      if (error.response?.status === 401) {
        setLoginError("Incorrect password. Please try again.");
      } else if (error.response?.status === 404) {
        setLoginError("User not found. Please check your email.");
      } else {
        setLoginError("An error occurred. Please try again later.");
      }
    }
  };

  const handleInputChange = () => {
    if (loginError) {
      setLoginError("");
    }
  };

  return (
    <div className="login-form">
      <div>
        <h1 className="heading">Login Form</h1>
      </div>
      <form onSubmit={submitHandler}>
        <p>Email:</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            handleInputChange();
          }}
          required
        />

        <p>Password:</p>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
            handleInputChange();
          }}
          required
        />
        {passwordError && <p className="error">{passwordError}</p>}
        {loginError && <p className="error">{loginError}</p>}

        <div className="remember-forget">
          <div className="rememberme">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <p>
              Remember<span>me</span>
            </p>
          </div>
          <Link to="/forgotpassword" className="forgot-password">
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="signUp">
          Login
        </button>
      </form>
      <p className="para1">Don't have an account?</p>
      <Link to="/signup" className="Login">
        Sign Up
      </Link>
    </div>
  );
};

export default Login;
