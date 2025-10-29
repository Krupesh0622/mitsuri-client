import { Route, Routes } from "react-router-dom";
import EntRoute from "./entRoute";

function UserRoute() {
  return (
    <Routes>
      <Route path="/ent" element={<EntRoute />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default UserRoute;
