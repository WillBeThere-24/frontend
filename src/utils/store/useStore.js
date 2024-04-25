import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initialState = {
  user: null,
};
const useStore = create(
  immer((set) => ({
    ...initialState,
    setUser: (user) => set({ user }),
  }))
);

export default useStore;
