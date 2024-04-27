import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initialState = {
  user: null,
  sideBarState: false
};
const useStore = create(
  immer((set) => ({
    ...initialState,
    setUser: (user) => set({ user }),
    setSideBar: (value)=> set({sideBarState: value})
  }))
);

export default useStore;
