// Footer.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const info = [
    "Masthead",
    "連絡我們",
    "Careers",
    "服務條款與隱私權聲明",
    "Media kit",
    "會員電子報",
    "雜誌訂閱",
    "廣告素材規範",
  ];
  return (
    <div>
      <div className="ads">
        <a href="/">
          <img
            alt="ads"
            src="https://tpc.googlesyndication.com/simgad/4418991333586357163"
          />
        </a>
      </div>
      <div className="footer">
        <div className="edition">EDITION TAIWAN</div>
        <FontAwesomeIcon icon={faFacebookF} className="social-media" />
        <FontAwesomeIcon icon={faInstagram} className="social-media" />
        <FontAwesomeIcon icon={faYoutube} className="social-media" />
        <div>conde nast taiwan</div>
        <div className="footer-link">
          {info.map((item) => {
            return <div>{item}</div>;
          })}
          <div>Cookies</div>
        </div>
        <div className="copyright">© 2021 Condé Nast</div>
      </div>
    </div>
  );
}
