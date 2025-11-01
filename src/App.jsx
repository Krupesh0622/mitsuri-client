import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import LayoutProvider from "./component/LayoutProvider/layout-provider";
import { setLayoutProvider } from "./store/globalSlice";
import { useState } from "react";
import UserRoute from "./router/userRoutes/UserRoute";

function App() {
  const [isLayoutChange, setIsLayoutChange] = useState(false);
  const layoutProvider = useSelector((state) => state.global.layoutProvider);

  const dispatch = useDispatch();
  const LayoutChange = () => {
    if (isLayoutChange) {
      dispatch(setLayoutProvider("ent-provider"));
      setIsLayoutChange(false);
    } else {
      dispatch(setLayoutProvider("user-provider"));
      setIsLayoutChange(true);
    }
  };
  return (
    <div className="app">
      <UserRoute />
    </div>
  );
}

export default App;
