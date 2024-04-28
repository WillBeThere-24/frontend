import { useState } from "react";
import { addZero } from "../utils/addZero";
import useEvents from "../utils/store/useEvents";


function InvitedGuest({isAttending}) {
   
	return (
		<div className="table__body border items-start border-wybt-accent rounded-md py-2 md:py-4 px-2 [&>p]:text-sm mt-3">
			<p>Gideon</p>
			<p className="break-all hidden md:block">aniokechukwudasfeadfasdfi@gmail.com</p>
			<p className="hidden md:block">I am so happy to here that you have finally married chucks.</p>
			<p className={`${isAttending? "bg-green-500" : "bg-red-500"} w-full md:w-[80%] py-2 text-center text-white font-bold rounded-lg`}>
				Not Attending
			</p>
		</div>
	);
}

function EventOverview() {
	const invitedGuests = [1, 2, 3, 4, 5, 6, 6, 7, 7];
	const [showGuests, setShowGuests] =useState(false);
	const currentEvent = useEvents(state => state.currentEvent);

	const handleToggleList =()=> {
		setShowGuests(!showGuests)
	}
	
	return (
		<div className="w-full">
			<h1 className="text-3xl font-bold font-montserrat">{currentEvent.name}</h1>
			<p className='text-gray-700 mt-3 text-sm'>{currentEvent.description}</p>
			<div className="block md:flex gap-12 justify-center mt-8 text-center text-wybt-primary flex-col sm:flex-row w-full items-centher">
				<div className="text-2xl font-bold border border-wybt-primary py-12  md:px-20 px-12  rounded-md w-full md:w-full bg-white">
					<h3 className="">{addZero(10)}</h3>
					<p className="">Attending</p>
				</div>
				<div className="w-full mt-12 md:mt-0 md:w-full text-2xl font-bold border-wybt-primary border py-12 md:px-20  rounded-md">
					<h3 className="">{addZero(3)}</h3>
					<p>Not Attending</p>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<button onClick={handleToggleList} className="bg-wybt-primary text-white py-4 w-full md:w-fit md:px-20 my-20  rounded-md">
					{showGuests? "Hide Guest List": "View Guests List"}
				</button>
				<button  className="bg-wybt-primary text-white py-4 w-full md:w-fit md:px-20 my-20  rounded-md">
					Invite Guests
				</button>

			</div>
         {showGuests && <div className="w-full mb-10">
            <div className="table__body border items-center border-wybt-accent rounded-md py-4 px-2 [&>p]:text-sm [&>p]:font-bold text-wybt-primary">
               <p>Name</p>
               <p className="hidden md:block">Email</p>
               <p className="hidden md:block">Message</p>
               <p>Status</p>
            </div>

            {invitedGuests.map((item, index) => (
               <InvitedGuest key={index} isAttending={index%2} />
            ))}

         </div>}
		</div>
	);
}
export default EventOverview;
