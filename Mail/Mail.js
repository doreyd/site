	import React, { useState } from "react";
import styles from "./Mail.module.css";
import { useSelector, useDispatch } from "react-redux";

export default function Mail() {
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

 
  const [isEmail, setIsEmail] = useState(true);
  const [isMessage, setIseMessage] = useState(true);

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateMessage = (message) => (message ? true : false);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsEmail(validateEmail(email));
    setIseMessage(validateMessage(message));
    if (validateEmail(email) && message) {
      fetch("/api/sendmessage", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          message: message,
        }),
      }).then((res) => {
        setEmail("");
        setMessage("");
        dispatch({ type: "TOGGLE_MAIL" });
      });
    }
  };

  const { showMail } = useSelector((state) => state);

  const closeMailHandler = () => {
    dispatch({ type: "TOGGLE_MAIL" });
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmail(validateEmail(e.target.value));
  };

  const onMessageChange = (e) => {
    setMessage(e.target.value);
    setIseMessage(e.target.value);
  };

  return (
    <form
      className={styles.mail}
      style={{
        height: showMail ? "100vh" : "0vh",
        top: showMail ? "0vh" : "-100vh",
      }}
    >
      <div className={styles.header}>
        Thank you for contacting us
        <svg
          className={styles.close}
          onClick={closeMailHandler}
          viewBox="0 0 48 48"
        >
          <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
        </svg>
      </div>
      <input
        type="email"
        spellCheck={false}
        onChange={onEmailChange}
        className={styles.email}
        style={{ background: isEmail ? "rgb(2, 39, 75)" : "rgb(112, 4, 31)" }}
        placeholder="Your Email"
      />
      <textarea
        spellCheck={false}
        onChange={onMessageChange}
        className={styles.message}
        style={{ background: isMessage ? "rgb(2, 39, 75)" : "rgb(112, 4, 31)" }}
        placeholder="Your message here..."
      />
      <div className={styles["send-wrapper"]}>
        <button className={styles.send} onClick={submitHandler}>
          SEND
        </button>
      </div>
    </form>
  );
}
