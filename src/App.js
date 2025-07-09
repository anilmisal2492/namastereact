import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import styles from "./App.css";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import UserClass from "./components/UserClass";

const AppLayout = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restmenu/:restId",
        element: < RestaurantMenu/>,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
