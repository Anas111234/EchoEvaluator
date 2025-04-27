// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import FootprintCalc from './pages/FootprintCalc.jsx';
import LearnMore from './pages/LearnMore.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Result from './pages/Result.jsx';
import Navbar from './Components/Navbar.jsx';
import FAQ from './pages/FAQ.jsx';
import AboutProject from './pages/AboutProject.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';

const App = () => {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/footprintcalc" element={<FootprintCalc />} />
      <Route path="/learnmore" element={<LearnMore />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/results" element={<Result />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/aboutproject" element={<AboutProject />} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />
      <Route path="/resetpassword" element={<ResetPassword/>} />

    </Routes>
    </>
  );
};

export default App;
