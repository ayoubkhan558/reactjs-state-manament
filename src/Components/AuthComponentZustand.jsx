// AuthComponent.js

import React, { useEffect } from 'react';
import useAuthStore from '@context/AuthContextZustand';

const AuthComponentZustand = () => {
  const { user, loading, getUser, logout } = useAuthStore();

  useEffect(() => {
    getUser(2); // Fetch user data when the component mounts
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">
        State using Zustand
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {user ? (
            <div>
              <h2><b>Welcome,</b> {user.name}</h2>
              <p><b>Phone:</b> {user.phone}</p>
              <button
                className="btn-dark mt-3"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button
                className="btn-main mt-3"
                onClick={() => getUser(3)} // Pass a function to onClick
              >
                Get User
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AuthComponentZustand;
