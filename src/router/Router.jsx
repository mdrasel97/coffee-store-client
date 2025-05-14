import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import AddNewCoffee from "../pages/AddNewCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            path: '/',
            Component: Home
        },
        {
            path: 'addNewCoffee',
            Component: AddNewCoffee
        },
        {
            path: 'updateCoffee',
            Component: UpdateCoffee
        }
    ]
  },
]);