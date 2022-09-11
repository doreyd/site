import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../Features/Mongo/Components/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mongo Juice - Doreyd Mehila</title>
        <meta name="theme-color" content="royalblue"></meta>
        <meta
          name="description"
          content="MongoDB all kinds of Data manipulation & CRUD Operations through an easy to use GUI"
        />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Main />
    </div>
  );
}
