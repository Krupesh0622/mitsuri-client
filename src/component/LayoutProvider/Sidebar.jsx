import React from "react";
import icons from "../../utils.js/static";

function Sidebar() {
  return (
    <div className="sidebar-component">
      <div className="logo-container">
        {/* <div ></div> */}
        <div className="logo-img">
          <img className="img" src={icons.logo} alt="" />
        </div>
        <div className="logo-text">QUICKVID</div>
      </div>

      <div className=""></div>
    </div>
  );
}

export default Sidebar;
