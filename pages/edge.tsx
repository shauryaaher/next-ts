import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Edge.module.scss";

export const getStaticProps: GetStaticProps = async () => {
  const req = await fetch("http://next-ts-psi.vercel.app/api/edge");
  const data = await req.text();
  return {
    props: {
      data: data,
    },
  };
};

export default function Edge({ data }: any): JSX.Element {
  return (
    <>
    <Head>
      <title>Statically generated content from an Edge Function</title>
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
