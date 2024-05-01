import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';


const initialState = {
	user: null,
	sideBarState: false,
};
const useStore = create(
	immer((set) => ({
		...initialState,
		setUser: (user) => set({ user }),
		setSideBar: (value) => set({ sideBarState: value }),
		resetUser: () => set({ ...initialState }),
		setUserLatestEvent:(newEvents)=> set((state) => ({user:  {...state.user, latestThree: newEvents }})),
		decreaseEventCount: ()=> set((state) => ({ user:  {...state.user, eventCount: (state.user.eventCount - 1) } })),
		increaseEventCount: () =>
			set((state) => ({ user: {...state.user, eventCount: (state.user.eventCount + 1) } })),
	}))
);

export default useStore;
