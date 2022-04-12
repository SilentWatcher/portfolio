import React from "react";
import { ReactComponent as Email } from "../icons/email.svg";
import { ReactComponent as Linkedin } from "../icons/linkedin.svg";

function Icons() {
  return (
    <div className="icons">
      <button onclick={()=>window.open("mailto:vitekarvikas55@gmail.com", "blank")} className=" email button">
        <Email />
        Email
      </button>
      <button onClick={() => window.open("https://www.linkedin.com/in/vikas-vitekari-5945931b1")} className=" linkedin button">
        <Linkedin />
        Linkedin
      </button>
    </div>
  );
}

export default Icons;
