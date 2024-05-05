import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useRecoilValue, useSetRecoilState, useRecoilValueLoadable, useRecoilState } from 'recoil';
import { userState, loadingState, ageState, getUserOnline, getUserData, signoutUser, dataAtom } from '@context/authStateRecoil';

const AuthComponentRecoil = () => {
  const [age, setAge] = useRecoilState(ageState);
  const [user, setUser] = useRecoilState(userState);
  // const user = useRecoilValue(userState);
  // const setUser = useSetRecoilState(userState);
  const loading = useRecoilValue(loadingState);
  const [load, setLoading] = useRecoilState(loadingState);
  const fetchUserData = useSetRecoilState(getUserData);
  const setsignoutUser = useSetRecoilState(signoutUser);
  // const userOnline = useRecoilValue(getUserOnline);
  const [onlineUser, setOnlineUser] = useState();
  const userDetails = useRecoilValueLoadable(getUserOnline);
  const { contents } = userDetails;
  const setData = useSetRecoilState(dataAtom);
  const user2 = useRecoilValueLoadable(getUserOnline);
  // const [user2, setUser2] = useRecoilState(dataAtom);

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
    console.log("user ", user)
    setOnlineUser(userDetails)
  }, [userDetails]);

  return (
    <div>
      <div className="mb-3">
        <h2 className="text-xl font-bold">
          State using Recoil
        </h2>
        <p>
          <sub>20K Stars</sub> | <sub>14kb Size</sub>
        </p>
      </div>

      {onlineUser?.name} <br />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {user ? (
            <div>
              <h2>
                <b>Welcome,</b> {user.username}
              </h2>
              <p>
                <b>Phone:</b> {user.phone}
              </p>

              <div className="flex gap-2">
                <button
                  className="btn-dark mt-3"
                  onClick={() => fetchUser(5)}
                >
                  Fetch User
                </button>
                <button
                  className="btn-main mt-3"
                  onClick={() => setsignoutUser()}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div>
              <button
                className="btn-dark mt-3"
                // onClick={async () => {
                //   setLoading(false);
                //   setAge(2323)
                //   try {
                //     const response = await axios.get('https://jsonplaceholder.typicode.com/users/9');
                //     const newData = response?.data;
                //     setData(newData);
                //     // setUser2(newData);
                //   } catch (error) {
                //     console.error('Error fetching data:', error);
                //   }
                //   // setData(
                //   //   { username: 'jan2', phone: '+923347812124' }
                //   // )
                //   // setUser2(
                //   //   { username: 'jan2', phone: '+923347812124' }
                //   // )
                // }}
                // onClick={getUser}
                // onClick={fetchUserData}
                onClick={() => fetchUser(7)}
              >
                Get User
              </button>
            </div>
          )}
        </>
      )}

      <br />

      <div className="flex items-center gap-2 border rounded-1 p-2 w-full">
        <button
          onClick={() => setAge(23)}
          className="btn-main"
        >
          setAge
        </button>
        {age}
      </div>
    </div>
  );
};

export default AuthComponentRecoil;