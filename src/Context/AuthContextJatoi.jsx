import { atom, useAtom } from 'jotai';

// Define an atom for user state
export const userAtom = atom(null);

// Define an atom for loading state
export const loadingAtom = atom(true);

// Define an atom for error state
export const errorAtom = atom(null);

// Define an atom for fetch user action
export const fetchUserAtom = atom(null, async (get, set, id) => {
  console.log("id data:", id);
  // Check if user is already logged in
  // if (!get(userAtom)) {
  set(loadingAtom, true);
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const userData = await response.json();
    set(userAtom, userData);
    set(loadingAtom, false);
    console.log("User data:", userData);
  } catch (error) {
    set(loadingAtom, false);
    set(errorAtom, error.message);
    console.error('Error fetching user data:', error);
  }
  // }
});

// Define an atom for logout action
export const logoutAtom = atom(null, (get, set) => {
  set(loadingAtom, false);
  set(userAtom, null);
});
