import React, { useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputGroupText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Settings from "../assets/Icons/settings.svg";

const TransactionsFilter = ({ onFilterChange, onSearch }) => {
  // State for dropdown toggles
  const [typeDropdown, setTypeDropdown] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [dateDropdown, setDateDropdown] = useState(false);

  // State for active filters
  const [activeFilters, setActiveFilters] = useState({
    type: "",
    status: "",
    date: "",
    search: "",
  });

  // Handle search input
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setActiveFilters((prev) => ({ ...prev, search: searchValue }));
    onSearch(searchValue);
  };

  // Handle filter selection
  const handleFilterSelect = (filterType, value) => {
    setActiveFilters((prev) => ({ ...prev, [filterType]: value }));
    onFilterChange({ ...activeFilters, [filterType]: value });
  };

  // Clear all filters
  const clearFilters = () => {
    const resetFilters = {
      type: "",
      status: "",
      date: "",
      search: "",
    };
    setActiveFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  // Helper function to display active filters
  const getActiveFiltersText = () => {
    const filters = [];
    if (activeFilters.type) filters.push(`Type: ${activeFilters.type}`);
    if (activeFilters.status) filters.push(`Status: ${activeFilters.status}`);
    if (activeFilters.date) filters.push(`Date: ${activeFilters.date}`);
    return filters.length ? filters.join(", ") : "No Filter Applied";
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="fw-bold">Transaction History</p>
        <div className="d-flex gap-2 flex-column">
          <InputGroup>
            <Input
              className="border-0"
              style={{ backgroundColor: "#2A2A2A" }}
              placeholder="Search wallet"
              value={activeFilters.search}
              onChange={handleSearch}
            />
            <InputGroupText
              className="border-0"
              style={{ backgroundColor: "#2A2A2A" }}
            >
              <img src={Settings} alt="" />
            </InputGroupText>
          </InputGroup>
          <div className="d-flex gap-3 mt-2">
            <Dropdown
              isOpen={typeDropdown}
              toggle={() => setTypeDropdown(!typeDropdown)}
            >
              <DropdownToggle className="bg-secondary-dark border-danger">
                Transaction Type
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => handleFilterSelect("type", "Receive")}
                >
                  Receive
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleFilterSelect("type", "Withdraw")}
                >
                  Withdraw
                </DropdownItem>
                <DropdownItem onClick={() => handleFilterSelect("type", "Buy")}>
                  Buy
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleFilterSelect("type", "Swap")}
                >
                  Swap
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown
              isOpen={statusDropdown}
              toggle={() => setStatusDropdown(!statusDropdown)}
            >
              <DropdownToggle className="bg-secondary-dark border-danger">Status</DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => handleFilterSelect("status", "Completed")}
                >
                  Completed
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleFilterSelect("status", "Pending")}
                >
                  Pending
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleFilterSelect("status", "Failed")}
                >
                  Failed
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown
              isOpen={dateDropdown}
              toggle={() => setDateDropdown(!dateDropdown)}
            >
              <DropdownToggle className="bg-secondary-dark border-danger">Date</DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => handleFilterSelect("date", "Last 7 days")}
                >
                  Last 7 days
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleFilterSelect("date", "Last 30 days")}
                >
                  Last 30 days
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleFilterSelect("date", "Last 90 days")}
                >
                  Last 90 days
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center my-4">
        <div className="d-flex align-items-center">
          <p className="mb-0">
            Applied Filters:{" "}
            <small className="ms-3">{getActiveFiltersText()}</small>
          </p>
          {getActiveFiltersText() !== "No Filter Applied" && (
            <Button
              color="link"
              className="text-danger ms-3 p-0"
              onClick={clearFilters}
            >
              Clear All
            </Button>
          )}
        </div>
        <div>
          <Button
            color="danger"
            outline
            className="outlineAccentBtn py-2 rounded-3 text-white d-flex justify-content-center align-items-center"
          >
            <span className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <g clipPath="url(#clip0_1_9927)">
                  <path
                    d="M8.87297 12.0027H5.31097C3.5963 12 2.2063 10.662 2.2063 9.01133C2.2063 7.36133 3.5963 6.02333 5.31097 6.02333C5.57297 4.84866 6.50697 3.88999 7.76097 3.50799C9.0143 3.12666 10.3983 3.37933 11.3903 4.17466C12.3823 4.96799 12.8316 6.17933 12.5703 7.35399H13.2303C14.1503 7.35399 14.9456 7.89599 15.317 8.68066M13.5396 10.6667V14.6667M13.5396 14.6667L15.5396 12.6667M13.5396 14.6667L11.5396 12.6667"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_9927">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.873047)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Download CSV
          </Button>
        </div>
      </div>
    </>
  );
};

export default TransactionsFilter;
