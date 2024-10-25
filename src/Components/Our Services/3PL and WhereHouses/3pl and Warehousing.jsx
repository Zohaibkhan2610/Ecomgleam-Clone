import React from 'react'
import { Link } from 'react-router-dom'
import House from './../Images/3PL-main video.mp4'
import WhereHose1 from './WhereHose1'
export default function Warehousing() {
  return (
    <>
      <div className="mangement">
        <div className="text-manage">
          <p className="manage-head1">
          3PL & Warehousing Services
          </p>
          <p className="manage-head2">
          Rectify Your Supply Chain Efficiency with <span>Ecom Gleam</span>
          </p>
          <p className="manage-para">
          Customized warehousing solutions aimed at improving inventory management, streamlining operations, and fostering business growth.
          </p>
          <div className="btn-area">
            <Link className="btn-area-1">Let's Chat</Link>
            <Link className="btn-area-2">Our Story</Link>
          </div>
        </div>
        <div className="img-manage">
          <video src={House} autoPlay muted loop></video>
        </div>
      </div>
      <WhereHose1/>
    </>
  )
}
