import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Data.module.scss";

export const getStaticProps: GetStaticProps = async () => {
  const query = await fetch("http://next-ts-psi.vercel.app/api/hello");
  const data = await query.text();
  return {
    props: {
      data: data,
    },
  };
};

export default function data({ data }: any) {
  return (
    <>
      <Head>
        <title>Statically rendered server-side data</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <style jsx global>
          {`
            body {
              background-color: black;
              color: white;
            }
          `}
        </style>
        <h1>{data}</h1>
        <Link href="/">
          <a className={styles.link}>Go to homepage</a>
        </Link>
      </body>
    </>
  );
}
