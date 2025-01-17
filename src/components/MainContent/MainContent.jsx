import { Card } from "reactstrap";
import Send from "../../assets/NavbarIcons/send.svg";
import Receive from "../../assets/NavbarIcons/receive.svg";
import Swap from "../../assets/NavbarIcons/swap.svg";
import BuySell from "../../assets/NavbarIcons/buySell.svg";
import People1 from "../../assets/Icons/people1.png";
import People2 from "../../assets/Icons/people2.png";
import People3 from "../../assets/Icons/people3.png";
import People4 from "../../assets/Icons/people4.png";
import People5 from "../../assets/Icons/people5.png";
import Bitcoin from "../../assets/Icons/bitcoin.svg";
import Tron from "../../assets/Icons/tron.svg";
import Solona from "../../assets/Icons/solona.svg";
import Polygon from "../../assets/Icons/polygon.svg";
import Binance from "../../assets/Icons/BinanceCoin.png";
const MainContent = () => (
  <div className="d-fle justify-content-between align-items-between"style={{height:"100vh"}}>
    {/* <div className="balanceCard position-relative">
      <div className="balacnceCardGradient position-absolute"></div>
      <p className="fs-4">Total Balance</p>
      <h2 className="fw-bold">$81,910.00</h2>
    </div> */}

    <Card className="bg-secondary-dark p-4 rounded-4">
      <div className="d-flex flex-column ">
        <small className="text-center pt-2">Total Balance</small>
        <h2 className="fw-bold text-center">$81,910.00</h2>
        <div className="balanceGridIconContainer d-flex gap-3 mt-4">
          <div className="balanceGridIcons ">
            <img src={Send} alt="" />
            <p>Send</p>
          </div>
          <div className="balanceGridIcons">
            <img src={Receive} alt="" />
            <p>Receive</p>
          </div>
          <div className="balanceGridIcons">
            <img src={Swap} alt="" />
            <p>Swap</p>
          </div>
          <div className="balanceGridIcons">
            <img src={BuySell} alt="" />
            <p>BuySell</p>
          </div>
        </div>
        <small className="pt-4 mt-3 text-start">Quick transfer</small>
        <div className="d-flex justify-content-center align-items-center gap-4 mt-3">
          <div className="peopleContainer ">
            <img
              src={People1}
              alt=""
              width={35}
              height={35}
              className="people"
            />
          </div>
          <div className="peopleContainer ">
            <img
              src={People2}
              alt=""
              width={40}
              height={40}
              className="people"
            />
          </div>
          <div className="peopleContainer ">
            <img
              src={People3}
              alt=""
              width={30}
              height={30}
              className="people"
            />
          </div>{" "}
          <div className="peopleContainer ">
            <img
              src={People4}
              alt=""
              width={30}
              height={30}
              className="people"
            />
          </div>{" "}
          <div className="peopleContaine ">
            <img
              src={People5}
              alt=""
              width={45}
              height={45}
              className="people"
            />
          </div>
          <div className="addIconContainer ">
            <div className="addIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M17 9H1M9 1V17V1Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <small className="pt-4 mt-2 text-start">Your Assets</small>
        <div className="py-3 d-flex justify-content-between asset">
          <div className="d-flex gap-3">
            <img src={Bitcoin} alt="" />
            <div className="d-flex flex-column gap-2">
              <small>Bitcoin (BTC)</small>
              <div className="d-flex gap-2">
                <small className="price opacity-50">$76,296.60</small>
                <small className="price">
                  {" "}
                  <span className="textRed">-0.01%</span>
                </small>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <small className="text-end">1.2</small>
            <small className="price opacity-50">$80,399.12</small>
          </div>
        </div>
        <div className="py-3 d-flex justify-content-between asset">
          <div className="d-flex gap-3">
            <img src={Tron} alt="" />
            <div className="d-flex flex-column gap-2">
              <small>Tron (TRX)</small>
              <div className="d-flex gap-2">
                <small className="price opacity-50">$225.65</small>
                <small className="price">
                  {" "}
                  <span className="textGreen">+0.01%</span>
                </small>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <small className="text-end">15</small>
            <small className="price opacity-50">$3,375.67</small>
          </div>
        </div>
        <div className="py-3 d-flex justify-content-between asset">
          <div className="d-flex gap-3">
            <img src={Solona} alt="" />
            <div className="d-flex flex-column gap-2">
              <small>Solana (SOL)</small>
              <div className="d-flex gap-2">
                <small className="price opacity-50">$450.90</small>
                <small className="price">
                  {" "}
                  <span className="textGreen">+0.01%</span>
                </small>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <small className="text-end">3</small>
            <small className="price opacity-50">$1,352.30</small>
          </div>
        </div>
        <div className="py-3 d-flex justify-content-between asset">
          <div className="d-flex gap-3">
            <img src={Polygon} alt="" />
            <div className="d-flex flex-column gap-2">
              <small>Polygon (MATIC)</small>
              <div className="d-flex gap-2">
                <small className="price opacity-50">$408.04</small>
                <small className="price">
                  {" "}
                  <span className="textGreen">+0.01%</span>
                </small>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <small className="text-end">100</small>
            <small className="price opacity-50">$40,804.00</small>
          </div>
        </div>
        <div className="py-3 d-flex justify-content-between align-items-center asset">
          <div className="d-flex gap-3 align-items-center">
            <img src={Binance} alt="" height={32} width={32} />
            <div className="d-flex flex-column gap-2">
              <small>Binance Coin (BNB)</small>
              <div className="d-flex gap-2">
                <small className="price opacity-50">$408.04</small>
                <small className="price">
                  {" "}
                  <span className="textGreen">+0.01%</span>
                </small>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <small className="text-end">100</small>
            <small className="price opacity-50">$40,804.00</small>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default MainContent;
