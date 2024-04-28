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
      addEvent: (event)=> set((state)=>({events: [...state.events, event]})),
		setCurrentEvent: (currentEvent) => set({ currentEvent }),
	}))
);

export default useEvents;
