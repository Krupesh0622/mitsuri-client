import React from "react";
import "./MediaLibrary.css";
import { Search, Upload } from "lucide-react";
function MediaLibrary() {
  return (
    <div className="MediaLibrary-container">
      <div class="search-section">
        <div class="search-bar-container">
          <div class="search-input-wrapper">
            <div class="search-icon">
              <Search size={20} />
            </div>
            <input
              type="text"
              class="search-input"
              placeholder="Small Mission statement will be here..."
            />
          </div>
          <button class="upload-button">
            <div class="upload-icon">
              <Upload size={20} />
            </div>
            Upload
          </button>
        </div>

        <p class="info-text">
          Keyword search is based on transcribed text. Library only includes
          videos from steps (questions).
        </p>
        <p class="empty-state">
          Your Organization still doesn't have any uploaded media.
        </p>
      </div>
    </div>
  );
}

export default MediaLibrary;
