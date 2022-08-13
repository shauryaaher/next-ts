import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/ServerSide.module.scss";

export const getServerSideProps: GetServerSideProps = async () => {
  const query = await fetch("http://localhost:3000/api/server");
  const data = await query.text();
  return {
    props: {
      someData: data,
    },
  };
};

type Props = {
  someData: string;
};

export default function serverSide(props: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>Server-side rendered data</title>
      </Head>
      <div>
        <h1>{props.someData}</h1>
        <Link href="/">
          <a className={styles.link}>Go to homepage</a>
        </Link>
      </div>
    </>
  );
}
