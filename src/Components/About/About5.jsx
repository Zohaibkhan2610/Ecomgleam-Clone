import React from "react";
import Card5p1 from "./Images/5About1.png";
import Card5p2 from "./Images/5About2.png";
import About6S1 from "./Images/6About.png";

export default function About5() {
  return (
    <>
      <div className="About">
        <h1 className="text-section-head1">Client Education and Empowerment</h1>
        <div className="card5">
          <div className="card5-text">
            <p className="card5-text-head">Knowledge Sharing</p>
            <p className="card5-text-para">
              At Ecom Gleam, we believe in empowering our clients with
              knowledge. Through regular webinars, workshops, and comprehensive
              guides, we provide you with the tools and information needed to
              make informed decisions and grow your business.
            </p>
          </div>
          <div className="card5-img">
            <img src={Card5p1} alt="" />
          </div>
        </div>
        <div className="card5">
          <div className="card5-img">
            <img src={Card5p2} alt="" />
          </div>
          <div className="card5-text">
            <p className="card5-text-head">Continuous Support</p>
            <p className="card5-text-para">
              Our commitment to your success doesn't end with a single
              transaction. We offer continuous support, providing you with
              ongoing assistance and guidance. Whether it's troubleshooting an
              issue or planning your next move, we're here to support you every
              step of the way.
            </p>
          </div>
        </div>
      </div>
      <div className="About flex">
        <h1 className="text-section-head1">Client Testimonials</h1>
        <div className="card5 flex">
        <div className="About5-img">
          <img src={About6S1} alt="" />
        </div>
        <div className="About5-img">
          <img src={About6S1} alt="" />
        </div>
        <div className="About5-img">
          <img src={About6S1} alt="" />
        </div>
        </div>
      </div>
    </>
  );
}
