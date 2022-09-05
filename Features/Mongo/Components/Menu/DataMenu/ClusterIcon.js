import React, { useState } from "react";
import styles from "./DataMenu.module.css";

import { useDispatch, useSelector } from "react-redux";

export default function ClusterIcon(props) {
  const collectionSelected = useSelector((state) => state.collectionSelected);

  const [color, setColor] = useState(props.color1 || "rgb(37,37,37");
  const dispatch = useDispatch();
  const mouseOverHandler = () => {
    setColor(props.color2 || "green");
  };
  const mouseOutHandler = () => {
    setColor(props.color1 || "rgb(37,37,37");
  };
  const onClick = () => {
    dispatch({ type: "TOGGLE_CLUSTER_MENU" });
  };
  return (
    <div
      className={styles["icon-wrapper"]}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className={styles.icon}
        fill={color}
      >
        <path d="M11.7 46q-2.35 0-4.025-1.675Q6 42.65 6 40.3q0-2.4 1.675-4.05T11.7 34.6q.7 0 1.225.125.525.125 1.075.375l4.25-5.3q-.95-1.15-1.45-2.625t-.25-3.075l-6.05-2.05Q9.75 23.3 8.525 24t-2.825.7q-2.35 0-4.025-1.675Q0 21.35 0 19q0-2.4 1.675-4.05T5.7 13.3q2.4 0 4.05 1.65T11.4 19v.2l6.1 2.1q.9-1.6 2.175-2.45 1.275-.85 2.825-1.2V11.2q-1.95-.55-3.075-2.15Q18.3 7.45 18.3 5.7q0-2.4 1.675-4.05T24 0q2.4 0 4.05 1.65T29.7 5.7q0 1.75-1.15 3.35T25.5 11.2v6.45q1.55.35 2.85 1.2t2.2 2.45l6.05-2.1V19q0-2.4 1.675-4.05T42.3 13.3q2.4 0 4.05 1.65T48 19q0 2.35-1.65 4.025Q44.7 24.7 42.3 24.7q-1.6 0-2.85-.7t-1.95-1.95l-6.05 2.05q.25 1.6-.225 3.075T29.75 29.8L34 35.1q.55-.25 1.075-.375.525-.125 1.225-.125 2.4 0 4.05 1.65T42 40.3q0 2.35-1.65 4.025Q38.7 46 36.3 46q-2.35 0-4.025-1.675Q30.6 42.65 30.6 40.3q0-1 .275-1.8t.775-1.55l-4.25-5.3q-1.6.85-3.425.85-1.825 0-3.425-.85L16.35 37q.5.75.775 1.525.275.775.275 1.775 0 2.35-1.65 4.025Q14.1 46 11.7 46Zm-6-24.3q1.15 0 1.925-.775Q8.4 20.15 8.4 19t-.775-1.925Q6.85 16.3 5.7 16.3t-1.925.775Q3 17.85 3 19t.775 1.925q.775.775 1.925.775Zm6 21.3q1.15 0 1.925-.775.775-.775.775-1.925t-.775-1.925Q12.85 37.6 11.7 37.6t-1.925.775Q9 39.15 9 40.3t.775 1.925Q10.55 43 11.7 43ZM24 8.4q1.15 0 1.925-.775.775-.775.775-1.925t-.775-1.925Q25.15 3 24 3t-1.925.775Q21.3 4.55 21.3 5.7t.775 1.925Q22.85 8.4 24 8.4Zm.05 21.1q1.85 0 3.15-1.325 1.3-1.325 1.3-3.225 0-1.85-1.3-3.15-1.3-1.3-3.2-1.3-1.85 0-3.175 1.3Q19.5 23.1 19.5 25q0 1.85 1.325 3.175Q22.15 29.5 24.05 29.5ZM36.3 43q1.15 0 1.925-.775Q39 41.45 39 40.3t-.775-1.925Q37.45 37.6 36.3 37.6t-1.925.775q-.775.775-.775 1.925t.775 1.925Q35.15 43 36.3 43Zm6-21.3q1.15 0 1.925-.775Q45 20.15 45 19t-.775-1.925Q43.45 16.3 42.3 16.3t-1.925.775Q39.6 17.85 39.6 19t.775 1.925q.775.775 1.925.775ZM24 5.7ZM5.7 19ZM24 25Zm18.3-6ZM11.7 40.3Zm24.6 0Z" />
      </svg>

      <div className={styles["icon-text"]} style={{ color: color }}>
        {"cluster"}
      </div>
    </div>
  );
}
