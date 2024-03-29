import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
        <meta
          name="description"
          content="A Next TS site with some examples of how to use its cool features"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            Welcome to a <a href="https://nextjs.org">Next.ts</a> demo project!
          </h1>

          <p className={styles.description}>
            Getting started (this is for developers only) <br />
            <code className={styles.code}>
              $ git clone{" "}
              <Link href="https://github.com/shauryaaher/next-ts">
                <a className={styles.link}>
                  https://github.com/shauryaaher/next-ts
                </a>
              </Link>
            </code>
          </p>
        </div>
        <Link href="/realtime">
          <a className={styles.link}>Realtime</a>
        </Link>
        <Link href="/time">
          <a className={styles.link}>Time</a>
        </Link>
        <Link href="/data">
          <a className={styles.link}>Data</a>
        </Link>
        <Link href="/edge">
          <a className={styles.link}>Edge (uses getStaticProps())</a>
        </Link>
        <Link href="/server-side">
          <a className={styles.link}>Server-side (uses getServerSideProps())</a>
        </Link>
        <Link href="/api/edge">
          <a className={styles.link}>Edge API handler</a>
        </Link>
        <Link href="/api/hello">
          <a className={styles.link}>Serverless Function hello</a>
        </Link>
        <Link href="/api/server">
          <a className={styles.link}>Serverless Function server</a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
