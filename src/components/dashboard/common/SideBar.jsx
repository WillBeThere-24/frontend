import { ArrowLeftIcon, ArrowRightIcon } from "../../common/svg";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
  return (
    <aside
      className={` pt-7  h-screen fixed md:static left-0 top-12     rounded-md  w-[28%] border border-wybt-primary bg-slate-50`}
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
        link="/dashboard/overview"
        icon="/icons/rsvp.svg"
        title="RSVP"
      />
      <SidebarItem
        link="/dashboard/overview"
        icon="/icons/new-event.svg"
        title="Create Event"
      />
      <SidebarItem
        link="/dashboard/overview"
        icon="/icons/logout.svg"
        title="Sign Out"
      />

      <p className="text-gray-400 text-sm my-4 pl-6">Recents</p>

      <SidebarItem
        link="/dashboard/overview"
        icon="/icons/event.svg"
        title="Birthday"
      />
      <SidebarItem
        link="/dashboard/overview"
        icon="/icons/event.svg"
        title="Marriage"
      />
      <SidebarItem
        link="/dashboard/overview"
        icon="/icons/event.svg"
        title="Burial"
      />
    </aside>
  );
};

export default SideBar;
