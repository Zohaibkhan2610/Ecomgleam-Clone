import React from 'react'
import { Link } from 'react-router-dom'
import Arbitrage1 from './../Images/Arbitrage1.png'
import ArbitMangement1 from './ArbitMangement1'
export default function ArbitrageAndManagenebt() {
  return (
    <>
      <div className="mangement">
        <div className="text-manage">
          <p className="manage-head1">
          Online Arbitrage & Retail Services
          </p>
          <p className="manage-head2">
          Empower Your eCommerce Growth with <span>Ecom Gleam</span>
          </p>
          <p className="manage-para">
          Discover boundless opportunities with EcomGleam's Online Arbitrage Services! Whether you're a seasoned seller or new to ecommerce, our expert team simplifies and maximizes your profits in this profitable venture
          </p>
          <div className="btn-area">
            <Link className="btn-area-1">Let's Chat</Link>
            <Link className="btn-area-2">Our Story</Link>
          </div>
        </div>
        <div className="img-manage">
          <img src={Arbitrage1} alt="" />
        </div>
      </div>
      <ArbitMangement1/>
    </>
  )
}
