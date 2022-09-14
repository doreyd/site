// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const url = process.env.DB_URL;
  res.status(200).json({ url: url });
}
