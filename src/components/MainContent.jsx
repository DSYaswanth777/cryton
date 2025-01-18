import React from "react";
import { Card } from "reactstrap";

import Actions from "./Actions";
import QuickTransfer from "./QuickTransfer";
import YourAssets from "./YourAssets";

const MainContent = () => (
  <div className="d-flex justify-content-between align-items-between">
    <Card className="bg-secondary-dark p-4 rounded-4">
      <div className="d-flex flex-column gap-3">
        <small className="text-center pt-2">Total Balance</small>
        <h2 className="fw-bold text-center">$81,910.00</h2>

        <Actions />

        <QuickTransfer />

        <YourAssets />
      </div>
    </Card>
  </div>
);

export default MainContent;
