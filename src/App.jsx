import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AccountSetup from "./pages/AccountSetup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import FormBuilder from "./pages/FormBuilder";
import SidebarContainer from "./components/dashboard/SidebarContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <AccountSetup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/profile",
    element: <Profile />,
  },
  {
    path: "/dashboard/form-builder",
    element: <FormBuilder />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <SidebarContainer />
    </RouterProvider>
  );
};

export default App;
