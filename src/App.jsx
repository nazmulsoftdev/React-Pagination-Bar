import React from "react";
import { Routes, Route } from "react-router-dom";
import RoutesElement from "./components/routes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<RoutesElement />} />
      </Routes>
    </>
  );
}

export default App;
