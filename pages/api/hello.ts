// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    res.status(405).send({
      data: `HTTP error ${405}. Method not allowed`,
    });
    throw new Error(`HTTP ${405}. Method not allowed`);
  } else {
    res.status(200).send({
      data: "Hello World",
    });
  }
}
