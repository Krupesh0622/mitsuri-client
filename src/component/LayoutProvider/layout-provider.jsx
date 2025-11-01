import { useSelector } from "react-redux";
import "./layout-provider.css";
import EnterpriseSidebar from "./EnterpriseSidebar";
function LayoutProvider({ layout, breadcrumb, children, path }) {
  return (
    <div className="layout-provider-component">
      <div className="sidebar">
        <EnterpriseSidebar path={path} />
      </div>
      <div className="right-bar">
        <div className="header-container">
          <h1 className="header-title">{breadcrumb.title}</h1>
        </div>
        <div className="app-container quid-scroll">{children}</div>
      </div>
    </div>
  );
}

export default LayoutProvider;
