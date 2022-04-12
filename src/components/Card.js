import React from "react";
import Icons from "./Icons";
import Content from "./Content";
import SocialMedia from "./SocialMedia";
function Card() {
  return (
    <div className="card_parent">
      <div className="card_child">
        <div className="maincontent">
          <div className="modelimg"></div>
          <div className="modelinfo">
            <h4>Silent Watcher</h4>
            <h6 className="fullstack">Frontend Developer</h6>
            <h6 className="github">silentwatcher.com</h6>

            <Icons />
            <Content />
          </div>
          <div className="socialmediaicon">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
