export const config = {
  runtime: "experimental-edge",
};

export default function toTheEdge(req, res) {
  return new Response("Hello world!");
}
