const TransactionItem = ({ transaction, transactionIcons }) => (
  <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3 me-2">
    <div className="d-flex gap-3 justify-content-center align-items-center">
      <img
        src={transactionIcons[transaction.type]}
        alt=""
        width={40}
        height={40}
      />
      <div className="d-flex flex-column justify-content-center align-items-st">
        <p className="p-0 m-0 pb-1">{transaction.type}</p>
        <small
          className={
            transaction.status === "Completed"
              ? "textLightGreen"
              : transaction.status === "Failed"
              ? "textRed"
              : "textYellow"
          }
        >
          {transaction.status}
        </small>
      </div>
      <div className="d-flex flex-column gap-2">
        <small className="lightGrayText">{`Wallet: ${transaction.wallet}`}</small>
        <small className="lightGrayText fs-6 ms-5">{transaction.date}</small>
      </div>
    </div>
    <div className="d-flex flex-column gap-2">
      <small className="text-end">{transaction.amount}</small>
      <small className="price opacity-50 text-end">500.00 USDT</small>
    </div>
  </div>
);
export default TransactionItem;
