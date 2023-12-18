import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/Error";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout";
import Users from "./pages/Dashboard/Users";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
function App() {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    isAuthenticated && user?.token
      ? {
          path: "/dashboard",
          element: <Layout />,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
            {
              path: "users",
              element: <Users />,
            },
          ],
        }
      : { path: "*", element: <Navigate to="/" replace /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
