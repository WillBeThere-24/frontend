import EventCard from '../components/dashboard/common/EventCard';


function RsvpSection() {
	return (
		<div className="w-full">
			<h1 className="text-3xl font-bold font-montserrat  text-wybt-primary">
				RSVP
			</h1>
			<p className="text-gray-700 mt-3 text-sm">
				Discover and manage all the exciting events you&lsquo;ve chosen to
				attend by RSVP&lsquo;ing, right here
			</p>
			<div className="w-[20rem] mx-auto mt-[3rem]">
				<img
					className="object-cover w-full"
					src="/icons/empty-rsvp.svg"
					alt="event"
				/>
				<p className="text-sm text-center">
					You haven&lsquo;t rsvp&lsquo;d to any event yet.
				</p>
			</div>
			<div className="events__container">
				{/* {items.map((item, index) => (
					<EventCard
						title={item.title}
						key={index}
						attending={item.attending}
						missing={item.missing}
                  eventID={item.eventID}
					/>
				))} */}
			</div>
		</div>
	);
}
export default RsvpSection;
