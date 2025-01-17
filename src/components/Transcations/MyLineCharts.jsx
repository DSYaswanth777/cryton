import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer, Dot } from "recharts";
import Bitcoin from "../../assets/Icons/bitcoin.svg";
// Example data
import ETHIcon from "../../assets/Icons/ETHICOn.png";
import TRXIcon from "../../assets/Icons/tron.svg";
import SOL from "../../assets/Icons/solona.svg";
const dataBTC = [
  { name: "Point 1", value: 12.5 }, // Start of the curve
  { name: "Point 2", value: 44.3 }, // Dip
  { name: "Point 3", value: 21.9 }, // Peak
  { name: "Point 4", value: 106.9 }, // Sharp dip (lowest point)
  { name: "Point 5", value: 71.3 }, // Recovery
  { name: "Point 6", value: 21.9 }, // Slight dip
  { name: "Point 7", value: 19.2 }, // End of the curve
];
const dataETH = [
  { name: "Point 5", value: 71.3 }, // Recovery
  { name: "Point 6", value: 21.9 }, // Slight dip
  { name: "Point 7", value: 19.2 }, // End of the curve
  { name: "Point 1", value: 12.5 }, // Start of the curve
  { name: "Point 2", value: 44.3 }, // Dip
  { name: "Point 3", value: 21.9 }, // Peak
  { name: "Point 4", value: 106.9 }, // Sharp dip (lowest point)
];
const dataTRX = [
  { name: "Point 6", value: 21.9 }, // Slight dip

  { name: "Point 3", value: 21.9 }, // Peak
  { name: "Point 4", value: 106.9 }, // Sharp dip (lowest point)
  { name: "Point 5", value: 71.3 }, // Recovery
  { name: "Point 1", value: 12.5 }, // Start of the curve
  { name: "Point 2", value: 44.3 }, // Dip
  { name: "Point 7", value: 19.2 }, // End of the curve
];
const dataSOL = [
  { name: "Point 4", value: 106.9 }, // Sharp dip (lowest point)
  { name: "Point 5", value: 71.3 }, // Recovery
  { name: "Point 2", value: 44.3 }, // Dip
  { name: "Point 1", value: 12.5 }, // Start of the curve
  { name: "Point 3", value: 21.9 }, // Peak
  { name: "Point 6", value: 21.9 }, // Slight dip
  { name: "Point 7", value: 19.2 }, // End of the curve
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          padding: "8px 12px",
          borderRadius: "8px",
          color: "#fff",
        }}
      >
        ${payload[0].value.toFixed(2)}
      </div>
    );
  }
  return null;
};

const SingleLineChart = ({
  data,
  gradientId,
  color,
  icon,
  title,
  price,
  change,
  backgroundImage,
}) => (
  <div
    className="Chart"
    style={{
      width: "100%",
      margin: "0 5px",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "16px",
      padding: "0px",
      color: "#fff",
    }}
  >
    {/* Header */}
    <div className="d-flex justify-content-between pt-4 px-3">
      <div className="d-flex justify-content-center align-items-start">
        <img
          src={icon}
          alt={title}
          style={{ width: 27, height: 27, marginRight: 8 }}
        />
        <span>{title}</span>
      </div>
      <div className="d-flex justify-content-center align-items-end flex-column gap-1">
        <div>${price}</div>
        <div
          style={{ fontSize: "12px", color: change > 0 ? "#0f0" : "#f00" }}
          className="text-end"
        >
          {change > 0 ? "+" : ""}
          {change.toFixed(2)}%
        </div>
      </div>
    </div>
    {/* Chart */}
    <ResponsiveContainer width="100%" height={120}>
      <LineChart data={data}>
        {/* <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.4} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs> */}
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          dot={{ r: 0, strokeWidth: 2, fill: color, stroke: "#fff" }}
          activeDot={{ r: 8 }}
          fill={`url(#${gradientId})`}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const MyCharts = () => {
  return (
    <div className="d-flex jsutify-content-start align-items-center mb-4 gap-2">
      <div className="p-4 balanceCard w-100">
        <h4>Total Balance</h4>

        <h2>$81,910.00</h2>
      </div>
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
