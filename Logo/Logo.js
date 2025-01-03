import React from "react";
import styles from "./Logo.module.css";

export default function Logo(props) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="transparent"
      stroke={props.color}
      strokeDasharray="170"
      style={props.style}
      height={props.size ? props.size : "60"}
      width={props.size ? props.size : "60"}
    >
      <path d="M24 44 6 33.7V13.75L24 4l18 9.75V33.7Zm-5.7-24.9q1.15-1.15 2.625-1.875Q22.4 16.5 24 16.5t3.075.725q1.475.725 2.625 1.875l7.65-4.5L24 7.5l-13.35 7.1Zm4.2 20.6v-8.35q-2.6-.7-4.3-2.725Q16.5 26.6 16.5 24q0-.5.05-1.05t.3-1.2L9 17.1v14.85ZM24 28.5q1.9 0 3.2-1.325Q28.5 25.85 28.5 24q0-1.9-1.3-3.2-1.3-1.3-3.2-1.3-1.85 0-3.175 1.3Q19.5 22.1 19.5 24q0 1.85 1.325 3.175Q22.15 28.5 24 28.5Zm1.5 11.2L39 31.95V17.1l-7.85 4.65q.25.7.3 1.225.05.525.05 1.025 0 2.6-1.7 4.625t-4.3 2.725Z" />
    </svg>
  );
}
