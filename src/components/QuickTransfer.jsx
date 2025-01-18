import React from "react";
import People1 from "../assets/Icons/people1.png";
import People2 from "../assets/Icons/people2.png";
import People3 from "../assets/Icons/people3.png";
import People4 from "../assets/Icons/people4.png";
import People5 from "../assets/Icons/people5.png";

const QuickTransfer = () => (
  <div className="mt-3">
    <small className="pt-4 mt- text-start">Quick transfer</small>
    <div className="d-flex justify-content-center align-items-center gap-3 gap-md-4 mt-3">
      {[People1, People2, People3, People4, People5].map((person, index) => (
        <div key={index} className="peopleContainer">
          <img src={person} alt={`Person ${index + 1}`} className="people" />
        </div>
      ))}
      <div className="addIconContainer">
        <div className="addIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M17 9H1M9 1V17V1Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default QuickTransfer;
