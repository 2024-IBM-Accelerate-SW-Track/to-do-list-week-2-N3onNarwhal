import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/pfp.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Avery Lanier</div>
            <div className="brief_description">
              I am a junior computer science student and The University of Texas at Dallas
              with an interest in frontend development. I enjoy playing and developing video games,
              doing archery, and reading fantasy novels.
              <div>
                <a href="https://www.linkedin.com/in/avery-lanier/">
                  Connect with me on LinkedIn!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
