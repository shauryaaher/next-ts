import { GetStaticProps } from "next";
import Link from "next/link";

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
          <a>Go to homepage</a>
        </Link>
      </body>
    </>
  );
}
