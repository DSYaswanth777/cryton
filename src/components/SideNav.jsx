import { Nav, NavItem } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";
import LogoText from "../assets/logo-text.png";
import Logo from "../assets/logo-icon.png";
import Wallet from "../assets/NavbarIcons/wallet.svg";
import Send from "../assets/NavbarIcons/send.svg";
import Receive from "../assets/NavbarIcons/receive.svg";
import TransactionHistory from "../assets/NavbarIcons/transcationHistory.svg";
import Swap from "../assets/NavbarIcons/swap.svg";
import AddressBook from "../assets/NavbarIcons/addressBook.svg";
import BuySell from "../assets/NavbarIcons/buySell.svg";
import Logout from "../assets/NavbarIcons/Log-out.svg";
import Settings from "../assets/NavbarIcons/settings.svg";
import SvgComponent from "./SvgComponent";

const navItems = [
  { path: "/", icon: <SvgComponent fill="#CE1A11" />, label: "Dashboard" },
  {
    path: "/wallet",
    icon: <img src={Wallet} alt="" className="nav-icon" />,
    label: "Wallet",
  },
  {
    path: "/send",
    icon: <img src={Send} alt="" className="nav-icon" />,
    label: "Send",
  },
  {
    path: "/receive",
    icon: <img src={Receive} alt="" className="nav-icon" />,
    label: "Receive",
  },
  {
    path: "/swap",
    icon: <img src={Swap} alt="" className="nav-icon" />,
    label: "Swap",
  },
  {
    path: "/address-book",
    icon: <img src={AddressBook} alt="" className="nav-icon" />,
    label: "Address Book",
  },
  {
    path: "/buy-sell",
    icon: <img src={BuySell} alt="" className="nav-icon" />,
    label: "Buy/Sell",
  },
  {
    path: "/transaction-history",
    icon: <img src={TransactionHistory} alt="" className="nav-icon" />,
    label: "Transaction History",
  },
];

const bottomNavItems = [
  {
    path: "/settings",
    icon: <img src={Settings} alt="" className="nav-icon" />,
    label: "Settings",
  },
  {
    path: "/logout",
    icon: <img src={Logout} alt="" className="nav-icon" />,
    label: "Logout",
  },
];

const SideNav = () => {
  const location = useLocation();

  const NavLinkItem = ({ item }) => (
    <NavItem>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `text-white d-flex justify-content-start align-items-center gap-3 nav-link ${
            isActive || (item.path === "/" && location.pathname === "/")
              ? "active"
              : ""
          }`
        }
      >
        {item.icon} {item.label}
      </NavLink>
    </NavItem>
  );

  return (
    <div
      className="bg-secondary-dark text-white d-flex flex-column p-3 sideNav "
      style={{ height: "100vh" }}
    >
      {/* Logo Section */}
      <div className="d-flex justify-content-center align-items-center pt-2 pb-3">
        <img src={Logo} alt="Logo Cryton" />
        <img src={LogoText} alt="Cryton Text" />
      </div>

      <div className="horizontal-line"></div>

      {/* Main Navigation */}
      <Nav vertical className="mt-4 flex-grow-1 gap-2">
        {navItems.map((item, index) => (
          <NavLinkItem key={index} item={item} />
        ))}
      </Nav>

      {/* Bottom Navigation */}
      <div className="mt-auto">
        <Nav vertical className="d-flex flex-column gap-3">
          {bottomNavItems.map((item, index) => (
            <NavLinkItem key={index} item={item} />
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default SideNav;

