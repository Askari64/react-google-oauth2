import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// VSCode Intellisense may not work without below JSDoc Comments

/**
 * @typedef {Object} User
 * @property {string} name - The name of the user.
 * @property {string} email - The email of the user.
 * @property {string} picture - The URL of the user's profile picture.
 */

/**
 * Zustand store for managing user authentication state.
 * 
 * @typedef {Object} UserStore
 * @property {User|null} user - The current authenticated user or null if not logged in.
 * @property {(newUser: User) => void} setUser - Function to set the authenticated user.
 * @property {() => void} logoutUser - Function to log out the user by clearing the user state.
 */

/** 
 * Creates a Zustand store for user authentication management with persistence.
 * 
 * @type {import('zustand').UseStore<UserStore>}
 */
const useUserStore = create(
  persist(
    (set) => ({
      user: null,

      /**
       * Sets the user state with the provided user object.
       * @param {User} newUser - The user object to set as the current user.
       */
      setUser: (newUser) => set({ user: newUser }),

      /**
       * Logs out the user by setting the user state to null.
       */
      logoutUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage', // unique name for the storage
      getStorage: () => localStorage, // use localStorage for persistence
    }
  )
);

export default useUserStore;