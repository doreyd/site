import Head from "next/head";
import styles from "../styles/Home.module.css";
import BluBukMail from "../BluBukMail/BluBukMail";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doreyd Mehila</title>
        <meta name="theme-color" content="royalblue"></meta>
        <meta name="description" content="Doreyd Mehila" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <BluBukMail />
    </div>
  );
}
