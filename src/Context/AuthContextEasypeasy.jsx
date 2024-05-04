// store.js

import { createStore, action, thunk } from 'easy-peasy';
import axios from "axios"

const store = createStore({
  auth: {
    user2: null,
    user: { username: 'Khan', phone: '+92334' },
    loading: false,
    setUser: action((state, payload) => {
      state.user = payload;
    }),
    setLoading: action((state, payload) => {
      state.loading = payload;
    }),
    addUser: action((state, payload) => {
      state.user = payload;
      state.loading = false;
    }),
    getUser: thunk(async (actions, payload) => {
      // state.loading = true;
      console.log(payload)
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${payload}`);
      actions.addUser(data);
    }),
    addTodo2: action(async (state, id) => {
      console.log("getUser")
      // state.loading = true;
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const userData = await response.json();
        state.user = userData;
        // state.loading = false;
        console.log("User data:", userData);
      } catch (error) {
        // state.loading = false;
        console.error('Error fetching user data:', error);
      }
    }),
    logout: action((state) => {
      state.loading = false;
      state.user = null;
    }),
  },
});

export default store;
