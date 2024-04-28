import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const initialState = {
	rsvp: null,
	currentRsvp: null,
};

const useRsvp = create(
	immer((set) => ({
		...initialState,
		setEvents: (events) => set({ events }),
		setCurrentEvent: (currentEvent) => set({ currentEvent }),
	}))
);

export default useRsvp;
