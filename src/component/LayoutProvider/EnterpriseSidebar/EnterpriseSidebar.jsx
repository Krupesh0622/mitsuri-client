import React, { useEffect, useState } from "react";
import icons from "../../../utils.js/static";
import "./EnterpriseSidebar.css";
import { BriefcaseBusiness, ChevronLeft, Key } from "lucide-react";
import { creteImgFilter } from "../../../utils.js/helper";
import { useLocation, useNavigate } from "react-router-dom";

function EnterpriseSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuOption = [
    {
      name: "Organization",
      value: "organization",
      iconName: "organization",
    },
    {
      name: "Interaction",
      value: "interaction",
      iconName: "interaction",
    },
    {
      name: "Plan & Billing",
      value: "plan_billing",
      iconName: "plan_billing",
    },
    {
      name: "Referrals",
      value: "referrals",
      iconName: "referrals",
    },
    {
      name: "Team",
      value: "team",
      iconName: "team",
    },
    {
      name: "Notification",
      value: "notification",
      iconName: "notification",
    },
    {
      name: "Media Library",
      value: "media_library",
      iconName: "media_library",
    },
    {
      name: "Developer Apps",
      value: "developer_apps",
      iconName: "developer_apps",
    },
    {
      name: "Webhooks",
      value: "webhooks",
      iconName: "webhooks",
    },
  ];
  return (
    <div className="sidebar-component">
      <div className="default-menu">
        <div className="logo-container">
          {/* <div ></div> */}
          <div className="logo-img">
            <img className="img" src={icons.logo} alt="" />
          </div>
          <div className="logo-text">QUICKVID</div>
        </div>

        <div className="ent-btn-container">
          <button className="ent-dropdown-btn">
            <span>My Enterprise</span>
            <span className="ent-btn-icon">▼</span>
          </button>
        </div>

        <div className="back-btn">
          <div className="icon">
            <ChevronLeft />
          </div>
          <span>Back</span>
        </div>
      </div>
      <ul class="menu">
        {menuOption.map((ele) => {
          const isActive = location.pathname === `/ent-setting/${ele.value}`;
          return (
            <li
              class={`menu-item ${isActive && "active"}`}
              onClick={() => navigate(`/ent-setting/${ele.value}`)}
            >
              <span class="menu-item-icon">
                <img
                  src={icons[ele.iconName]}
                  alt=""
                  className="img"
                  style={{
                    filter: isActive
                      ? "invert(100%) sepia(91%) saturate(38%) hue-rotate(321deg) brightness(110%) contrast(110%)"
                      : "invert(26%) sepia(88%) saturate(3877%) hue-rotate(239deg) brightness(91%) contrast(96%)",
                  }}
                />
              </span>
              <span>{ele.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EnterpriseSidebar;
