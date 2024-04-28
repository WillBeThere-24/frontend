import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const initialState = {
	events: null,
	status: 'idle',
	currentEvents: null,
};

const useEvents = create(
	immer((set) => ({
		...initialState,
		setEvents: (events) => set({ events, status: 'success' }),
		setCurrentEvent: (currentEvent) => set({ currentEvent }),
	}))
);

export default useEvents;
