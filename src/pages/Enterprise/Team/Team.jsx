import React from "react";
import "./Team.css";
import Card from "../../../component/Card";

function Team() {
  return (
    <div className="Team-container">
      <Card>
        <div class="card-header">
          <div class="card-title-section">
            <h2 class="card-title">
              Team Seats
              <span class="seat-count">(1 of 3 seats used)</span>
            </h2>
            <div class="seats-info">
              <span class="seats-text">Need more seats?</span>
              <button class="upgrade-button">Upgrade</button>
            </div>
          </div>
          <button class="add-member-button">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div class="team-member">
          <div class="member-info">
            <div class="avatar">AP</div>
            <div class="member-details">
              <div class="member-name">Ayuna Patel</div>
              <div class="member-email">ayuna@gmail.com</div>
            </div>
          </div>
          <div class="member-role">Organization owner</div>
        </div>
      </Card>
    </div>
  );
}

export default Team;
