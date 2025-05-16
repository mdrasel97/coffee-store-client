import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import AddNewCoffee from "../pages/AddNewCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Error from "../components/Error";
import CoffeeDetails from "../pages/CoffeeDetails";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("http://localhost:3000/coffees"),
      },
      {
        path: "addNewCoffee",
        Component: AddNewCoffee,
      },
      {
        path: "coffee/:id",
        Component: CoffeeDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "signIn",
        Component: SignIn,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
