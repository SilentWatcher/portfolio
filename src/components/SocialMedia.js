import React from "react";
import { ReactComponent as Github } from "../icons/github.svg";
import { ReactComponent as Facebook } from "../icons/facebook.svg";
import { ReactComponent as Insta } from "../icons/InstagramIcon.svg";
import { ReactComponent as Twitter } from "../icons/TwitterIcon.svg";

function SocialMedia() {
  return (
    <div className="socialmediaicon">
      <Github onClick={() => window.open("https://github.com/SilentWatcher")} />
      <Facebook
        onClick={() => window.open("https://www.facebook.com/vikas.vitekari")}
      />
      <Insta
        onClick={() =>
          window.open("https://www.instagram.com/vitekarivikas/?hl=en")
        }
      />
      <Twitter
        onClick={() => window.open("https://twitter.com/VitekariVikas")}
      />
    </div>
  );
}

export default SocialMedia;
