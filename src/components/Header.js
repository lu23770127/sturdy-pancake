import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = React.useState(false);

  const handleOnClick = () => {
    setActiveDropdown(!activeDropdown);
  };
  const location = [
    "arabia",
    "australia",
    "brasil",
    "britain",
    "china",
    "czechoslovakia",
  ];
  return (
    <nav className="header">
      <div className="top">
        <label className="logo">VOGUE</label>
        <label className="menu">
          <div className="menu-item">
            <div className="dropdown">
              <label onClick={() => handleOnClick()} className="dropdown-label">
                <span>Taiwan</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  size="lg"
                  className="icon"
                />
              </label>
              <div
                className={
                  activeDropdown === true
                    ? "dropdown-content show"
                    : "dropdown-content"
                }
              >
                <ul>
                  {location.map(function (country) {
                    return (
                      <li>
                        <a href="/">{country}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="vl"></div>
          <div className="menu-item">
            <a href="/">membership</a>
          </div>
          <div className="vl"></div>
          <div className="menu-item">
            <a href="/">
              <FontAwesomeIcon className="icon-menu" icon={faBars} size="lg" />
            </a>
          </div>
        </label>
      </div>
      <div className="sub-menu">
        <a href="/">FASHION</a>
        <a href="/">BEAUTY</a>
        <a href="/">ENTERTAINMENT</a>
        <a href="/">LIFESTYLE</a>
        <a href="/">LUXURY</a>
        <a href="/">VIDEO</a>
        <a href="/">VOGUE有意識</a>
      </div>
      <div class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
