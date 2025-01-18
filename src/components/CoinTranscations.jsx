import { Card, CardBody } from "reactstrap";
import { coins } from "../constants/constants";
import CoinItem from "./CoinTranscationItem";


const Coins = () => (
  <div className="w-100 d-flex flex-column">
    <Card className="bg-secondary-dark rounded-4 p-2">
      <CardBody>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="fw-bold">Coins</p>
        </div>
        <div style={{ height: "57vh", overflow: "auto" }}>
          {coins.map((coin, index) => (
            <CoinItem key={index} {...coin} />
          ))}
        </div>
      </CardBody>
    </Card>
  </div>
);

export default Coins;
