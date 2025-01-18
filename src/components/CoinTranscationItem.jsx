import { iconMapping } from "../constants/constants";

const CoinItem = ({ name, walletAddress, balance, price }) => {
    // Copy functionality
    const handleCopyClick = (address) => {
      navigator.clipboard
        .writeText(address)
        .then(() => {
          toast.success("Wallet address copied to clipboard!"); // React Hot Toast success message
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          toast.error("Failed to copy wallet address"); // Error message if copy fails
        });
    };
  
    // Icon mapping based on the coin name
    const icon = iconMapping[name];
  
    return (
      <div className="d-flex justify-content-between align-items-center transcation mb-3 rounded-4 p-3 me-1">
        <div className="d-flex gap-3 justify-content-center align-items-center">
          {/* Dynamically rendering the coin icon */}
          <img src={icon} alt={name} width={40} height={40} />
          <div className="d-flex flex-column justify-content-center align-items-st">
            <p className="p-0 m-0 pb-1">{name}</p>
            <small>
              Wallet Address:{" "}
              <span className="ms-2 textRed">{walletAddress}</span>
              <img
                src={Clipboard}
                alt="clipboard"
                className="ms-2 cursor-pointer"
                onClick={() => handleCopyClick(walletAddress)} // Call the copy function on click
              />
            </small>
          </div>
        </div>
        <div className="d-flex flex-column gap-2">
          <small className="text-end fs-4 fw-bold">{balance}</small>
          <small className="price opacity-50 text-end">{price}</small>
        </div>
      </div>
    );
  };

  export default CoinItem;