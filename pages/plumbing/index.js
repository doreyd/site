import Head from "next/head";
import styles from "../../styles/HomePlumbing.module.css";

// import Main from "../Main/Main";
import PlumbingHome from "../../Websites/Plumbing/PlumbingHome";

export default function Index() {

    console.log('testing console');
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
            <PlumbingHome />
        </div>
    );
}
