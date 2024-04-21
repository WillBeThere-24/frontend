import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, AccountSetup, HomeSharedLayout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeSharedLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <AccountSetup /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
