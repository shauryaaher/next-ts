export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req, res) {
  return new Response("This data was statically generated by Next.js during build time.");
}