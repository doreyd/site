import React, { useRef, useState } from "react";
import styles from "./Login.module.css";
import Inbox from "./Inbox";

export default function Login() {
  const [data, setData] = useState(null);
  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const clickHandler = (e) => {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((result) => result.json())
      .catch((err) => console.log(err))
      .then((response) => setData(response));
  };

  if (data) {
    return <Inbox data={data}  />;
  }

  return (
    <form className={styles.form}>
      <input
        type="text"
        ref={userRef}
        spellCheck={false}
        placeholder="username"
        className={styles.input}
      />
      <input
        type="password"
        ref={passwordRef}
        spellCheck={false}
        placeholder="password"
        className={styles.input}
      />
      <button onClick={clickHandler} className={styles.submit}>
        SUBMIT
      </button>
    </form>
  );
}
