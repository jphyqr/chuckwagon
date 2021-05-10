import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chuckwagon Regina</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The Chuckwagon</h1>

        <h2 className={styles.description}>Open Monday May 10th 4pm</h2>

        <p className={styles.description}>Vanilla And Chocolate Softserved</p>
        <p className={styles.description}>Movie Theater Popcorn</p>
        <p className={styles.description}>Loaded Dogs</p>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
