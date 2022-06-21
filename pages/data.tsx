import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const query = await fetch("http://localhost:3000/api/hello");
  const data = await query.text();
  return {
    props: {
      data: data,
    },
  };
};

export default function data({ data }: any) {
  const styles = {
    color: "white",
    background: "black",
  };
  return (
    <>
      <body style={styles}>
        <h1>{data}</h1>
      </body>
    </>
  );
}
