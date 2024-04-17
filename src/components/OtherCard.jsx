/* eslint-disable react/prop-types */
import { BiSolidDollarCircle } from "react-icons/bi";
import "./OtherCard.css";
export default function OtherCard({color, content}) {
  return (
    <div className="card">
      <BiSolidDollarCircle className="coin-image" style={{color:`${color}`}} />
      <p className="content roboto-medium-middle">{content}</p>
    </div>
  );
}
