export const config = {
  runtime: "experimental-edge",
};

export default async function toTheEdge(req, res) {
  if (req.method !== "GET") {
    res.json({ hello: "world" });
  } else {
    res.status(200).json({ hello: "world" });
  }
}
