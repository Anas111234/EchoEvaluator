import React, { useState } from "react";
import axios from "axios";
import "../Styling/Register.css";

const ResetPassword = () => {
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://backend-echoevaluator-bmr9.onrender.com/auth/resetpassword", { token, newPassword });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div className="login-form">
    <div className="reset-password-form">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <p>Reset Token:</p>
        <input type="text" placeholder="Enter reset token" value={token} onChange={(e) => setToken(e.target.value)} required />
        <p>New Password:</p>
        <input type="password" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};
export default ResetPassword;
