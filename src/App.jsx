import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import LayoutProvider from "./component/LayoutProvider/layout-provider";
import { setLayoutProvider } from "./store/globalSlice";
import { useState } from "react";

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
      <LayoutProvider>
        <div>
          <div>{layoutProvider}</div>
          <div>
            <button onClick={LayoutChange}>change layout</button>
          </div>
        </div>
      </LayoutProvider>
    </div>
  );
}

export default App;
