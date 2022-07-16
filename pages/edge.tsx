import { GetStaticProps } from "next";

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
  const veryNiceStyles = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <body style={veryNiceStyles}>
      <h1>{data}</h1>
    </body>
  );
}
