import {
  AreaChart,
  Area,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import dayjs from "dayjs";
import Bitcoin from "../assets/Icons/bitcoin.svg";
import { Card } from "reactstrap";
import Actions from "./Actions";
import QuickTransfer from "./QuickTransfer";
import { data } from "../constants/constants";


const BitcoinChart = () => (
  <>
    <Card className=" w-100 bg-secondary-dark rounded-4 p-4">
      <div>
        <div className="d-flex justify-content-between align-items-center ">
          <div className="d-flex  justify-content-center align-items-center gap-2">
            <img src={Bitcoin} alt="" width={35} height={35} />

            <p className="fw-bold fs-6 pt-3">Bitcoin (BTC)</p>
          </div>
          <small className="price opacity-50 text-end">View History</small>
        </div>
      </div>
      <h4 className="fw-bold pt-3">$81,910.00</h4>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="rgba(206, 26, 17, 0.30)"
                stopOpacity={0.3}
              />
              <stop
                offset="105.55%"
                stopColor="rgba(206, 26, 17, 0.00)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            tickFormatter={(tick) => dayjs(tick).format("DD/MM")} // Format date to DD/MM
          />
          <YAxis hide={true} /> {/* Hide Y-axis labels */}
          <Tooltip labelFormatter={(value) => `Date: ${value}`} />{" "}
          <Area
            type="monotone"
            dataKey="price"
            stroke="#ce1a11"
            fillOpacity={1}
            fill="url(#colorPrice)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <Actions />
      <QuickTransfer />
    </Card>
  </>
);

export default BitcoinChart;
