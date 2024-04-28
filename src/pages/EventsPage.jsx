import { useEffect } from 'react';
import Loader from '../components/circle-loader/Loader';
import EventCard from '../components/dashboard/common/EventCard';
import useEvents from '../utils/store/useEvents';
import useFetch from '../utils/hooks/useFetch';
import showToast from '../utils/showToast';

function EventsPage() {
	const userEvents = useEvents((state) => state.events);
	const eventDataStatus = useEvents((state) => state.status);
	const setEvents = useEvents((state) => state.setEvents);
	const { fetchData, loading } = useFetch();

	const fetchUserEvents = async () => {
		try {
			const { data } = await fetchData(
				`${import.meta.env.VITE_BASE_URL}/events`
			);
			console.log(data);
			setEvents(data);
		} catch (error) {
			showToast.error(error.message);
		}
	};

	useEffect(() => {
		if (eventDataStatus == 'idle') {
			fetchUserEvents();
		}
	}, []);

	return (
		<div className="w-full">
			<h1 className="text-3xl font-bold font-montserrat text-wybt-primary">
				Events
			</h1>
			<p className="text-gray-700 mt-3 text-sm">
				Explore and manage all the events you have created right here in one
				convenient location.
			</p>
			{!loading && userEvents?.length == 0 && (
				<div className="w-[20rem] mx-auto mt-[3rem]">
					<img
						className="object-cover w-full"
						src="/icons/empty-event.svg"
						alt="event"
					/>
					<p className="text-sm text-center">
						You haven&lsquo;t created any event yet.
					</p>
				</div>
			)}
			{!loading && (
				<div className="events__container">
					{userEvents?.map((item, index) => (
						<EventCard key={index} event={item} />
					))}
				</div>
			)}
	
			{loading && (
				<div className="flex justify-center items-center w-[5rem] mx-auto mt-[5rem]">
					<Loader />
				</div>
			)}
		</div>
	);
}
export default EventsPage;
