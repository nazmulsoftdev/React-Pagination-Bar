import React from "react";
import { useRoutes } from "react-router-dom";
import MainComponent from "../Main";
import CardView from "../ViewCard";

function RoutesElement() {
  const ElementRoutes = useRoutes([
    {
      path: "/",
      element: <MainComponent />,
    },
    {
      path: "view",
      element: <CardView />,
    },
  ]);
  return ElementRoutes;
}

export default RoutesElement;
