import { NextResponse } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function toTheEdge(req, res) {
  if (req.method !== "GET") {
    return NextResponse.json({ hello: "world" });
  }
}
