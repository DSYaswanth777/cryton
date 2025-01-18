import { Button, Container } from "reactstrap";
import SecurityUserIcon from "../assets/NavbarIcons/security-user.svg";
import Language from "../assets/NavbarIcons/language.svg";
import Notification from "../assets/NavbarIcons/notification.svg";
import Profile from "../assets/NavbarIcons/profile.svg";
const Header = () => (
  <Container fluid className="bg-secondary-dark">
    <div className="d-flex justify-content-between align-items-center ps-3 pe-4 py-2  text-white">
      <p className="fs-4 pt-2 d-none d-md-block">Welcome to Cryptron Wallet</p>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex gap-3">
          <Button
            color="danger"
            outline
            className="outlineAccentBtn py-2 rounded-3 d-none d-md-block"
          >
            <img src={SecurityUserIcon} alt="" className="me-1" />
            Unverified
          </Button>

          <img src={Language} alt="" className="me-1 navIcon rounded-3 d-none d-md-block" />
          <img src={Notification} alt="" className="me-1  navIcon rounded-3 d-none d-md-block" />
          <a href="#">
            <img src={Profile} alt="" className="" />
          </a>
          <div className="d-flex flex-column justify-content-center  ">
            <p className="p-0 m-0 fw-bold">Jhon David</p>
            <p className="p-0 m-0 lightText">jdavid@email.com</p>

          </div>
          <img src={Notification} alt="" className="me-1  navIcon rounded-3 d-block d-md-none" />
        </div>
      </div>
    </div>
  </Container>
);

export default Header;
