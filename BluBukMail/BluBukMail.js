import React, { useRef, useState } from "react";
import usePostFetch from "../Features/Mongo/Lib/usePostFetch";
import styles from "./BluBuk.module.css";

export default function BluBukMail() {
  const [mail, setMail] = useState([]);

  const getMyMail = usePostFetch("getMyMail", setMail);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    getMyMail({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.logger}>
        <input
          ref={usernameRef}
          type="text"
          placeholder="username"
          className={styles.username}
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="password"
          className={styles.password}
        />
        <input
          type="submit"
          className={styles.submit}
          onClick={submitHandler}
        />
      </form>
      <div className={styles.box}>
        {mail.map((msg) => {
          return (
            <div className={styles.line}>
              <div className={styles.email}>{msg.email}</div>
              <div className={styles.message}>{msg.message}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
