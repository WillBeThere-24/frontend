import { Fragment } from 'react';
import formatDateTime from '../../../utils/formatDataTime';
import handleCopy from '../../../utils/handleCopy';
import useRsvp from '../../../utils/store/useRvsp';
import { useNavigate } from 'react-router-dom';
import showToast from '../../../utils/showToast';

function RsvpCard({ rsvp }) {
	const setCurrentRsvp = useRsvp((state) => state.setCurrentRsvp);
	const navigate = useNavigate();
	const handleCurrentRsvp = () => {
		if(rsvp.attending === null) {
			showToast.error("Your must respond to view this event")
			return
		}
		setCurrentRsvp(rsvp);
		navigate(`/dashboard/rsvp/${rsvp._id}`);
	};

	return (
		<div
			onClick={handleCurrentRsvp}
			className=" h-[15rem] min-w-[18rem] relative "
		>
				{rsvp.event.isPrivate ===false && rsvp.attending && <button
				title="copy event link"
				className="flex justify-center items-center gap-3 bg-white absolute top-4 right-3 rounded-lg w-10 h-10 p-2 shadow-lg active:scale-[.9] z-10"
				onClick={(e) => handleCopy(e, `https://willbethere.netlify.app/rsvp/${rsvp._id}`)}
			>
				<img className="w-full h-full block" src="/icons/copy.svg" alt="" />
				{/* <p className="text-sm">copy link</p> */}
			</button>}
			{rsvp?.event?.isPrivate && rsvp?.attending && (
				<div className="flex justify-center items-center gap-1 top-4 right-3 rounded-lg h-10 px-3 py-2 shadow-lg absolute z-10 bg-gray-100">
					<img
						className="block invert-[.5]  w-4"
						src="/icons/lock.svg"
						alt=""
					/>
					<p className="text-sm">private</p>
				</div>
			)}
			{rsvp.attending === null && (
				<img className='absolute top-1/2 invert w-16  brightness-50 left-1/2 z-10 -translate-y-1/2 -translate-x-1/2  ' src='/icons/lock.svg' />
			)}
			<img
				className={`block h-full w-full object-cover rounded-xl cursor-pointer ${rsvp.attending === null && "brightness-[.3]"}`}
				src={rsvp.event.image || '/images/default-event-image.jpg'}
				alt=""
			/>
			<div className="absolute w-[90%] py-3 px-5 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 shadow-xl bg-white rounded-md">
				<h2 className="text-center font-bold text-md">{rsvp.event.name}</h2>

				{rsvp.attending && (
					<Fragment>
						<div className="flex justify-center gap-1 items-center mt-1">
							<img
								className="w-3 block"
								src="/icons/location.svg"
								alt=""
							/>
							<p className=" text-center text-sm break-all text-gray-500">
								{rsvp.event.location}
							</p>
						</div>
						<div className="">
							<p className="mt-1 text-center text-gray-500 text-sm">
								{formatDateTime(rsvp.event.start)}
							</p>
						</div>
					</Fragment>
				)}
				{
					rsvp.attending=== null && <p className=" text-center text-[.8rem] break-all text-gray-400">
					You have not responded to your invite
				</p>
				}
				{
					rsvp.attending === false && <p className="mt-2 flex justify-center items-center">
					<img className='w-5 block invert-[.7]' src="/icons/lock.svg" alt="" />
				</p>
				}
			</div>
		</div>
	);
}
export default RsvpCard;
