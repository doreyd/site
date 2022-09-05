import Head from "next/head";
import styles from "../styles/Home.module.css";
import Resume from "../Resume/Resume";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doreyd Mehila</title>
        <meta name="theme-color" content="royalblue"></meta>
        <meta
          name="description"
          content="Doreyd Mehila - Full Stack WebDeveloper - Edmonton, Alberta, Canada"
        />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Resume />
    </div>
  );
}
