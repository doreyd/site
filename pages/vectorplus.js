import Head from "next/head";
import styles from "../styles/Home.module.css";

import Main from "../Features/Vector/Main/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SVG Creator - Doreyd Mehila</title>
        <meta name="theme-color" content="royalblue"></meta>
        <meta
          name="description"
          content="Very easy to use Scalable Vector Graphic (SVG) Designer Tool"
        />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className={styles["main-container"]}>
        <Main />
      </main>
    </div>
  );
}
