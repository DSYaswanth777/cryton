import { Card, CardBody } from "reactstrap";

import TranscationsFilter from "./TranscationsFilter";
import AllTranscations from "./AllTranscations";
import { useLocation } from "react-router-dom";
import { transactionIcons, transactions } from "../constants/constants";
import TransactionItem from "./TranscationItem";



const Transactions = () => {
  const location = useLocation();


  return (
    <div className="w-100 d-flex flex-column">
      <Card className="bg-secondary-dark rounded-4 p-2">
        <CardBody>
          {location.pathname === "/" && <AllTranscations />}
          {location.pathname === "/transaction-history" && <TranscationsFilter />}
          <div style={{ height: "48vh", overflow: "auto" }}>
            {transactions.map((transaction, index) => (
              <TransactionItem
                key={index}
                transaction={transaction}
                transactionIcons={transactionIcons}
              />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Transactions;
