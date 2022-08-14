import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  if (req.method !== "GET") {
    return new Response("Nope. Can't use this method.");
  } else {
    return new Response("Hello world!");
  }
}
