import React from "react";
import { createRoot } from "react-dom/client";
import Normalize from "react-normalize";
import { HashRouter } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import RouteKasa from "./components/routeKasa";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Normalize />
      <Header />
      <RouteKasa />
      <Footer />
    </HashRouter>
  </React.StrictMode>,
);
