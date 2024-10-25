import React from 'react'
import Wholesale1 from './../Images/wholesale1.png'
import { Link } from 'react-router-dom'
import AmazonWholeSale1 from './AmazonWholeSale1'

export default function AmazonWholesale() {
  return (
    <>
        <div className="mangement">
        <div className="text-manage">
          <p className="manage-head1">
          Wholesale Services
          </p>
          <p className="manage-head2">
          Navigate Towards E-commerce Excellence with <span>Ecom Gleam</span>
          </p>
          <p className="manage-para">
          Maximize Your  Wholesale Potential & Propel Your E-commerce Business with Expert wholesale Services from Ecom Gleam!
          </p>
          <div className="btn-area">
            <Link className="btn-area-1">Let's Chat</Link>
            <Link className="btn-area-2">Our Story</Link>
          </div>
        </div>
        <div className="img-manage">
          <img src={Wholesale1} alt="" />
        </div>
      </div>
     <AmazonWholeSale1/>
    </>
  )
}
