
import React from "react";
import styles from "../Menu.module.css";

export default function Deals() {
    return (
        <div
            className={styles.button}
        >
            <svg xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                className={styles.svg}
                width="24px"
                fill="#000000">
                <path d="M446.75-80q-11.25 0-22.5-4.25T404-97L98-404q-9-8-13.5-19.5T80-446.25q0-11.25 4.3-22.5Q88.61-480 98-489l373-373q8.3-8.25 19.61-13.13Q501.93-880 514-880h307q24.75 0 42.38 17.62Q881-844.75 881-820v306q0 12.09-5 23.04Q871-480 863-472L489-97q-9 8-20 12.5T446.75-80ZM445-138l376-378v-304H514L139-445l306 307Zm271-526q21 0 36.5-15.5T768-716q0-21-15.5-36.5T716-768q-21 0-36.5 15.5T664-716q0 21 15.5 36.5T716-664ZM480-479Z" />
            </svg>
            Deals
        </div>
    );
}







