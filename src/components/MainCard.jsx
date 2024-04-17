import { FaBitcoin } from "react-icons/fa";
import "./MainCard.css";
import { ArrowDown } from "../icons";
export default function MainCard() {
  return (
    <div className="main-card">
      <div className="coin-header">
        <FaBitcoin className="coin" />
        <p className="coinname roboto-medium-middle">Bitcoin</p>
        <p className="coinsymbol roboto-medium-grey">BTC</p>
      </div>
      <h2 className="roboto-medium-black">3.529020 BTC</h2>
      <div className="coindeck">
        <h3 className="roboto-medium-grey">$19.153 USD</h3>
        <div className="margin-style">-2.32%</div>
      </div>
      <div className="arrowstyle">
        <ArrowDown/>
      </div>
    </div>
  );
}
