import React from 'react'
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

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
  

export default SingleLineChart