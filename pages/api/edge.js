export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req, res) {
  return new Response("Hello world!");
}
