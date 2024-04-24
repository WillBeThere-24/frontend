import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	HomeSharedLayout,
	Home,
	AccountSetup,
	FormBuilder,
	Profile,
	DashboardSharedLayout,
} from './pages';
import { SidebarContainer } from './components/dashboard';
import { Authentication } from './components/common';
import { Toaster } from 'react-hot-toast';
import { Fragment } from 'react';

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
						path: '/dashboard/profile',
						element: <Profile />,
					},
					{
						path: '/dashboard/form-builder',
						element: <FormBuilder />,
					},
				],
			},
		],
	},
]);

const App = () => {
	return (
		<Fragment>
			<Toaster
			/>
			<RouterProvider router={router}>
				<SidebarContainer />
			</RouterProvider>
		</Fragment>
	);
};

export default App;
