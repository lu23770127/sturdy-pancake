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
                <FontAwesomeIcon icon={faAngleDown} size="lg" className="icon" />
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
          <div className="menu-item">
            <a href="/">membership</a>
          </div>
          <div className="menu-item">
            <a href="/">
              <FontAwesomeIcon icon={faBars} size="lg" />
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
    </nav>
  );
}