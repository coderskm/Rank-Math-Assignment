/* eslint-disable react/prop-types */
import { CourierInfo, Edit, Remove, Share } from "../icons";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa";


import "./Header.css";
export default function Header({menuOpen, setMenuOpen}) {
  
  return (
    <div className="main-nav">
      <div className="arrowleft">
        <FaAngleLeft className="arrowleft" />
      </div>
      <h1 className="roboto-medium-black">Bitcoin Wallet</h1>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <BsThreeDotsVertical />
      </div>
      <div className={menuOpen ? "nav-items-2" : "nav-items-1"}>
        <div className="nav-item">
          <h4 className="roboto-medium-black">Edit</h4>
          <Edit />
        </div>
        <div className="nav-item">
          <h4 className="roboto-medium-black">Courier info</h4>
          <CourierInfo />
        </div>
        <div className="nav-item">
          <h4 className="roboto-medium-black">Share</h4>
          <Share />
        </div>
        <div className="nav-item">
          <h4 className="roboto-medium-black">Remove</h4>
          <Remove />
        </div>
      </div>
    </div>
  );
}
