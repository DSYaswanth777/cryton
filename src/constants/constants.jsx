import Bitcoin from "../assets/Icons/bitcoin.svg";
import ETHIcon from "../assets/Icons/ETHICOn.png";
import TRXIcon from "../assets/Icons/tron.svg";
import SOL from "../assets/Icons/solona.svg";
import BinanceCoin from "../assets/Icons/BinanceCoin.png";
import tCoin from "../assets/Icons/tCoin.png";
import Withdraw from "../assets/Icons/withDrawIcon.svg";
import Buy from "../assets/Icons/solonaBuy.svg";
import Swap from "../assets/Icons/BitcoinSwap.svg";
export const data = [
  { date: "2025-01-01", price: 8000 },
  { date: "2025-01-01", price: 82000 },
  { date: "2025-01-01", price: 75000 },
  { date: "2025-01-01", price: 58000 },
  { date: "2025-01-01", price: 83000 },
  { date: "2025-01-01", price: 66000 },
];

// Coin Data Array
export const coins = [
  {
    name: "Bitcoin (BTC)",
    walletAddress: "bvdw355509*********4gbnwou432m",
    balance: "1.2",
    price: "$80,399.12",
  },
  {
    name: "Ethereum (ETC)",
    walletAddress: "bvdw355509*********4gbnwou432m",
    balance: "1.2",
    price: "$80,399.12",
  },
  {
    name: "Tron (TRON)",
    walletAddress: "bvdw355509*********4gbnwou432m",
    balance: "1.2",
    price: "$80,399.12",
  },
  {
    name: "Binance Coin (BNB)",
    walletAddress: "bvdw355509*********4gbnwou432m",
    balance: "1.2",
    price: "$80,399.12",
  },
  {
    name: "Solana (SOL)",
    walletAddress: "bvdw355509*********4gbnwou432m",
    balance: "1.2",
    price: "$80,399.12",
  },
  {
    name: "Bitcoin (BTC)",
    walletAddress: "bvdw355509*********4gbnwou432m",
    balance: "1.2",
    price: "$80,399.12",
  },
  {
    name: "Ethereum (ETC)",
    walletAddress: "bvdw355509*********4gbnwou432m",
    balance: "1.2",
    price: "$80,399.12",
  },
  {
    name: "Tron (TRON)",
    walletAddress: "bvdw355509*********4gbnwou432m",
    balance: "1.2",
    price: "$80,399.12",
  },
  {
    name: "Binance Coin (BNB)",
    walletAddress: "bvdw355509*********4gbnwou432m",
    balance: "1.2",
    price: "$80,399.12",
  },
  {
    name: "Solana (SOL)",
    walletAddress: "bvdw355509*********4gbnwou432m",
    balance: "1.2",
    price: "$80,399.12",
  },
];

// Icon mapping based on the coin name
export const iconMapping = {
  "Bitcoin (BTC)": Bitcoin,
  "Ethereum (ETC)": ETHIcon,
  "Tron (TRON)": TRXIcon,
  "Binance Coin (BNB)": BinanceCoin,
  "Solana (SOL)": SOL,
};

export const dataBTC = [
  { name: "Point 1", value: 12.5 }, // Start of the curve
  { name: "Point 2", value: 44.3 }, // Dip
  { name: "Point 3", value: 21.9 }, // Peak
  { name: "Point 4", value: 106.9 }, // Sharp dip (lowest point)
  { name: "Point 5", value: 71.3 }, // Recovery
  { name: "Point 6", value: 21.9 }, // Slight dip
  { name: "Point 7", value: 19.2 }, // End of the curve
];
export const dataETH = [
  { name: "Point 5", value: 71.3 }, // Recovery
  { name: "Point 6", value: 21.9 }, // Slight dip
  { name: "Point 7", value: 19.2 }, // End of the curve
  { name: "Point 1", value: 12.5 }, // Start of the curve
  { name: "Point 2", value: 44.3 }, // Dip
  { name: "Point 3", value: 21.9 }, // Peak
  { name: "Point 4", value: 106.9 }, // Sharp dip (lowest point)
];
export const dataTRX = [
  { name: "Point 6", value: 21.9 }, // Slight dip

  { name: "Point 3", value: 21.9 }, // Peak
  { name: "Point 4", value: 106.9 }, // Sharp dip (lowest point)
  { name: "Point 5", value: 71.3 }, // Recovery
  { name: "Point 1", value: 12.5 }, // Start of the curve
  { name: "Point 2", value: 44.3 }, // Dip
  { name: "Point 7", value: 19.2 }, // End of the curve
];
export const dataSOL = [
  { name: "Point 4", value: 106.9 }, // Sharp dip (lowest point)
  { name: "Point 5", value: 71.3 }, // Recovery
  { name: "Point 2", value: 44.3 }, // Dip
  { name: "Point 1", value: 12.5 }, // Start of the curve
  { name: "Point 3", value: 21.9 }, // Peak
  { name: "Point 6", value: 21.9 }, // Slight dip
  { name: "Point 7", value: 19.2 }, // End of the curve
];


export const transactionIcons = {
    Receive: tCoin,
    Withdraw: Withdraw,
    Buy: Buy,
    Swap: Swap,
  };
  
 export const transactions = [
    {
      type: "Receive",
      status: "Completed",
      wallet: "bvdw355509*********4gbnwou432m",
      date: "25 Sep 2024",
      amount: "$500.00",
    },
    {
      type: "Withdraw",
      status: "Completed",
      wallet: "bvdw355509*********4gbnwou432m",
      date: "25 Sep 2024",
      amount: "$500.00",
    },
    {
      type: "Swap",
      status: "Failed",
      wallet: "bvdw355509*********4gbnwou432m",
      date: "25 Sep 2024",
      amount: "$500.00",
    },
    {
      type: "Withdraw",
      status: "Pending",
      wallet: "bvdw355509*********4gbnwou432m",
      date: "25 Sep 2024",
      amount: "$500.00",
    },
    {
      type: "Buy",
      status: "Completed",
      wallet: "bvdw355509*********4gbnwou432m",
      date: "25 Sep 2024",
      amount: "$500.00",
    },
    {
      type: "Receive",
      status: "Completed",
      wallet: "bvdw355509*********4gbnwou432m",
      date: "25 Sep 2024",
      amount: "$500.00",
    },
    {
      type: "Withdraw",
      status: "Completed",
      wallet: "bvdw355509*********4gbnwou432m",
      date: "25 Sep 2024",
      amount: "$500.00",
    },
    {
      type: "Swap",
      status: "Failed",
      wallet: "bvdw355509*********4gbnwou432m",
      date: "25 Sep 2024",
      amount: "$500.00",
    },
    {
      type: "Withdraw",
      status: "Pending",
      wallet: "bvdw355509*********4gbnwou432m",
      date: "25 Sep 2024",
      amount: "$500.00",
    },
    {
      type: "Buy",
      status: "Completed",
      wallet: "bvdw355509*********4gbnwou432m",
      date: "25 Sep 2024",
      amount: "$500.00",
    },
  ];
  