// authContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context object
const AuthContext = createContext();

// Create a custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Create an AuthProvider component to wrap your app
export const AuthProvider = ({ children }) => {
  // Define your initial authentication state
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // Fetch user data from server when the component mounts
  useEffect(() => {
    getUser(2);
  }, []);

  // Define functions to get users
  const getUser = async (id) => {
    if (!user) { // Check if user is already logged in
      setLoading(true);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response?.data);
        setLoading(false);
        // console.log("User data:", response?.data);
      } catch (error) {
        setLoading(false);
        // console.error('Error fetching user data:', error);
      }
    }
  };

  const logout = () => {
    // console.log("abc");
    setLoading(false);
    setUser(null); // Simply clear the user object  
  };

  // Pass authentication state and functions to the context provider
  return (
    <AuthContext.Provider value={{ loading, user, getUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
