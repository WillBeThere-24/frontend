import { useState } from 'react';
import formatDateTime from '../../../utils/formatDataTime';
import Toogle from '../../toogle/Toogle';

function RsvpCard({ event }) {
	const [isAttending, setIsAttending] = useState(true);

	const handleChange = () => {
		setIsAttending(!isAttending);
	};

	return (
		<div className=" h-[15rem] min-w-[18rem] relative ">
			<Toogle
				isAttending={isAttending}
				id={event._id}
				handleChange={handleChange}
			/>
			<img
				className="block h-full w-full object-cover rounded-xl cursor-pointer"
				src={event.image || '/images/default-event-image.jpg'}
				alt=""
			/>
			<div className="absolute w-[90%] py-3 px-5 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 shadow-xl bg-white rounded-md">
				<h2 className="text-center font-bold text-md">{event.name}</h2>

				<div className="flex justify-center gap-1 items-center mt-1">
					<img className="w-3 block" src="/icons/location.svg" alt="" />
					<p className=" text-center text-sm break-all text-gray-500">
						{event.location}
					</p>
				</div>
				<div className="">
					<p className="mt-1 text-center text-gray-500 text-sm">
						{formatDateTime(event.start)}
					</p>
				</div>
			</div>
		</div>
	);
}
export default RsvpCard;
