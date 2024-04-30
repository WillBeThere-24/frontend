import { useEffect } from 'react';
import { useFetch } from '../utils/hooks';
import useRsvp from '../utils/store/useRvsp';
import showToast from '../utils/showToast';
import Loader from '../components/circle-loader/Loader';
import RsvpCard from '../components/dashboard/common/RsvpCard';

function RsvpSection() {
	const userRsvps = useRsvp((state) => state.rsvps);
	const userRsvpDataStatus = useRsvp((state) => state.status);
	const setRsvps = useRsvp((state) => state.setRsvps);
	const { fetchData, loading } = useFetch();

	const fetchUserRsvps = async () => {
		try {
			const {data} = await fetchData(`${import.meta.env.VITE_BASE_URL}/events/myrsvps`);
			setRsvps(data)
			console.log(data);
		} catch (error) {
			showToast.error(error.message);
		}
	};

	useEffect(() => {
		if(userRsvpDataStatus == "idle") {
			fetchUserRsvps();
		}
	}, []);
	return (
		<div className="w-full">
			<h1 className="text-3xl font-bold font-montserrat  text-wybt-primary">
				RSVP
			</h1>
			<p className="text-gray-700 mt-3 text-sm">
				Discover and manage all the exciting events you&lsquo;ve chosen to
				attend by RSVP&lsquo;ing, right here
			</p>
			{!loading && userRsvps?.length == 0 && (
				<div className="w-[20rem] mx-auto mt-[3rem]">
					<img
						className="object-cover w-full"
						src="/icons/empty-rsvp.svg"
						alt="event"
					/>
					<p className="text-sm text-center">
						You haven&lsquo;t accepted any invites yet.
					</p>
				</div>
			)}
			{!loading && (
				<div className="events__container">
					{userRsvps?.map((item, index) => item.event && (
						<RsvpCard key={index} rsvp={item} />
					))}
				</div>
			)}

			{loading && (
				<div className="flex justify-center items-center w-[5rem] mx-auto my-[5rem]">
					<Loader />
				</div>
			)}
		</div>
	);
}
export default RsvpSection;
