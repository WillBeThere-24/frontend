import { useNavigate } from 'react-router-dom';
import useEvents from '../../../utils/store/useEvents';
import useStore from '../../../utils/store/useStore';
import SidebarItem from './SidebarItem';
import showToast from '../../../utils/showToast';

const SideBar = () => {
	const sideBarState = useStore((state) => state.sideBarState);
	const userEvents = useEvents((state) => state.events);
	const setCurrentEvent = useEvents((state) => state.setCurrentEvent);
	const setSideBar = useStore((state) => state.setSideBar);
	const navigate = useNavigate();
	const setCurrentUser = useStore((state) => state.setUser);
	const setUserEvents = useEvents((state) => state.setEvents);
	const currentUser = useStore(state =>state.user)

	const handleNavLinkClick = () => {
		setSideBar(false);
	};

	const handleEventClick = (e, event) => {
		e.preventDefault();
		setCurrentEvent(event);
		setSideBar(false);
		navigate(`/dashboard/events/${event._id}`);
	};

	const handleLogOut = (e) => {
		e.preventDefault();
		setCurrentUser(null);
		setCurrentEvent(null);
		setUserEvents(null);
		showToast.success('Signed Out');
		navigate('/login');
	};
	return (
		<aside
			className={` top-[10vh] z-50 md:z-0 left-0 pt-7 h-screen rounded-none fixed md:top-0   md:static  mb-6     md:rounded-md w-full ${
				sideBarState ? 'block' : 'hidden'
			} md:block  md:w-[28%] border border-wybt-primary bg-slate-50`}
		>
			{/* <p className="text-gray-400 text-sm mb-2 pl-6">User Details</p> */}
			<div className=" items-center  gap-3 md:hidden flex pl-6  mb-3 mt-4">
				<span className="">
					<img
						className="w-10 h-10 rounded-full"
						src="/images/no-profile.jpg"
						alt=""
					/>
				</span>
				<div className="">
					<p className="font-bold text-sm">{currentUser.name}</p>
					<span className="text-[.8rem] block text-gray-500 break-all">
						{currentUser.email}
					</span>
				</div>
			</div>
			<p className="text-gray-400 text-sm mb-2 pl-6">Dashboard</p>

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
				handleClick={handleLogOut}
			/>

			{useEvents.length > 0 && (
				<p className="text-gray-400 text-sm my-4 pl-6">Recents</p>
			)}
			{userEvents?.map(
				(event, index) =>
					index <= 2 && (
						<SidebarItem
							key={index}
							link={`/dashboard/events/${event._id}`}
							icon="/icons/event.svg"
							title={event.name}
							handleClick={(e) => handleEventClick(e, event)}
						/>
					)
			)}
		</aside>
	);
};

export default SideBar;
