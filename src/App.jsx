import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeSharedLayout,
  Home,
  AccountSetup,
  FormBuilder,
  Profile,
  DashboardSharedLayout,
  Rsvp,
} from "./pages";
import { Authentication } from "./components/common";
// import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeSharedLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <AccountSetup /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Authentication />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardSharedLayout />,
        children: [
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/form-builder",
            element: <FormBuilder />,
          },
        ],
      },
    ],
  },
  {
    path: "/rsvp",
    element: <HomeSharedLayout />,
    children: [
      {
        path: "/rsvp",
        // path: "/rsvp/:rsvpId",
        element: <Rsvp />,
        // loader: async ({ params }) => {
        //   console.log(params);
        // const { data } = await axios("");
        // return { data };
        //   },
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
