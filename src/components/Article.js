// Article.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Article() {
  const articleData = {
    category: "ENTERTAINMENT",
    title: " 寶藏男孩持修：「對我來說男子氣概無關外表，而是要負責任。」",
    writer: "NICOLE LEE",
    dateTime: "2021年6月7日",
    img: "https://media.vogue.com.tw/photos/60b9a4fcf37df9e2f39b0216/2:3/w_2880%2cc_limit/29711-1_V.jpg",
  };
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
      <div className="post">
        <h2 className="post-headline">hot now</h2>
        <div className="post-img-wrapper">
          <img
            className="post-img"
            alt="post-img"
            src="https://media.vogue.com.tw/photos/60b9a4fcf37df9e2f39b0216/2:3/w_2880%2cc_limit/29711-1_V.jpg"
          />
          <svg xmlns="http://www.w3.org/2000/svg">
            <filter id="red-filter">
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
        <div className="post-body">
          {articleData.category}
          <div className="post-title">{articleData.title}</div>
          BY {articleData.writer}
          {articleData.dateTime}
        </div>
      </div>
      <div className="ads">
        <a href="/">
          <img
            alt="ads"
            src="https://tpc.googlesyndication.com/simgad/4418991333586357163"
          />
        </a>
      </div>
      <div className="post">
        <h2 className="post-headline">attention</h2>
        <div className="post-section">
          <div className="post-column">
            <div className="rectangle-img">
              <img alt="post-img" src={articleData.img} />
            </div>
            <div className="post-paper">
              {articleData.category}
              <div className="post-subtitle">{articleData.title}</div>
              <hr className="brown-hr" />
              BY {articleData.writer}
              {articleData.dateTime}
            </div>
          </div>
          <div className="post-column">
            <div className="square-img">
              <img alt="post-img" src={articleData.img} />
            </div>
            <div className="post-paper">
              {articleData.category}
              <div className="post-subtitle">{articleData.title}</div>
              <hr className="brown-hr" />
              BY {articleData.writer}
              {articleData.dateTime}
            </div>
          </div>
          <div className="post-column">
            <div className="rectangle-img">
              <img alt="post-img" src={articleData.img} />
            </div>
            <div className="post-paper">
              {articleData.category}
              <div className="post-subtitle">{articleData.title}</div>
              <hr className="brown-hr" />
              BY {articleData.writer}
              {articleData.dateTime}
            </div>
          </div>
          <div className="post-column">
            <div className="square-img">
              <img alt="post-img" src={articleData.img} />
            </div>
            <div className="post-paper">
              {articleData.category}
              <div className="post-subtitle">{articleData.title}</div>
              <hr className="brown-hr" />
              BY {articleData.writer}
              {articleData.dateTime}
            </div>
            <div className="more-info">
              <button>
                More Attention
                <br />
                <FontAwesomeIcon icon={faChevronRight} className="red-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="post">
        <h2 className="post-headline">fashion</h2>
        <div className="post-section">
          <div className="left-side">
            <img src={articleData.img} alt="img" />
            <div className="overlay-content">
              {articleData.category}
              <div className="post-title">{articleData.title}</div>
              <hr className="white-hr" />
              BY {articleData.writer}
              {articleData.dateTime}
            </div>
          </div>
          <div className="right-side">
            <div className="row">
              <div className="post-column">
                <div className="square-img">
                  <img alt="post-img" src={articleData.img} />
                </div>
                <div className="post-paper">
                  {articleData.category}
                  <div className="post-subtitle">{articleData.title}</div>
                  <hr className="brown-hr" />
                  BY {articleData.writer}
                  {articleData.dateTime}
                </div>
              </div>
              <div className="post-column">
                <div className="rectangle-img">
                  <img alt="post-img" src={articleData.img} />
                </div>
                <div className="post-paper">
                  {articleData.category}
                  <div className="post-subtitle">{articleData.title}</div>
                  <hr className="brown-hr" />
                  BY {articleData.writer}
                  {articleData.dateTime}
                </div>
              </div>
              <div className="post-column">
                <div className="square-img">
                  <img alt="post-img" src={articleData.img} />
                </div>
                <div className="post-paper">
                  {articleData.category}
                  <div className="post-subtitle">{articleData.title}</div>
                  <hr className="brown-hr" />
                  BY {articleData.writer}
                  {articleData.dateTime}
                </div>
              </div>
              <div className="post-column">
                <div className="rectangle-img">
                  <img alt="post-img" src={articleData.img} />
                </div>
                <div className="post-paper">
                  {articleData.category}
                  <div className="post-subtitle">{articleData.title}</div>
                  <hr className="brown-hr" />
                  BY {articleData.writer}
                  {articleData.dateTime}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="post-column">
                <div className="rectangle-img">
                  <img alt="post-img" src={articleData.img} />
                </div>
                <div className="post-paper">
                  {/* {articleData.category} */}
                  <div className="post-subtitle">{articleData.title}</div>
                  <hr className="brown-hr" />
                  BY {articleData.writer}
                  {articleData.dateTime}
                </div>
              </div>
              <div className="post-column">
                <div className="square-img">
                  <img alt="post-img" src={articleData.img} />
                </div>
                <div className="post-paper">
                  {articleData.category}
                  <div className="post-subtitle">{articleData.title}</div>
                  <hr className="brown-hr" />
                  BY {articleData.writer}
                  {articleData.dateTime}
                </div>
              </div>
              <div className="post-column">
                <div className="rectangle-img">
                  <img alt="post-img" src={articleData.img} />
                </div>
                <div className="post-paper">
                  {articleData.category}
                  <div className="post-subtitle">{articleData.title}</div>
                  <hr className="brown-hr" />
                  BY {articleData.writer}
                  {articleData.dateTime}
                </div>
              </div>
              <div className="post-column">
                <div className="square-img">
                  <img alt="post-img" src={articleData.img} />
                </div>
                <div className="post-paper">
                  {articleData.category}
                  <div className="post-subtitle">{articleData.title}</div>
                  <hr className="brown-hr" />
                  BY {articleData.writer}
                  {articleData.dateTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
