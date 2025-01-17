import { Nav, NavItem, NavLink } from "reactstrap";
import LogoText from "../../assets/logo-text.png";
import Logo from "../../assets/logo-icon.png";
import Wallet from "../../assets/NavbarIcons/wallet.svg";
import Send from "../../assets/NavbarIcons/send.svg";
import Receive from "../../assets/NavbarIcons/receive.svg";
import TransactionHistory from "../../assets/NavbarIcons/transcationHistory.svg";
import Swap from "../../assets/NavbarIcons/swap.svg";
import AddressBook from "../../assets/NavbarIcons/addressBook.svg";
import BuySell from "../../assets/NavbarIcons/buySell.svg";
import Logout from "../../assets/NavbarIcons/Log-out.svg";
import Settings from "../../assets/NavbarIcons/settings.svg";
import SvgComponent from "./SvgComponent";
const SideNav = () => (
  <div className="bg-secondary-dark text-white  d-flex flex-column p-3 sideNav " style={{height:"100vh"}}>
    <div className="d-flex justify-content-center align-items-center pt-2 pb-3">
      <img src={Logo} alt="Logo Cryton" />
      <img src={LogoText} alt="Cryton Text" />
    </div>
    <div className="horizontal-line"></div>
    <Nav vertical className="mt-4 flex-grow-1 gap-2">
      <NavItem>
        <NavLink
          href="#"
          className="text-white d-flex justify-content-start align-items-center gap-3 active"
        >
          <SvgComponent fill="#CE1A11" />
          Dashboard
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#"
          className="text-white d-flex justify-content-start align-items-center gap-2"
        >
          <img src={Wallet} alt="" className="nav-icon" /> Wallet
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#"
          className="text-white d-flex justify-content-start align-items-center gap-3"
        >
          <img src={Send} alt="" className="nav-icon" /> Send
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#"
          className="text-white d-flex justify-content-start align-items-center gap-3"
        >
          <img src={Receive} alt="" className="nav-icon" /> Receive
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#"
          className="text-white d-flex justify-content-start align-items-center gap-3"
        >
          <img src={Swap} alt="" className="nav-icon" /> Swap
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#"
          className="text-white d-flex justify-content-start align-items-center gap-3"
        >
          <img src={AddressBook} alt="" className="nav-icon" /> Address Book
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#"
          className="text-white d-flex justify-content-start align-items-center gap-3"
        >
          <img src={BuySell} alt="" className="nav-icon" /> Buy/Sell
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#"
          className="text-white d-flex justify-content-start align-items-center gap-3"
        >
          <img src={TransactionHistory} alt="" className="nav-icon" />
          Transaction History
        </NavLink>
      </NavItem>
    </Nav>
    <div>
      <Nav vertical className="d-flex flex-column gap-3">
        <NavItem>
          <NavLink
            href="#"
            className="text-white d-flex justify-content-start align-items-center gap-3"
          >
            <img src={Settings} alt="" className="nav-icon" /> Settings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            className="text-white d-flex justify-content-start align-items-center gap-3"
          >
            <img src={Logout} alt="" className="nav-icon" /> Logout
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideNav;
