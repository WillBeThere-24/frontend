import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	HomeSharedLayout,
	Home,
	AccountSetup,
	FormBuilder,
	DashboardOverview,
	DashboardSharedLayout,
	EventsPage,
} from './pages';
import { Authentication } from './components/common';
import { Toaster } from 'react-hot-toast';
import { Fragment } from 'react';
import EventOverview from './pages/EventOverview';
import RsvpSection from './pages/RsvpSection';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeSharedLayout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/register', element: <AccountSetup /> },
		],
	},
	{
		path: '/dashboard',
		element: <Authentication />,
		children: [
			{
				path: '/dashboard',
				element: <DashboardSharedLayout />,
				children: [
					{
						path: '/dashboard/overview',
						element: <DashboardOverview />,
					},
					{
						path: '/dashboard/events',
						element: <EventsPage />,
					},
					{
						path: '/dashboard/events/:eventID',
						element: <EventOverview />,
					},
					{
						path: '/dashboard/new-event',
						element: <FormBuilder />,
					},
					{
						path: '/dashboard/rsvp',
						element: <RsvpSection />,
					},
				],
			},
		],
	},
]);

const App = () => {
	return (
		<Fragment>
			<Toaster />
			<RouterProvider router={router} />
		</Fragment>
	);
};

export default App;
