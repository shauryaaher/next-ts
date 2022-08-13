import { NextApiRequest, NextApiResponse } from "next";

export default function server(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res
      .status(405)
      .send("You can't use this HTTP method. Only GET requests are allowed.");
  } else {
    res
      .status(200)
      .send(
        "Do you know that Quantum Computing is exponentially faster than classical computing?"
      );
  }
}
