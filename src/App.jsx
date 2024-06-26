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
  RsvpError,
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
    errorElement: (
      <RsvpError
        error='401'
        title='Attendance Already Confirmed'
        text='To modify your RSVP response, please register to the application.'
        path='/register'
        pathText='Register'
      />
    ),
    loader: async ({ params }) => {
      const searchParams = new URLSearchParams(window.location.search);
      const guestId = searchParams.get("guest");

      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/events/rsvp/${params.id}${
          guestId ? `?guest=${guestId}` : ""
        }`
      );
      if (res.status === 401) {
        throw new Error(res, { status: 401 }); //unauthorized
      }
      if (res.status === 400) {
        throw new Error(res, { status: 400 }); //not found
      }
      if (res.status === 500) {
        throw new Error(res, { status: 500 }); //server error
      }
      if (res.status === 405) {
        throw new Error(res, { status: 405 }); //start time elapsed
      }
      const { data } = res;
      return data;
    },
  },

  {
    path: "*",
    element: (
      <Error
        error='404'
        title='UH OH! You are lost.'
        text='The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the
        homepage.'
        path='/'
        pathText='Return Home'
      />
    ),
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
