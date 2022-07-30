import { GetStaticProps } from "next";
import Link from "next/link";
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
  );
}
