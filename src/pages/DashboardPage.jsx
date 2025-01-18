import React from "react";
import MainContent from "../components/MainContent";
import MyCharts from "../components/MyLineCharts";
import Transactions from "../components/Transcations";

function DashboardPage() {
  return (
    <>
      <div className="d-flex flex-column flex-md-row p-4  gap-2 w-100">
        <MainContent />
        <div className="d-flex flex-column gap-4 w-100">
          <div className="d-none d-md-block">
          <MyCharts />

          <Transactions />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
