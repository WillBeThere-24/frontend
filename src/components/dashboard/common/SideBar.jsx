import { useNavigate } from 'react-router-dom';
import useEvents from '../../../utils/store/useEvents';
import useStore from '../../../utils/store/useStore';
import SidebarItem from './SidebarItem';


const SideBar = () => {
	const sideBarState = useStore((state) => state.sideBarState);
	const userEvents = useEvents((state) => state.events);
	const setCurrentEvent = useEvents((state) => state.setCurrentEvent);
	const setSideBar = useStore(state=> state.setSideBar);
	const navigate = useNavigate();

	const handleNavLinkClick =()=> {
		setSideBar(false)
	}

	const handleEventClick =(e, event)=> {
		e.preventDefault();
		setCurrentEvent(event)
		setSideBar(false)
		navigate(`/dashboard/events/${event._id}`)
	}
	return (
		<aside
			className={` top-[10vh] z-50 md:z-0 left-0 pt-7 h-screen rounded-none fixed md:top-0   md:static  mb-6     md:rounded-md w-full ${
				sideBarState ? 'block' : 'hidden'
			} md:block  md:w-[28%] border border-wybt-primary bg-slate-50`}
		>
			<p className="text-gray-400 text-sm mb-4 pl-6">Dashboard</p>

			<SidebarItem
				link="/dashboard/overview"
				icon="/icons/overview.svg"
				title="Overview"
				handleClick={handleNavLinkClick}
				
			/>
			<SidebarItem
				link="/dashboard/events"
				icon="/icons/form-builder.svg"
				title="Events"
				handleClick={handleNavLinkClick}

			/>
			<SidebarItem
				link="/dashboard/rsvp"
				icon="/icons/rsvp.svg"
				title="RSVP"
				handleClick={handleNavLinkClick}

			/>
			<SidebarItem
				link="/dashboard/new-event"
				icon="/icons/new-event.svg"
				title="Create Event"
				handleClick={handleNavLinkClick}

			/>
			<SidebarItem
				link="/register"
				icon="/icons/logout.svg"
				title="Sign Out"
				handleClick={handleNavLinkClick}

			/>

			{useEvents?.length > 0 && <p className="text-gray-400 text-sm my-4 pl-6">Recents</p>}
			{userEvents?.map((event, index) => index >= userEvents.length - 3 && (
				<SidebarItem
					key={index}
					link={`/dashboard/events/${event._id}`}
					icon="/icons/event.svg"
					title={event.name}
					handleClick={(e)=>handleEventClick(e, event)}
				/>
			))}
		</aside>
	);
};

export default SideBar;
