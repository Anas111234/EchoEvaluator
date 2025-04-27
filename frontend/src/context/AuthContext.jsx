import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
  });
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Check for token and user in localStorage when the app loads
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      try {
        setAuthState({
          token,
          user: JSON.parse(user),
        });
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
      }
    }

    setLoading(false); // Mark loading as complete
  }, []);

  const login = (token, user, rememberMe) => {
    if (rememberMe) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    }

    setAuthState({ token, user });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthState({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
