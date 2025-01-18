import React from "react";
import TotalBalance from "../components/TotalBalance";
import MyCharts from "../components/MyLineCharts";
import Coins from "../components/CoinTranscations";
import BitcoinChart from "../components/BitcoinChart";
function WalletPage() {
  return (
    <>
      <div className="p-3">
        <div className="d-flex justify-content-center flex-column flex-md-row align-items-">
          <TotalBalance />
          <MyCharts />
        </div>
        <div className="d-flex flex-column flex-md-row gap-2">
          <Coins />
          <div className="flex-grow-1">
            <BitcoinChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletPage;
