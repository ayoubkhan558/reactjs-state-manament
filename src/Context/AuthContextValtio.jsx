// authContext.js
import { proxy, useSnapshot } from 'valtio';
import axios from 'axios';

// Create a Valtio proxy object to store the authentication state

const authStore = proxy({
  user: { username: 'ayoub', phone: '+923347812124' },
  loading: false,
});

// Define a function to fetch user data from the server
const getUser = async (id) => {
  // authStore.loading = true;
  // authStore.user = { username: 'ayoub', phone: `+92${id}${id}${id}` };
  // authStore.loading = false;
  authStore.loading = true;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    authStore.user = response?.data;
    authStore.loading = false;
    // console.log("User data:", response?.data);
  } catch (error) {
    authStore.loading = false;
    // console.error('Error fetching user data:', error);
  }
};

// Define a function to logout
const logout = (id) => {
  authStore.loading = false;
  authStore.user = null;
};

export { authStore, logout, getUser };
