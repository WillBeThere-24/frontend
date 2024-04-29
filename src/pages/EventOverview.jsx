import {  useEffect, useState } from 'react';
import { addZero } from '../utils/addZero';
import useEvents from '../utils/store/useEvents';
import InviteModal from '../components/invite-guest/InvitModal';
import { useFetch } from '../utils/hooks';
import showToast from '../utils/showToast';
import formatDateTime from '../utils/formatDataTime';
import ClosedEye from '/public/icons/form/Closed-Eye.svg';
import OpenedEye from '/public/icons/form/Open-Eye.svg';
import Loader from '../components/circle-loader/Loader';

const hiddenCount = '***';
const myGuest = [
	{
		firstName: 'Sebastian',
		lastName: 'Anioke',
		email: 'aniokeChukwudi',
	},
	{
		firstName: 'Sebastian',
		lastName: 'Anioke',
		email: 'aniokeChukwudi',
	},
	{
		firstName: 'Sebastian',
		lastName: 'Anioke',
		email: 'aniokeChukwudi',
	},
	{
		firstName: 'Sebastian',
		lastName: 'Anioke',
		email: 'aniokeChukwudi',
	},
];

function InvitedGuest({ isAttending }) {
	const [showPlusOnes, setShowPlusOnes] = useState(false);
	const handleShowPlusOnes = () => {
		setShowPlusOnes(!showPlusOnes);
	};
	return (
		<div className="border-wybt-accent border  rounded-md mt-1">
			<div className="table__body items-start  py-2 md:py-4 px-4 [&>p]:text-sm ">
				<p>Gideon</p>
				<p className="break-all hidden md:block">
					aniokechukwudasfeadfasdfi@gmail.com
				</p>
				<p className="hidden md:block">
					I am so happy to here that you have finally married chucks.
				</p>
				<p
					className={`${
						isAttending ? 'bg-green-500' : 'bg-red-500'
					} w-full md:w-[80%] py-2 text-center text-white font-bold rounded-lg`}
				>
					{isAttending ? 'Attending' : 'Not Attending'}
				</p>
				<button
					onClick={handleShowPlusOnes}
					className="flex items-center justify-center opacity-70 p-1"
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
					{myGuest.map((guest, index) => (
						<div
							key={index}
							className="table__body plus__one [&>p]:text-sm my-2"
						>
							<p>
								{guest.firstName} {guest.lastName}
							</p>
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

	const { fetchData, loading } = useFetch();

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

	useEffect(() => {
		fetchEventGuest();
	}, []);
	return (
		<div className="w-full">
			<div className="relative h-[27rem] p-5 flex flex-col rounded-lg bg-[#76305c7d] items-center justify-center">
				<img
					className="absolute top-0 left-0 rounded-lg brightness-[30%] bg w-full h-full object-cover object-center -z-10"
					src={currentEvent.image}
					alt=""
				/>
				<h1 className="text-5xl font-bold font-montserrat text-white text-center">
					{currentEvent.name}
				</h1>
				<p className=" mt-3 text-sm text-white font-montserrat text-center">
					{currentEvent.description}
				</p>
				<div className="flex justify-center items-center gap-2 mt-14">
					<img
						className="w-6 block invert brightness-200"
						src="/icons/time.svg"
						alt=""
					/>
					<p className="  text-sm text-white font-bold font-montserrat text-center">
						{formatDateTime(currentEvent.start)}
					</p>
				</div>
				<div className="flex justify-center items-center gap-2 mt-3">
					<img
						className="w-5 block  brightness-200"
						src="/icons/location.svg"
						alt=""
					/>
					<p className="capitalize  text-sm text-white font-bold font-montserrat text-center">
						{currentEvent.location}
					</p>
				</div>
			</div>
			<div className="flex justify-between items-center mt-8">
				<h1 className="text-2xl font-bold font-montserrat">Guest</h1>
				<button
					onClick={handleShowGuestCount}
					className="flex justify-center items-center gap-2 bg-gray-200 shadowlg px-4 rounded-xl border border-gray-700"
				>
					<img
						src={showGuestCount ? ClosedEye : OpenedEye}
						alt=""
						className="p-0 m-0 w-6 "
					/>

					<p className="text-sm ">
						{showGuestCount ? 'Hide Guest Count' : 'Show Guest Count'}
					</p>
				</button>
			</div>
			<div className="block md:flex gap-4 justify-center mt-8 text-center text-wybt-primary flex-col sm:flex-row w-full items-center">
				<div className="text-xl font-bold border border-wybt-primary h-[12rem] flex flex-col justify-center  px-6   rounded-md w-full md:w-full bg-white">
					<h3 className="">
						{showGuestCount
							? addZero(currentEvent.attendingGuestCount)
							: hiddenCount}
					</h3>
					<p className="">Attending</p>
				</div>
				<div className="w-full mt-12 md:mt-0 md:w-full text-xl font-bold border-wybt-primary border h-[12rem] flex flex-col justify-center px-6  rounded-md">
					<h3 className="">
						{showGuestCount
							? addZero(currentEvent.notAttendingGuestCount)
							: hiddenCount}
					</h3>
					<p>Not Attending</p>
				</div>
				<div className="w-full mt-12 md:mt-0 md:w-full text-xl font-bold border-wybt-primary border h-[12rem] flex flex-col justify-center px-6  rounded-md">
					<h3 className="">
						{showGuestCount
							? addZero(currentEvent.notAttendingGuestCount)
							: hiddenCount}
					</h3>
					<p>Not Responded</p>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<button
					onClick={handleToggleList}
					className="bg-wybt-primary text-white py-4 w-[11rem]  my-20  rounded-md whitespace-nowrap hover:bg-wybt-secondary"
				>
					{showGuests ? 'Hide Guest List' : 'View Guests List'}
				</button>
				<button
					className="bg-wybt-primary text-white py-4 w-[11rem]  my-20  rounded-md whitespace-nowrap hover:bg-wybt-secondary"
					onClick={() => setIsModalOpen(true)}
				>
					Invite Guests
				</button>
			</div>
			{showGuests && (
				<table className="w-full mb-10">
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
							<p className='text-center text-sm'>No attending Guest.</p>
						</div>
					)}
					{loading && (
						<div className="flex justify-center items-center w-[5rem] mx-auto mt-[5rem]">
							<Loader />
						</div>
					)}

					{eventGuests.map((item, index) => (
						<InvitedGuest key={index} isAttending={index % 2} />
					))}
				</table>
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
