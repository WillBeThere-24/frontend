import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const initialState = {
	events: null,
	status: 'idle',
	currentEvent: null,
};

const useEvents = create(
	immer((set) => ({
		...initialState,
		setEvents: (events) => set({ events, status: 'success' }),
		resetEvents: () => set({ ...initialState}),
      addEvent: (event)=> set((state)=>({events: [event, ...state.events]})),
		setCurrentEvent: (currentEvent) => set({ currentEvent }),
	}))
);

export default useEvents;
