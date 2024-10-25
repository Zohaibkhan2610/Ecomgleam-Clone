import React from "react";
import "./../OurServices.css";
import { Link } from "react-router-dom";
import managment1 from './../Images/amazonMangment1.png'
import AFullMangement1 from "./AFullMangement1";
export default function AmazonMangment() {
  return (
    <>
      <div className="mangement">
        <div className="text-manage">
          <p className="manage-head1">
            Amazon Private Label and Brand Management Services
          </p>
          <p className="manage-head2">
            Maximize Your Impact in E-commerce sphere with <span>Ecom Gleam</span>
          </p>
          <p className="manage-para">
            Maximize your Amazon business with our expert Private Label and
            Brand Management Services, ensuring standout performance and
            customer loyalty in a competitive market.
          </p>
          <div className="btn-area">
            <Link className="btn-area-1">Let's Chat</Link>
            <Link className="btn-area-2">Our Story</Link>
          </div>
        </div>
        <div className="img-manage">
          <img src={managment1} alt="" />
        </div>
      </div>
      <AFullMangement1/>
    </>
  );
}
