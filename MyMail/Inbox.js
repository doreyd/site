import React, { useState } from "react";
import styles from "./MyMail.module.css";

export default function MyMail(props) {
  const data = props.data;
  const [source, setSource] = useState("doreyd");

  const selectSource = (e) => {
    setSource(e.target.id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["menu-wrapper"]}>
        <div className={styles.menu}>
          <div
            className={source === "doreyd" ? styles.selected : styles.btn}
            id="doreyd"
            onClick={selectSource}
          >
            Doreyd
          </div>
          <div
            className={source === "blubuk" ? styles.selected : styles.btn}
            id="blubuk"
            onClick={selectSource}
          >
            BluBuk
          </div>
          <div
            className={source === "all" ? styles.selected : styles.btn}
            id="all"
            onClick={selectSource}
          >
            All
          </div>
        </div>
      </div>
      <div className={styles.inbox}>
        {data.reverse().map((message) => {
          return source === "all" || message.site === source ? (
            <div key={message._id} className={styles.message}>
              <div className={styles.details}>
                {" "}
                <div className={styles.email}>{`${message.email} from ${
                  message.site
                }`}</div>
                <div className={styles.date}>{message.date}</div>
              </div>
              <div className={styles.content}>{message.message}</div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}
