// Header.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faAngleDown,
  faTimes,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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

  const secondaryMenu = [
    "fashion",
    "beauty",
    "entertainment",
    "lifestyle",
    "luxury",
    "video",
    "Vogue有意識",
  ];

  const info = [
    "秀場圖輯 RUNWAY SHOW",
    "可能研究所",
    "美人會部落格",
    "風格達人",
    "評美時尚客",
    "活動快報",
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
                <FontAwesomeIcon icon={faAngleDown} size="lg" />
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
        {secondaryMenu.map(function (item) {
          return <a href="/">{item}</a>;
        })}
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
                <hr />
                <a href="/">vogue shop</a>
              </div>
              <div className="modal-column">
                {secondaryMenu.map(function (item) {
                  return (
                    <div>
                      <a className="logo-font" href="/">
                        {item}
                      </a>
                      <hr />
                    </div>
                  );
                })}
              </div>
              <div className="modal-column">
                {info.map(function (item) {
                  return (
                    <div>
                      <a href="/">{item}</a> <hr />
                    </div>
                  );
                })}
                <div className="follow-us">follow us</div>
                <div className="icon">
                  <div class="icon-box">
                    <div class="icon-wrapper">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                  </div>
                  <div class="icon-box">
                    <div class="icon-wrapper">
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                  </div>
                  <div class="icon-box">
                    <div class="icon-wrapper">
                      <FontAwesomeIcon icon={faYoutube} />
                    </div>
                  </div>
                  <div class="icon-box">
                    <div class="icon-wrapper">
                      <FontAwesomeIcon icon={faShareAlt} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
