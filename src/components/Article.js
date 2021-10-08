// Post.js

import React from "react";

export default function Article() {
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
      <div className="banner">
        <h2 className="banner-headline">hot now</h2>
        <div className="banner-img-wrapper">
          <img
            className="banner-img"
            alt="banner-img"
            src="https://media.vogue.com.tw/photos/60b9a4fcf37df9e2f39b0216/2:3/w_2880%2cc_limit/29711-1_V.jpg"
          />
        </div>
        <div className="banner-body">
          ENTERTAINMENT
          <div className="banner-title">
            寶藏男孩持修：「對我來說男子氣概無關外表，而是要負責任。」
          </div>
          BY NICOLE LEE 2021年6月7日
        </div>
        <svg xmlns="http://www.w3.org/2000/svg">
          <filter id="dabadee">
            <feColorMatrix
              type="matrix"
              values="
                      1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
            ></feColorMatrix>
          </filter>
        </svg>
      </div>
    </div>
  );
}
