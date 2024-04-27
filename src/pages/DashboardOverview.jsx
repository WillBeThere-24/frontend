import { Link } from "react-router-dom";
import { addZero } from "../utils/addZero";
import useStore from "../utils/store/useStore";

const DashboardOverview = () => {
	const currentUser = useStore(state => state.user)
	return (
		<main className="w-full">
			<div>
				<h1 className="font-bold text-3xl font-montserrat">Hi, {currentUser.name}</h1>
				<p>
					Welcome to <span>Will Be There</span>, You have:
				</p>
			</div>

			<div className="flex gap-12 justify-center mt-8 text-center text-wybt-primary flex-col sm:flex-row w-full items-centher">
				<div className="text-2xl font-bold border border-wybt-primary py-12  md:px-20 px-12  rounded-md w-1/2 md:w-full">
					<h3 className="">{addZero(10)}</h3>
					<p className="">RSVP</p>
				</div>
				<div className="w-1/2 md:w-full text-2xl font-bold border-wybt-primary border py-12 px-20 rounded-md">
					<h3 className="">{addZero(3)}</h3>
					<p>Events</p>
				</div>
			</div>
			<Link to="/dashboard/new-event" className="bg-wybt-primary text-white py-4 px-10 my-20  rounded-md mt-10 block w-fit font-bold">
				Create New Event
			</Link>
		</main>
	);
};

export default DashboardOverview;
