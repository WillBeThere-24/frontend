import useStore from '../../../utils/store/useStore';
import SidebarItem from './SidebarItem';

const SideBar = () => {
	const sideBarState = useStore((state) => state.sideBarState);
	return (
		<aside
			className={`fixed top-[10vh] z-50 md:z-0 left-0 pt-7 h-screen rounded-none   md:static  mb-6     md:rounded-md w-full ${
				sideBarState ? 'block' : 'hidden'
			} md:block  md:w-[28%] border border-wybt-primary bg-slate-50`}
		>
			<p className="text-gray-400 text-sm mb-4 pl-6">Dashboard</p>

			<SidebarItem
				link="/dashboard/overview"
				icon="/icons/overview.svg"
				title="Overview"
			/>
			<SidebarItem
				link="/dashboard/events"
				icon="/icons/form-builder.svg"
				title="Events"
			/>
			<SidebarItem
				link="/dashboard/rsvp"
				icon="/icons/rsvp.svg"
				title="RSVP"
			/>
			<SidebarItem
				link="/dashboard/new-event"
				icon="/icons/new-event.svg"
				title="Create Event"
			/>
			<SidebarItem
				link="/dashboard/invite-guest"
				icon="/icons/add-guest.svg"
				title="Add Guest"
			/>
			<SidebarItem
				link="/register"
				icon="/icons/logout.svg"
				title="Sign Out"
			/>

			<p className="text-gray-400 text-sm my-4 pl-6">Recents</p>

			<SidebarItem
				link="/dashboard/events/1"
				icon="/icons/event.svg"
				title="Birthday"
			/>
			<SidebarItem
				link="/dashboard/events/2"
				icon="/icons/event.svg"
				title="Marriage"
			/>
			<SidebarItem
				link="/dashboard/events/3"
				icon="/icons/event.svg"
				title="Burial"
			/>
		</aside>
	);
};

export default SideBar;
