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
	showToast.message('render');
	console.log(userEvents);

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
			<div className="events__container">
				{userEvents !== null &&
					userEvents?.map((item, index) => (
						<EventCard key={index} event={item} />
					))}
			</div>
			{!loading && userEvents?.length == 0 && (
				<div>
					<img src="/icons/empty-event.svg" alt="event" />
					<p>You haven`&lsquo;t created any event yet.</p>
				</div>
			)}
			{loading && (
				<div className="w-[50%]">
					<Loader />
				</div>
			)}
		</div>
	);
}
export default EventsPage;
