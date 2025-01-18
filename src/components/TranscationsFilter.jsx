import React from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";
import Settings from "../assets/Icons/settings.svg";

function TranscationsFilter() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="fw-bold">Transaction History</p>
        <div>
          <InputGroup>
            <Input
              className="border-0"
              style={{ backgroundColor: "#2A2A2A" }}
              placeholder="Search"
            />
            <InputGroupText
              className="border-0"
              style={{ backgroundColor: "#2A2A2A" }}
            >
              <img src={Settings} alt="" />
            </InputGroupText>
          </InputGroup>
        </div>
      </div>
      <div className="d-flex  justify-content-between align-items-center my-4">
        <p>
          Applied Filters: <small className="ms-3">No Filter Applied</small>
        </p>
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
                <g clip-path="url(#clip0_1_9927)">
                  <path
                    d="M8.87297 12.0027H5.31097C3.5963 12 2.2063 10.662 2.2063 9.01133C2.2063 7.36133 3.5963 6.02333 5.31097 6.02333C5.57297 4.84866 6.50697 3.88999 7.76097 3.50799C9.0143 3.12666 10.3983 3.37933 11.3903 4.17466C12.3823 4.96799 12.8316 6.17933 12.5703 7.35399H13.2303C14.1503 7.35399 14.9456 7.89599 15.317 8.68066M13.5396 10.6667V14.6667M13.5396 14.6667L15.5396 12.6667M13.5396 14.6667L11.5396 12.6667"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
}

export default TranscationsFilter;
