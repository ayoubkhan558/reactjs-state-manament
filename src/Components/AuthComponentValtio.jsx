// AuthComponent.js
import React from 'react';
import { proxy, useSnapshot } from 'valtio'

import { authStore, getUser, logout } from '@context/AuthContextValtio';

const AuthComponentValtio = () => {
  const { user, loading } = useSnapshot(authStore)

  return (
    <div>
      <div className="mb-3">
        <h2 className="text-xl font-bold">
          State using Valtio
        </h2>
        <p>
          <sub>8.5K Stars</sub>
          <sub> 1.5KB (minified), 3kB GZIP </sub>
        </p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {user ? (
            <div>
              <h2><b>Welcome,</b> {user?.username}</h2>
              <p><b>Phone:</b> {user?.phone}</p>
              <button
                className="btn-dark mt-3"
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button
                className="btn-main mt-3"
                onClick={() => getUser(5)}
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

export default AuthComponentValtio;
