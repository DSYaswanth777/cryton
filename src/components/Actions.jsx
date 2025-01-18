import React from "react";
import Send from "../assets/NavbarIcons/send.svg";
import Receive from "../assets/NavbarIcons/receive.svg";
import Swap from "../assets/NavbarIcons/swap.svg";
import BuySell from "../assets/NavbarIcons/buySell.svg";

const Actions = () => (
  <div className="balanceGridIconContainer d-flex gap-2 gap-md-3 mt-4">
    <div className="balanceGridIcons">
      <img src={Send} alt="Send" />
      <p>Send</p>
    </div>
    <div className="balanceGridIcons">
      <img src={Receive} alt="Receive" />
      <p>Receive</p>
    </div>
    <div className="balanceGridIcons">
      <img src={Swap} alt="Swap" />
      <p>Swap</p>
    </div>
    <div className="balanceGridIcons">
      <img src={BuySell} alt="BuySell" />
      <p>BuySell</p>
    </div>
  </div>
);

export default Actions;
