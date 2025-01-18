import React from "react";
import Bitcoin from "../assets/Icons/bitcoin.svg";
import Tron from "../assets/Icons/tron.svg";
import Solona from "../assets/Icons/solona.svg";
import Polygon from "../assets/Icons/polygon.svg";
import Binance from "../assets/Icons/BinanceCoin.png";

const assets = [
  {
    icon: Bitcoin,
    name: "Bitcoin (BTC)",
    price: "$76,296.60",
    amount: "1.2",
    total: "$80,399.12",
    change: "-0.01%",
    changeClass: "textRed",
  },
  {
    icon: Tron,
    name: "Tron (TRX)",
    price: "$225.65",
    amount: "15",
    total: "$3,375.67",
    change: "+0.01%",
    changeClass: "textGreen",
  },
  {
    icon: Solona,
    name: "Solana (SOL)",
    price: "$450.90",
    amount: "3",
    total: "$1,352.30",
    change: "+0.01%",
    changeClass: "textGreen",
  },
  {
    icon: Polygon,
    name: "Polygon (MATIC)",
    price: "$408.04",
    amount: "100",
    total: "$40,804.00",
    change: "+0.01%",
    changeClass: "textGreen",
  },
  {
    icon: Binance,
    name: "Binance Coin (BNB)",
    price: "$408.04",
    amount: "100",
    total: "$40,804.00",
    change: "+0.01%",
    changeClass: "textGreen",
  },
  {
    icon: Bitcoin,
    name: "Bitcoin (BTC)",
    price: "$76,296.60",
    amount: "1.2",
    total: "$80,399.12",
    change: "-0.01%",
    changeClass: "textRed",
  },
  {
    icon: Tron,
    name: "Tron (TRX)",
    price: "$225.65",
    amount: "15",
    total: "$3,375.67",
    change: "+0.01%",
    changeClass: "textGreen",
  },
  {
    icon: Solona,
    name: "Solana (SOL)",
    price: "$450.90",
    amount: "3",
    total: "$1,352.30",
    change: "+0.01%",
    changeClass: "textGreen",
  },
  {
    icon: Polygon,
    name: "Polygon (MATIC)",
    price: "$408.04",
    amount: "100",
    total: "$40,804.00",
    change: "+0.01%",
    changeClass: "textGreen",
  },
  {
    icon: Binance,
    name: "Binance Coin (BNB)",
    price: "$408.04",
    amount: "100",
    total: "$40,804.00",
    change: "+0.01%",
    changeClass: "textGreen",
  },
];

const YourAssets = () => (
  <div className="mt-3">
    <small className="pt-4 mt-2 text-start">Your Assets</small>
    {/* Scrollable Container */}
    <div className="assets-container">
      {assets.map((asset, index) => (
        <div key={index} className="py-3 d-flex justify-content-between asset  pe-2">
          <div className="d-flex gap-3">
            <img src={asset.icon} alt={asset.name} />
            <div className="d-flex flex-column gap-2">
              <small>{asset.name}</small>
              <div className="d-flex gap-2">
                <small className="price opacity-50">{asset.price}</small>
                <small className="price">
                  <span className={asset.changeClass}>{asset.change}</span>
                </small>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <small className="text-end">{asset.amount}</small>
            <small className="price opacity-50">{asset.total}</small>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default YourAssets;
