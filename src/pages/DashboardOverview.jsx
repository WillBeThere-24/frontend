import { Link } from "react-router-dom";
import { addZero } from "../utils/addZero";
import useStore from "../utils/store/useStore";

const DashboardOverview = () => {
	const currentUser = useStore(state => state.user)
	return (
		<main className="w-full">
			<div>
				<h1 className="font-bold text-3xl font-montserrat">Hi, {currentUser.name}</h1>
				<p className="mt-3">
					Welcome to <span>Will Be There</span>, You have:
				</p>
			</div>

			<div className="block md:flex gap-12 justify-center mt-8 text-center text-wybt-primary flex-col sm:flex-row w-full items-centher">
				<div className="text-2xl font-bold border border-wybt-primary py-12  md:px-20 px-12  rounded-md w-full md:w-full bg-white">
					<h3 className="">{addZero(10)}</h3>
					<p className="">RSVP</p>
				</div>
				<div className="w-full mt-12 md:mt-0 md:w-full text-2xl font-bold border-wybt-primary border py-12 px-20 rounded-md">
					<h3 className="">{addZero(3)}</h3>
					<p>Events</p>
				</div>
			</div>
			<Link to="/dashboard/new-event" className="bg-wybt-primary text-white md:px-10 py-4 my-20  rounded-md mt-10 block  font-bold md:w-fit w-full text-center">
				Create New Event
			</Link>
		</main>
	);
};

export default DashboardOverview;
