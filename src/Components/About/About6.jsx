import React from "react";

import About7S1 from "./Images/7About1.png";
import About7S2 from "./Images/7About2.png";
import About7S3 from "./Images/7About3.png";
import About7S4 from "./Images/7About4.png";
import { Link } from "react-router-dom";
export default function About6() {
  return (
    <>
      <div className="About">
        <h1 className="text-section-head1">Trusted by Top Brands</h1>
        <div className="Logo4S Aflex">
          <div className="Aflex cardlogoS1">
            <div className="about7img">
              <img src={About7S1} alt="" />
            </div>
            <div className="about7img">
              <img src={About7S2} alt="" />
            </div>
            <div className="about7img">
              <img src={About7S3} alt="" />
            </div>
            <div className="about7img">
              <img src={About7S4} alt="" />
            </div>
          </div>
          <div className="Aflex cardlogoS2 none">
            <div className="about7img">
              <img src={About7S1} alt="" />
            </div>
            <div className="about7img">
              <img src={About7S2} alt="" />
            </div>
            <div className="about7img">
              <img src={About7S3} alt="" />
            </div>
            <div className="about7img">
              <img src={About7S4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="About">
        <h1 className="text-section-head1">Leave a Message For Us</h1>
        <p className="About6-para">Contact us today; our team is ready to support your goals, whether you’re seeking expert guidance, campaign management, or strategic consultation.</p>
      </div>
      <div className="About">
      <div className="About6">
        <p className="About6-head">Take Your Brand to New Heights on Amazon</p>
        <Link className="btn3">Speak to ECom Gleam</Link>
      </div>
      </div>
    </>
  );
}
