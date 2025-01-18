import Bitcoin from "../assets/Icons/bitcoin.svg";
import ETHIcon from "../assets/Icons/ETHICOn.png";
import TRXIcon from "../assets/Icons/tron.svg";
import SOL from "../assets/Icons/solona.svg";
import { dataBTC, dataETH, dataSOL, dataTRX } from "../constants/constants";
import SingleLineChart from "./SingleChart";




const MyCharts = () => {
  return (
    <div
      className="d-flex justify-content-start align-items-center mb-4 gap-2 w-100"
      style={{ overflowX: "scroll" }}
    >
      {/* <TotalBalance/> */}
      <SingleLineChart
        data={dataBTC}
        gradientId="gradientBTC"
        color="#F7931A" // Updated color for BTC
        icon={Bitcoin}
        title="BTC"
        price="76296.60"
        change={-0.01}
        backgroundImage="./../../../src/assets/Icons/BTCGradient.svg"
      />

      <SingleLineChart
        data={dataETH}
        gradientId="gradientETH"
        color="#627EEA" // Updated color for ETH
        icon={ETHIcon}
        title="ETH"
        price="76296.60"
        change={0.01}
        backgroundImage="./../../../src/assets/Icons/ETHGradient.svg"
      />
      <SingleLineChart
        data={dataTRX}
        gradientId="gradientTRX"
        color="#EC0A27" // Updated color for TRX
        icon={TRXIcon}
        title="TRX"
        price="76296.60"
        change={-0.01}
        backgroundImage="./../../../src/assets/Icons/TRXGradient.svg"
      />
      <SingleLineChart
        data={dataSOL}
        gradientId="gradientSOL"
        color="#16BD9C" // Updated color for SOL
        icon={SOL}
        title="SOL"
        price="76296.60"
        change={0.01}
        backgroundImage="./../../../src/assets/Icons/SOLGradient.svg"
      />
    </div>
  );
};

export default MyCharts;
