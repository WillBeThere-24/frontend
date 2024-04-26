import { ArrowLeftIcon, ArrowRightIcon } from "../../common/svg";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
  return (
    <aside
      className={`sticky pt-7    md:static left-0 top-12 mb-6     rounded-md  w-[28%] border border-wybt-primary bg-slate-50`}
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
			<SidebarItem link="/register" icon="/icons/logout.svg" title="Sign Out" />

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
