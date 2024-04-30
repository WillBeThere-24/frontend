import useRsvp from '../utils/store/useRvsp';
import formatDateTime from '../utils/formatDataTime';
import Toogle from '../components/toogle/Toogle';
import { Fragment, useState } from 'react';
import { usePost } from '../utils/hooks';
import showToast from '../utils/showToast';
import { Navigate } from 'react-router-dom';

function RsvpOverview() {
	const currentRsvp = useRsvp((state) => state.currentRsvp);
	const { postData, loading } = usePost();
	const userRsvps = useRsvp((state) => state.rsvps);
	const setRsvps = useRsvp((state) => state.setRsvps);
	const setCurrentRsvp = useRsvp(state => state.setCurrentRsvp);

	const [isAttending, setIsAttending] = useState(currentRsvp?.attending);

	const handleChangeStatus = async () => {
		try {
			const { data } = await postData(
				`${import.meta.env.VITE_BASE_URL}/events/rsvp/${
					currentRsvp.event._id
				}?guest=${currentRsvp._id}`,
				{ attending: !isAttending }
			);
			const newRsvpData = userRsvps.map((rsvp) => {
				if (rsvp._id == currentRsvp._id) {
					return {
						...rsvp,
						attending: data.attending
					};
				}
				return rsvp;
			});
			setIsAttending(data.attending);
			setCurrentRsvp({
				...currentRsvp,
				attending: data.attending
			})
			setRsvps(newRsvpData);
		} catch (error) {
			showToast.error(error.message);
		}
	};

	if (!currentRsvp) {
		return <Navigate to="/dashboard/rsvp" />;
	}

	return (
		<div className="w-full">
			<div className="relative h-[27rem] p-5 flex flex-col rounded-lg bg-[#76305c7d] items-center justify-center">
				<img
					className="absolute top-0 left-0 rounded-lg brightness-[30%] bg w-full h-full object-cover object-center -z-10"
					src={currentRsvp.event.image}
					alt=""
				/>
				<h1 className="text-5xl font-bold font-montserrat text-white text-center">
					{currentRsvp.event.name}
				</h1>
				<p className=" mt-3 text-sm text-white font-montserrat text-center">
					{currentRsvp.event.description}
				</p>
				{currentRsvp.attending && (
					<Fragment>
						<div className="flex justify-center items-center gap-2 mt-14">
							<img
								className="w-6 block invert brightness-200"
								src="/icons/time.svg"
								alt=""
							/>
							<p className="  text-sm text-white font-bold font-montserrat text-center">
								{formatDateTime(currentRsvp.event.start)}
							</p>
						</div>
						<div className="flex justify-center items-center gap-2 mt-3">
							<img
								className="w-5 block  brightness-200"
								src="/icons/location.svg"
								alt=""
							/>
							<p className="capitalize  text-sm text-white font-bold font-montserrat text-center">
								{currentRsvp.event.location}
							</p>
						</div>
					</Fragment>
				)}

				{currentRsvp.attending === false && (
					<img
						className="w-12 invert-[.8] block mt-8"
						src="/icons/lock.svg"
						alt=""
					/>
				)}
			</div>
			<Toogle
				loading={loading}
				id={currentRsvp._id}
				handleChange={handleChangeStatus}
				isAttending={isAttending}
			/>
			<div className="mt-10 w-[70%] mb-8">
				<label className="block text-sm mb-2 opacity-50" htmlFor="name">
					Congratulatory Message
				</label>
				<input
					className="block w-full h-[2.7rem] rounded-md border border-wybt-secondary p-3 opacity-35"
					type="text"
					required
					value={currentRsvp.message}
					disabled

					name="location"
				/>
			</div>
			<div className="w-full mb-10">
				{currentRsvp.attending && currentRsvp.plus_ones.length > 0 && (
					<p className="font-bold my-2">Plus Ones</p>
				)}

				{currentRsvp.attending &&
					currentRsvp.plus_ones.map((guest, index) => (
						<div
							key={index}
							className="table__body plus__one [&>p]:text-sm my-2"
						>
							<p>{guest.name}</p>
							<p>{guest.email}</p>
						</div>
					))}
			</div>
			<div className="w-full mb-10">
				{currentRsvp.attending && currentRsvp.items.length > 0 && (
					<p className="font-bold my-2">Items</p>
				)}

				{currentRsvp.attending &&
					currentRsvp.items.map((item, index) => (
						<div
							key={index}
							className="table__body plus__one [&>p]:text-sm my-2"
						>
							<p>{item}</p>
						</div>
					))}
			</div>
		</div>
	);
}
export default RsvpOverview;
