import Head from "next/head";
import styles from "../styles/Home.module.css";
import MyMail from "../MyMail/MyMail";

export default function Inbox() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inbox - Doreyd Mehila</title>
        <meta name="theme-color" content="royalblue"></meta>
        <meta name="description" content="Inbox - Doreyd Mehila" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <MyMail />
    </div>
  );
}
