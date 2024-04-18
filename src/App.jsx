import Header from "./components/Header";
import MainCard from "./components/MainCard";
import OtherCard from "./components/OtherCard";
import "./App.css"
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";
import ChartCard from "./components/ChartCard";
import { useState } from "react";
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={menuOpen ? "backdrop" : ""}></div>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="main-container">
        <MainCard toggle={toggle} setToggle={setToggle} />
        <div className={toggle ? "" : "ComponentShow"}>
          <TimeLine />
          <ChartCard />
          <div className="othercard">
            <OtherCard color={"blue"} content={"Buy BTC"} />
            <OtherCard color={"green"} content={"Sell BTC"} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
