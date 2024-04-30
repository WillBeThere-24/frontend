import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const initialState = {
	user: true,
	sideBarState: false,
};
const useStore = create(
	immer((set) => ({
		...initialState,
		setUser: (user) => set({ user }),
		setSideBar: (value) => set({ sideBarState: value }),
		resetUser: () => set({ ...initialState }),
		increaseEventCount: () =>
			set((state) => ({ user: { ...(state.user.eventCount + 1) } })),
	}))
);

export default useStore;
