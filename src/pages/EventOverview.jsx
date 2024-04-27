function InvitedGuest({isAttending}) {
   
	return (
		<div className="table__body border items-start border-wybt-accent rounded-md py-4 px-2 [&>p]:text-sm mt-3">
			<p>Gideon</p>
			<p className="break-all">aniokechukwudasfeadfasdfi@gmail.com</p>
			<p>I am so happy to here that you have finally married chucks.</p>
			<p className={`${isAttending? "bg-green-500" : "bg-red-500"} w-[80%] py-2 text-center text-white font-bold rounded-lg`}>
				Not Attending
			</p>
		</div>
	);
}

function EventOverview() {
	const invitedGuests = [1, 2, 3, 4, 5, 6, 6, 7, 7];
	
	return (
		<div className="w-full">
			<h1 className="text-3xl font-bold font-montserrat">Marriage Events</h1>

			<div className="flex gap-12 justify-center mt-8 text-center text-wybt-primary flex-col sm:flex-row w-full items-centher">
				<div className="text-2xl font-bold border border-wybt-primary py-12  md:px-20 px-12  rounded-md w-1/2 md:w-full">
					<h3 className="">10</h3>
					<p className="">Attending</p>
				</div>
				<div className="w-1/2 md:w-full text-2xl font-bold border-wybt-primary border py-12 px-20 rounded-md">
					<h3 className="">2</h3>
					<p>Not Attending</p>
				</div>
			</div>
			<button className="bg-wybt-primary text-white py-4 px-20 my-20  rounded-md">
				View Guests
			</button>
         <table className="w-ful">
            <div className="table__head border border-wybt-accent rounded-md py-4 px-2 [&>p]:text-sm [&>p]:font-bold text-wybt-primary">
               <p>Name</p>
               <p>Email</p>
               <p>Message</p>
               <p>Status</p>
            </div>

            {invitedGuests.map((item, index) => (
               <InvitedGuest key={index} isAttending={index%2} />
            ))}

         </table>
		</div>
	);
}
export default EventOverview;
