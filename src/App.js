import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import styles from "./App.css";
import Footer from "./components/Footer";
import Body from "./components/Body";

const AppLayout = () => (
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
