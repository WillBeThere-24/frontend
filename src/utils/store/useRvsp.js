import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const initialState = {
	rsvps: null,
	currentRsvp: null,
	status: "idle"
};

const useRsvp = create(
	immer((set) => ({
		...initialState,
		setRsvps: (rsvps) => set({ rsvps, status: "success" }),
		setCurrentRsvp: (currentRsvp) => set({ currentRsvp }),
	}))
);

export default useRsvp;
