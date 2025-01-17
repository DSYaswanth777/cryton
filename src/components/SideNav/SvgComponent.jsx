import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#fff"}  // Use the fill prop, default to #fff if not provided
      fillRule="evenodd"
      d="M9 .231c-.761 0-1.508.21-2.16.604L2.675 3.36A4.167 4.167 0 0 0 .667 6.923v5.243a4.167 4.167 0 0 0 4.166 4.167h8.334a4.167 4.167 0 0 0 4.166-4.166V6.921a4.168 4.168 0 0 0-2.007-3.562L11.16.835A4.167 4.167 0 0 0 9 .23ZM7.704 2.26a2.5 2.5 0 0 1 2.592 0l4.166 2.525a2.5 2.5 0 0 1 1.205 2.137v5.244a2.5 2.5 0 0 1-2.5 2.5h-.834v-2.5a3.333 3.333 0 0 0-6.666 0v2.5h-.834a2.5 2.5 0 0 1-2.5-2.5V6.923a2.5 2.5 0 0 1 1.205-2.138L7.704 2.26Zm2.475 8.728c.312.313.488.737.488 1.178v2.5H7.333v-2.5a1.667 1.667 0 0 1 2.846-1.178Z"
      clipRule="evenodd"
    />
  </svg>
)

export default SvgComponent;
