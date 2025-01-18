import React from "react";

function AllTranscations() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="fw-bold">Recent Transactions</p>

        <a href="/transaction-history" className="price opacity-50 text-white  text-end">
          View All Transactions
        </a>
      </div>
    </>
  );
}

export default AllTranscations;
