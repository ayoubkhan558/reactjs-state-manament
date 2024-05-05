import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

const AuthComponentEasypeasy = () => {
  const user = useStoreState((state) => state.auth.user);
  const loading = useStoreState((state) => state.auth.loading);
  const getUser = useStoreActions((actions) => actions.auth.getUser);
  const logout = useStoreActions((actions) => actions.auth.logout);

  return (
    <div>
      <div className="mb-3">
        <h2 className="text-xl font-bold">
          State using easy-peasy
        </h2>
        <p>
          <sub>5K Stars</sub> | <sub>35.3 kB (minified), 11.0 kB GZIP</sub>
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

              <div className="flex gap-2">
                <button
                  className="btn-main mt-3"
                  onClick={() => getUser(7)}
                >
                  Fetch User
                </button>
                <button
                  className="btn-dark mt-3"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
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

export default AuthComponentEasypeasy;
