import React from "react";
import { Route, Routes } from "react-router-dom";

function EntRoute() {
  return (
    <Routes>
      <Route path="/home" element={<div>entRoute</div>} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default EntRoute;
