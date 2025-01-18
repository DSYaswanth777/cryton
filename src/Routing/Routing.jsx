import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import DashboardPage from "../pages/DashboardPage";
import WalletPage from "../pages/WalletPage";
import SideNav from "../components/SideNav";
import TranscationHistory from '../pages/TranscationHistory';
function Routing() {
  return (
    <Router>
      <div className="d-flex">
        <SideNav />
        <div className="w-100">
          <Header />
          <div className="p-3">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/wallet" element={<WalletPage />} />
              <Route path="/send" element={<DashboardPage />} />
              <Route path="/receive" element={<DashboardPage />} />
              <Route path="/swap" element={<DashboardPage />} />
              <Route path="/address-book" element={<DashboardPage />} />
              <Route path="/buy-sell" element={<DashboardPage />} />
              <Route path="/transaction-history" element={<TranscationHistory />} />
              <Route path="/settings" element={<DashboardPage/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Routing;