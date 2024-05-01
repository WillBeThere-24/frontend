import { useEffect, useState } from 'react';
import { addZero } from '../utils/addZero';
import useEvents from '../utils/store/useEvents';
import InviteModal from '../components/invite-guest/InvitModal';
import { useFetch } from '../utils/hooks';
import showToast from '../utils/showToast';
import formatDateTime from '../utils/formatDataTime';
import ClosedEye from '/icons/form/Closed-Eye.svg';
import OpenedEye from '/icons/form/Open-Eye.svg';
import Loader from '../components/circle-loader/Loader';
import { Navigate, useNavigate } from 'react-router-dom';
import useDelete from '../utils/hooks/useDelete';

const hiddenCount = '***';

const getAttenddingClass = (isAttending) => {
	if (isAttending === undefined || isAttending === null) {
		return {
			color: 'bg-gray-500',
			text: 'Not Responded',
		};
	}
	if (isAttending) {
		return {
			color: 'bg-green-500',
			text: 'Attending',
		};
	} else if (!isAttending) {
		return { color: 'bg-red-500', text: 'Not Attending' };
	}
};

export function InvitedGuest({ isAttending, name, email, plusOnes, message }) {
	const [showPlusOnes, setShowPlusOnes] = useState(false);
	const handleShowPlusOnes = () => {
		setShowPlusOnes(!showPlusOnes);
	};
	const classValue = getAttenddingClass(isAttending);

	return (
		<div className="border-wybt-accent border  rounded-md mt-1">
			<div
				className={`table__body  items-start  py-2 md:py-4 px-4 [&>p]:text-sm `}
			>
				<p>{name}</p>
				<p className="break-all hidden md:block">{email}</p>
				<p className="hidden md:block">{message || '__'}</p>
				<p
					className={`${classValue.color} w-full md:w-[80%] py-2 text-center text-white font-bold rounded-lg`}
				>
					{classValue.text}
				</p>

				<button
					onClick={handleShowPlusOnes}
					className={`${
						plusOnes.length > 0
							? 'opacity-70 '
							: 'opacity-0 pointer-events-none'
					} flex items-center justify-center   p-1`}
				>
					<img
						className={showPlusOnes && 'rotate-180'}
						src="/icons/arrow-down.svg"
						alt=""
					/>
				</button>
			</div>
			{showPlusOnes && (
				<div className="pl-3">
					<p className="font-bold my-2">Plus Ones</p>
					{plusOnes.map((guest, index) => (
						<div
							key={index}
							className="table__body plus__one [&>p]:text-sm my-2"
						>
							<p>{guest.name}</p>
							<p>{guest.email}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

function EventOverview() {
	const [showGuests, setShowGuests] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const currentEvent = useEvents((state) => state.currentEvent);
	const [eventGuests, setEventGuest] = useState([]);
	const [showGuestCount, setShowGuestCount] = useState(false);
	const setEvents = useEvents((state) => state.setEvents);
	const usersEvents = useEvents((state) => state.events);

	console.log(currentEvent);

	const { fetchData, loading } = useFetch();
	const { deleteData, loading:loadingDelete } = useDelete();
	const navigate = useNavigate()

	useEffect(() => {
		fetchEventGuest();
	}, []);

	if (!currentEvent) {
		return <Navigate to="/dashboard/events" />;
	}

	const deleteEvent = async () => {
		showToast.loading("Deleting Event")
		try {
			await deleteData(
				`${import.meta.env.VITE_BASE_URL}/events/${currentEvent._id}/`
			);

			const newEvents = usersEvents.filter(
				(event) => event.id !== currentEvent._id
			);
			setEvents(newEvents);
			navigate("/dashboard/events");
			showToast.success("Event Deleted")
		} catch (error) {
			showToast.error(error.message);
		}
	};

	const fetchEventGuest = async () => {
		try {
			const { data } = await fetchData(
				`${import.meta.env.VITE_BASE_URL}/events/${currentEvent._id}/guests`
			);

			setEventGuest(data);
		} catch (error) {
			showToast.error(error);
		}
	};
	const handleToggleList = () => {
		setShowGuests(!showGuests);
	};
	const handleShowGuestCount = () => {
		setShowGuestCount(!showGuestCount);
	};

	return (
		<div className="w-full">
			<div className="relative h-[27rem] p-5 flex flex-col rounded-lg bg-[#76305c7d] items-center justify-center">
				<img
					className="absolute top-0 left-0 rounded-lg brightness-[30%] bg w-full h-full object-cover object-center -z-10"
					src={currentEvent.image}
					alt=""
				/>
				<h1 className="capitalize text-3xl md:text-5xl font-bold font-montserrat text-white text-center">
					{currentEvent.name}
				</h1>
				<p className=" mt-3 text-sm text-white font-montserrat md:max-w-[67%] text-center">
					{currentEvent.description}
				</p>
				<div className="flex justify-center items-center gap-2 mt-14">
					<img
						className="w-4 md:w-6 block invert brightness-200"
						src="/icons/time.svg"
						alt=""
					/>
					<p className=" text-[.7rem]  md:text-sm text-white font-semibold font-montserrat text-center">
						{formatDateTime(currentEvent.start)}
					</p>
				</div>

				<div className="flex justify-center items-center gap-1 mt-3">
					<img
						className="w-4 md:w-6 block  brightness-200"
						src="/icons/location.svg"
						alt=""
					/>
					<p className="capitalize text-[.7rem] md:text-sm text-white font-semibold font-montserrat text-center">
						{currentEvent.location}
					</p>
				</div>
			</div>
			<div className="flex justify-between items-center mt-8">
				<button
					onClick={deleteEvent}
					disabled={loadingDelete}
					
					className="flex justify-center items-center gap-2 bg-red-50 border border-red-400 shadow-lg px-4 rounded-xl  py-2 md:py-2 disabled:opacity-50"
				>
					<img
						src="/icons/delete.svg"
						alt=""
						className="p-0 m-0 w-4 md:w-6 block"
					/>

					<p className="text-[.7rem]  md:text-sm text-[#ff2929] ">Delete Event</p>
				</button>
				<button
					onClick={handleShowGuestCount}
					className="flex justify-center items-center gap-2 bg-gray-200 shadow-lg px-4 rounded-xl border border-gray-700 py-2 md:py-0"
				>
					<img
						src={showGuestCount ? ClosedEye : OpenedEye}
						alt=""
						className="p-0 m-0 w-4 md:w-6 "
					/>

					<p className="text-[.7rem]  md:text-sm ">
						{showGuestCount ? 'Hide Guest Count' : 'Show Guest Count'}
					</p>
				</button>
			</div>
			<div className="block md:flex gap-4 justify-center mt-8 text-center text-wybt-primary flex-col sm:flex-row w-full items-center">
				<div className="text-lg font-semibold border border-wybt-primary h-[9rem] flex flex-col justify-center  px-2  rounded-md w-full md:w-full">
					<h3 className="">
						{showGuestCount
							? addZero(currentEvent.attendingGuestCount)
							: hiddenCount}
					</h3>
					<p className="">Attending</p>
				</div>
				<div className="w-full mt-12 md:mt-0 md:w-full text-lg font-semibold border-wybt-primary border h-[9rem] flex flex-col justify-center px-2  rounded-md">
					<h3 className="">
						{showGuestCount
							? addZero(currentEvent.notAttendingGuestCount)
							: hiddenCount}
					</h3>
					<p>Not Attending</p>
				</div>
				<div className="w-full mt-12 md:mt-0 md:w-full text-lg font-semibold border-wybt-primary border h-[9rem] flex flex-col justify-center px-2  rounded-md">
					<h3 className="">
						{showGuestCount
							? addZero(currentEvent.noResponseCount)
							: hiddenCount}
					</h3>
					<p>Not Responded</p>
				</div>
				<div className="w-full mt-12 md:mt-0 md:w-full text-lg font-semibold border-wybt-primary border h-[9rem] flex flex-col justify-center px-2  rounded-md">
					<h3 className="">
						{showGuestCount
							? addZero(currentEvent.plusOnesGuestCount)
							: hiddenCount}
					</h3>
					<p>Plus Ones</p>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<button
					onClick={handleToggleList}
					className="bg-wybt-primary text-white py-3 md:py-4 text-sm w-[8.3rem] md:w-[11rem]  my-20  rounded-md whitespace-nowrap hover:bg-wybt-secondary  md:text-sm "
				>
					{showGuests ? 'Hide Guest List' : 'View Guests List'}
				</button>
				<button
					className="bg-wybt-primary text-white py-3 md:py-4 text-sm w-[8.3rem] md:w-[11rem]  my-20  rounded-md whitespace-nowrap hover:bg-wybt-secondary  md:text-sm "
					onClick={() => setIsModalOpen(true)}
				>
					Invite Guests
				</button>
			</div>
			{showGuests && (
				<div className="w-full mb-10">
					<div className="table__body border items-center border-wybt-accent rounded-md py-4 px-2 [&>p]:text-sm [&>p]:font-bold text-wybt-primary">
						<p>Name</p>
						<p className="hidden md:block">Email</p>
						<p className="hidden md:block">Message</p>
						<p>Status</p>
					</div>
					{!loading && eventGuests.length == 0 && (
						<div className="flex justify-center items-center flex-col">
							<img
								className="w-[50%] min-w-[20rem]"
								src="/icons/no-guest.svg"
								alt=""
							/>
							<p className="text-center text-sm">No attending Guest.</p>
						</div>
					)}
					{loading && (
						<div className="flex justify-center items-center w-[5rem] mx-auto my-[5rem]">
							<Loader />
						</div>
					)}

					{eventGuests.map((item, index) => (
						<InvitedGuest
							key={index}
							plusOnes={item.plus_ones}
							isAttending={item.attending}
							email={item.email}
							name={item.name}
							message={item.message}
						/>
					))}
				</div>
			)}
			{isModalOpen && (
				<InviteModal
					isOpen={isModalOpen}
					setIsOpen={setIsModalOpen}
					id={currentEvent?._id}
				/>
			)}
		</div>
	);
}
export default EventOverview;
