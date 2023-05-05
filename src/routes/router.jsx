import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../componment/Main/Main";
import ErrorPage from "../componment/Errorpage/Errorpage";
import Home from "../componment/Home/Home";
import Login from "../componment/Login/Login";
import Register from "../componment/Register/Register";
import PrivateRoute from "../componment/PrivateRoute/PrivateRoute";
import Recipes from "../componment/Recipes/Recipes";
import Blogs from "../componment/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "recipes/:id",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-recipe-chef-server-sahadathassain.vercel.app/recipes/${params.id}`),
      },
    ],
  },
]);

export default router;