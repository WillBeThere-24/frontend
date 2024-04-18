import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AccountSetup from "./pages/AccountSetup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <AccountSetup />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
