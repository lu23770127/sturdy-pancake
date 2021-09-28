import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleCountryClick = () => {
    setActiveDropdown(!activeDropdown);
  };

  const handleModalClick = (status) => {
    setModalOpen(status);
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
              <label
                onClick={() => handleCountryClick()}
                className="dropdown-label"
              >
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
            <label
              className="modal-button"
              onClick={() => handleModalClick(true)}
            >
              <FontAwesomeIcon className="icon-menu" icon={faBars} size="lg" />
            </label>
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
      <div className={modalOpen === true ? "modal show" : "modal"}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">VOGUE</div>
              <label
                className="close-button"
                onClick={() => handleModalClick(false)}
              >
                <FontAwesomeIcon icon={faTimes} size="3x" />
              </label>
            </div>
            <div className="modal-body">
              <div className="modal-column">
                <a href="/">membership</a>
                <a href="/">vogue shop</a>
              </div>
              <div className="modal-column">
                <a href="/">membership</a>
                <a href="/">vogue shop</a>
              </div>
              <div className="modal-column">
                <a href="/">membership</a>
                <a href="/">vogue shop</a>
              </div>
              <p>Modal body text goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
