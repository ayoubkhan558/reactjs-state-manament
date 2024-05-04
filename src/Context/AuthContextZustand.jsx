import create from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  getUser: async (id) => {
    const user = localStorage.getItem('user');
    if (user) {
      set({ user: JSON.parse(user), loading: false });
    } else {
      set({ loading: true });
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const userData = await response.json();
        localStorage.setItem('user', JSON.stringify(userData));
        set({ user: userData, loading: false });
        console.log("User data:", userData);
      } catch (error) {
        set({ loading: false });
        console.error('Error fetching user data:', error);
      }
    }
  },
  logout: () => {
    localStorage.removeItem('user');
    set({ user: null });
  },
}));

export default useAuthStore;
