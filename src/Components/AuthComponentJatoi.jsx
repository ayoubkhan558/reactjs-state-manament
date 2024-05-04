import React, { useEffect } from 'react';
import axios from "axios"
import { useAtom } from 'jotai';
import { userAtom, loadingAtom, fetchUserAtom, logoutAtom } from '@context/AuthContextJatoi';

const AuthComponentJatoi = () => {
  const [user, setUser] = useAtom(userAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  const getUser = useAtom(fetchUserAtom)[1];
  const logout = useAtom(logoutAtom)[1];

  const fetchUser = async (id) => {
    try {
      setLoading(true); // Set loading to true
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      const userData = response?.data;
      setUser(userData); // Update user state
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false); // Set loading to false after fetch is done
    }
  };

  useEffect(() => {
    getUser(2);
  }, []);

  const getUserLocal = async (id) => {
    if (!user) { // Check if user is already logged in
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const userData = await response.json();
        setUser(userData);
        setLoading(false);
        console.log("User data:", userData);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching user data:', error);
      }
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">
        State using Jotai
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {user ? (
            <div>
              <h2><b>Welcome,</b> {user.name}</h2>
              <p><b>Phone:</b> {user.phone}</p>

              <div className="flex gap-2">
                <button
                  className="btn-main mt-3"
                  onClick={() => fetchUser(5)}
                >
                  Fetch User
                </button>
                <button
                  className="btn-dark mt-3"
                  onClick={() => logout()}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div>
              <button
                className="btn-main mt-3"
                onClick={() => getUser(4)}
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

export default AuthComponentJatoi;
