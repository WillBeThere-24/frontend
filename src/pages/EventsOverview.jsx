import EventCard from '../components/dashboard/common/EventCard';

const items = [
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
	},
   {
		title: 'Burial Event',
		attending: 20,
		missing: 10,
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
	},
	{
		title: 'Burial Event',
		attending: 20,
		missing: 10,
	},
];

function EventsOverview() {
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
                  eventID={index + 1}
					/>
				))}
			</div>
		</div>
	);
}
export default EventsOverview;
