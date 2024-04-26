import EventCard from '../components/dashboard/common/EventCard';

const items = [
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
		eventID: 1
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
		eventID: 2
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
		eventID: 3
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
		eventID: 4
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
		eventID: 5
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
		eventID: 6
	},
   {
		title: 'Burial Event',
		attending: 20,
		missing: 10,
		eventID: 7
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
		eventID: 8
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
		eventID: 9
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
		eventID: 10
	},
];

function EventsPage() {
   console.log(items)
	return (
		<div className="w-full">
			<h1 className="text-3xl font-bold font-montserrat">Events</h1>
			<div className="events__container" >
				{items.map((item, index) => (
					<EventCard
						title={item.title}
						key={index}
						attending={item.attending}
						missing={item.missing}
                  eventID={item.eventID}
					/>
				))}
			</div>
		</div>
	);
}
export default EventsPage;
