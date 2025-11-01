import React from "react";
import "./Organization.css";
import Card from "../../../component/Card";
import { Languages, Plus, Tag } from "lucide-react";
function Organization() {
  return (
    <div className="Organization-container">
      <div class="container">
        <Card
          title="Your organization details"
          subtitle="You haven't set a name for you organization yet."
          btnText="Edit"
          btnIcon={<Plus size={18} strokeWidth={2.5} />}
        >
          <div class="link">Set a name for your organization</div>
        </Card>
        <Card title="Reply-to email">
          <p class="card-description">
            By default, when you or members of your team reply on VideoAsk, the
            reply-to email address will use the individual team member's account
            email.
          </p>
          <p class="section-subtitle">
            Set a default reply-to email for all members:
          </p>
          <select>
            <option>Select</option>
          </select>
          <p class="card-description">To use a default email...</p>
          <div class="link">+ Add a new team member</div>
        </Card>
        <Card title={"Default settings for all new QuickVid"}>
          <p class="card-description">
            Set the default settings for all QuickVid created in this
            organization.
          </p>
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
        {/* <Card>
          <div class="brand-header">
            <div class="brand-content">
              <h2 class="card-title">Brand</h2>
              <p class="card-description">
                Manage all the custom brands created in this organization.
              </p>
            </div>
            <button class="add-button">+</button>
          </div>
        </Card>

        <Card>
          <div class="brand-header">
            <div class="brand-content">
              <h2 class="card-title">Custom languages</h2>
              <p class="card-description">
                Manage all the interface text customizations created in this
                organization.
              </p>
            </div>
            <button class="add-button">+</button>
          </div>
        </Card> */}

        <div className="fancy-card-container">
          <div className="fancy-card dark-fancy">
            <div className="btn-group">
              <button className="tag-btn">
                <Tag />
              </button>
              <button className="btn">
                <Plus size={18} />
              </button>
            </div>
            <div className="text-group">
              <div className="title-text">Brand</div>
              <div className="det-text">
                Manage all the custom brands created in this organization.
              </div>
            </div>
          </div>

          <div className="fancy-card primary-fancy">
            <div className="btn-group">
              <button className="tag-btn">
                <Languages />
              </button>
              <button className="btn">
                <Plus size={18} />
              </button>
            </div>
            <div className="text-group">
              <div className="title-text">Custom languages</div>
              <div className="det-text">
                Manage all the interface text customizations created in this
                organization.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
