import { Wallet, Notification, Settings } from "../icons"
import { FaCompass } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
      <div className="footer">
          <div>
              <Wallet/>
          </div>
          <div>
              <FaCompass/>
          </div>
          <div>
              <Notification/>
          </div>
          <div>
              <Settings/>
          </div>
    </div>
  )
}
