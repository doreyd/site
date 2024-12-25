import React, { useState } from "react";
import styles from "./MyMail.module.css";

import Inbox from "./Inbox";
import Login from "./Login";

export default function MyMail() {
  return (
    <div className={styles.wrapper}>
      {/* <Inbox /> */}
      <Login />
    </div>
  );
}
