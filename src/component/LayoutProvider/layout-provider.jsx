import { useSelector } from "react-redux";
import "./layout-provider.css";
import Sidebar from "./Sidebar";
function LayoutProvider({ children }) {
  // const { layoutProvider } = useSelector((state) => state.global);
  const { layoutProvider } = useSelector((state) => state.global);

  return (
    <div className="layout-provider-component">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="right-bar">{children}</div>
    </div>
  );
}

export default LayoutProvider;
