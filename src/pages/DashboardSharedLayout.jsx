import { Outlet } from "react-router-dom";
import { DashNavBar, SideBar } from "../components/dashboard";
import { Footer } from "../components/common";

const DashboardSharedLayout = () => {

	return (
		<>
			<DashNavBar />
			<div className="dashboard flex gap-12 px-6 md:px-12   pt-7">
				<SideBar />
				<Outlet />
			</div>
			<Footer />
		</>
	);
};
export default DashboardSharedLayout;
