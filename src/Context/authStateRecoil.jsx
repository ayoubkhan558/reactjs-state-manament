import { atom, selector } from 'recoil';
import axios from 'axios';

export const ageState = atom({
  key: "age_State",
  default: 12
});

export const userState = atom({
  key: 'user_State',
  default: { username: 'ayoub', phone: '+923347812124' },
});

export const loadingState = atom({
  key: 'loading_State',
  default: false,
});

export const getUserOnline = selector({
  key: "getUser_Online",
  get: async ({ get }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
      const data = await response.json();
      // set(userState, data);
      // console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
});

export const getUserData = selector({
  key: 'getUser_Data',
  set: ({ set }) => {
    // set(loadingState, true);
    set(userState, { username: 'jan', phone: '+923347812124' });
    console.log("get user")
    axios.get('https://jsonplaceholder.typicode.com/users/2')
      .then(response => {
        console.log(response.data);
        set(userState, response.data);
        set(loadingState, false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        get(loadingState) && set(loadingState, false);
        throw error;
      });
  },
  get: ({ get }) => {
    console.log("get user")
  },
});

// Define a Recoil atom to hold the fetched data
export const dataAtom = atom({
  key: 'data_Atom',
  default: selector({
    key: 'dataAtom/default',
    get: async () => {
      try {
        // Fetch data using Axios
        const response = await axios.get('https://dummyjson.com/users/5');
        
        // Return the fetched data
        return response?.data;
      } catch (error) {
        // console.error('Error fetching data:', error);
        return null; // Handle error gracefully
      }
    },
  }),
});

export const signoutUser = selector({
  key: 'signout_User',
  set: ({ set }) => {
    console.log("set")
    set(userState, null);
    set(loadingState, false);
    set(dataAtom, null);
  },
  get: ({ get }) => {
    console.log("get")
    // Since selectors require a get callback, you can return any value here or simply return null
    return null;
  },
});
