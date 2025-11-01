import React from "react";
import "./Notification.css";
import Card from "../../../component/Card";

function Notification() {
  return (
    <div className="Notification-container">
      <Card title="Response notifications">
        <div class="notification-item">
          <span class="notification-label">Deselect all videoasks</span>
          <label class="toggle-switch">
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
        </div>

        <div class="notification-item">
          <div class="notification-label-with-avatar">
            <span class="notification-avatar">🦁</span>
            <span class="notification-label">Others</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
        </div>

        <div class="notification-item">
          <div class="notification-label-with-avatar">
            <span class="notification-avatar">🦁</span>
            <span class="notification-label">Others</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
        </div>
      </Card>

      <Card>
        <div class="notification-item">
          <span class="notification-label">
            Reply notifications
            <span class="info-icon">?</span>
          </span>
          <label class="toggle-switch">
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
        </div>

        <div class="notification-item">
          <span class="notification-label">
            Anonymous notifications
            <span class="info-icon">?</span>
          </span>
          <label class="toggle-switch">
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
        </div>

        <div class="notification-item">
          <span class="notification-label">
            Set working hours
            <span class="info-icon">?</span>
          </span>
          <label class="toggle-switch">
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
        </div>

        <div class="notification-item">
          <span class="notification-label">
            Turn on vacation mode
            <span class="info-icon">?</span>
          </span>
          <label class="toggle-switch">
            <input type="checkbox" checked />
            <span class="slider"></span>
          </label>
        </div>
      </Card>
    </div>
  );
}

export default Notification;
