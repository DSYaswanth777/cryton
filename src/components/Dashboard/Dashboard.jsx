import React from "react";
import SideNav from "../SideNav/SideNav";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import Transactions from "../Transcations/Transcations";
import MyLineCharts from "../Transcations/MyLineCharts";

function Dashboard() {
  return (
    <>
      <div className="d-flex">
        <SideNav />
        <div className="w-100">
          <Header />
          <div className="p-4 d-flex gap-2 w-100">
            {/* <MainContent /> */}
            <div className="d-flex flex-column w-100">
              <MyLineCharts />

              <Transactions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
