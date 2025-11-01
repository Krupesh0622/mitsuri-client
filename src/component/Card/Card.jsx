import React from "react";
import "./Card.css";
function Card({ children, title, subtitle, btnText, btnIcon, ...props }) {
  return (
    <div {...props} className="card-container">
      <div className="card-header">
        <div className="header-text">
          {title && <h2 class="card-title">{title}</h2>}
          {subtitle && <p class="card-description">{subtitle}</p>}
        </div>
        {(btnText || btnIcon) && (
          <div className="header-btn">
            <button className="card-header-btn">
              {btnIcon && <span class="icon">{btnIcon}</span>}
              {btnText && <span class="text">{btnText}</span>}
            </button>
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Card;
