import React from "react";
import "./Interaction.css";
import Card from "../../../component/Card";

function Interaction() {
  return (
    <div className="Interaction-container">
      <Card
        title={"Default settings for all new QuickVid"}
        subtitle=" Set the default settings for all QuickVid created in this
          organization."
      >
        <div class="settings-grid">
          <div class="settings-row">
            <span class="settings-label">Branding</span>
            <select class="small-select">
              <option>QuickVid</option>
            </select>
          </div>

          <div class="settings-row">
            <span class="settings-label">Language</span>
            <select class="small-select">
              <option>English</option>
            </select>
          </div>

          <div class="settings-row">
            <span class="settings-label">Color</span>
            <div class="color-picker">
              <div class="color-box color-blue"></div>
              <div class="color-box color-green"></div>
              <div class="color-box color-white"></div>
            </div>
          </div>

          <div class="settings-row">
            <span class="settings-label">Radius</span>
            <span class="radius-value">6</span>
          </div>

          <div class="settings-row">
            <span class="settings-label">Font</span>
            <select class="small-select">
              <option>Manrope</option>
            </select>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Interaction;
