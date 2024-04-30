import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeSharedLayout,
  Home,
  AccountSetup,
  FormBuilder,
  DashboardOverview,
  DashboardSharedLayout,
  EventsPage,
  Rsvp,
  Error,
} from "./pages";
import { Authentication } from "./components/common";
import { Toaster } from "react-hot-toast";
import { Fragment } from "react";
import EventOverview from "./pages/EventOverview";
import RsvpSection from "./pages/RsvpSection";
import InviteGuest from "./pages/InviteGuest";
import axios from "axios";
import { Login, SignUp } from "./components";
import RsvpOverview from "./pages/RsvpOverview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeSharedLayout />,
    children: [{ path: "/", element: <Home /> }],
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
            path: "/dashboard/overview",
            element: <DashboardOverview />,
          },
          {
            path: "/dashboard/events",
            element: <EventsPage />,
          },
          {
            path: "/dashboard/events/:eventID",
            element: <EventOverview />,
          },
          {
            path: "/dashboard/new-event",
            element: <FormBuilder />,
          },
          {
            path: "/dashboard/rsvp",
            element: <RsvpSection />,
          },
          {
            path: "/dashboard/rsvp/:id",
            element: <RsvpOverview />,
          },
          {
            path: "/dashboard/invite-guest",
            element: <InviteGuest />,
          },
        ],
      },
    ],
  },
  {
    element: <AccountSetup />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/rsvp/:id",
    element: <Rsvp />,
    loader: async ({ params }) => {
      const searchParams = new URLSearchParams(window.location.search);
      const guestId = searchParams.get("guest");

      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/events/rsvp/${params.id}${
          guestId ? `?guest=${guestId}` : ""
        }`
      );
      return data;
    },
  },
  { path: "*", element: <Error /> },
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
