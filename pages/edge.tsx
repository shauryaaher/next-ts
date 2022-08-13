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

type Data = {
  data: string;
};

export default function Edge(props: Data): JSX.Element {
  return (
    <>
      <Head>
        <title>Statically generated content from an Edge Function</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1>{props.data}</h1>
      <Link href="/">
        <a className={styles.link}>Go to homepage</a>
      </Link>
    </>
  );
}
