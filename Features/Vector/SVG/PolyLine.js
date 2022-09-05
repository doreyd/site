import React from "react";

export default function Circle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill={props.fill}
      className={props.className}
    >
      <title>Add a Multi-angled Shape</title>
      <path d="M5 23 L24 14 L14 4 Z" />
      <path d="M5 23 L24 14 L14 4 Z" />
    </svg>
  );
}
