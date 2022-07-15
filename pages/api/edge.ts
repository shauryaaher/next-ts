import { NextRequest } from "next/server";

export default async function toTheEdge(req: NextRequest, res: any) {
  if (req.method !== "GET") {
    res.send({ hello: "world" });
  } else {
    res.send(`HTTP ${405}. Method not allowed`);
  }
}

export const config: Object = {
  runtime: "experimental-edge",
};
