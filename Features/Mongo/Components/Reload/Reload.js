import React, { useState } from "react";
import styles from "./Reload.module.css";
import usePostFetch from "../../Lib/usePostFetch";

export default function Reload() {
  const [customers, setCustomers] = useState(false);
  const [employees, setEmployees] = useState(false);
  const [invoices, setInvoices] = useState(false);

  const reloadCustomers = usePostFetch("reloadCustomers", setCustomers);
  const reloadEmployees = usePostFetch("reloadEmployees", setEmployees);
  const reloadInvoices = usePostFetch("reloadInvoices", setInvoices);

  const clickHandler = () => {
    reloadCustomers();
    reloadEmployees();
    reloadInvoices();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.line}>
          <div className={styles.name}>customers</div>
          <div
            className={styles.result}
            style={{ transform: customers ? "scaleX(1)" : "scaleX(0)" }}
          />
        </div>
        <div className={styles.line}>
          <div className={styles.name}>employees</div>
          <div
            className={styles.result}
            style={{ transform: employees ? "scaleX(1)" : "scaleX(0)" }}
          />
        </div>
        <div className={styles.line}>
          <div className={styles.name}>invoices</div>
          <div
            className={styles.result}
            style={{ transform: invoices ? "scaleX(1)" : "scaleX(0)" }}
          />
        </div>
        <div className={styles.reload} onClick={clickHandler}>
          <div className={styles.launch}>RELOAD DATABASE</div>
        </div>
      </div>
    </div>
  );
}
