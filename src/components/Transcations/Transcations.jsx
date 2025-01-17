import { Card, CardBody } from "reactstrap";
import tCoin from "../../assets/Icons/tCoin.png";
import MyLineCharts from "./MyLineCharts";
const Transactions = () => (
  <>
    <div className="w-100 d-flex flex-column">
      <Card className=" bg-secondary-dark rounded-4 p-2">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-2">
            {/* <p className="fw-bold">Recent Transcations</p> */}
            <p className="fw-bold">Coins</p>

            {/* <small className="price opacity-50 text-end">View All Transcations</small> */}
          </div>
          <div style={{height:"48vh", overflow:"auto"}}>
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>
            {/* <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>{" "}
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>{" "}
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>{" "}
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>{" "}
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>{" "}
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>{" "}
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>{" "}
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div>{" "}
            <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={tCoin} alt="" width={40} height={40} />
                <div className="d-flex flex-column justify-content-center align-items-st">
                  <p className="p-0 m-0 pb-1">Receive</p>
                  <small className="textLightGreen">Completed</small>
                </div>
                <div className="d-flex flex-column gap-2">
                  <small className="lightGrayText">
                    Wallet: bvdw355509*********4gbnwou432m
                  </small>
                  <small className="lightGrayText fs-6 ms-5">25 Sep 2024</small>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <small className="text-end">$500.00</small>
                <small className="price opacity-50 text-end">500.00 USDT</small>
              </div>
            </div> */}
          </div>
        </CardBody>
      </Card>
    </div>
  </>
);

export default Transactions;
