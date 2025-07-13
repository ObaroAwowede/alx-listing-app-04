import type { NextApiRequest, NextApiResponse } from "next";
type Review = {
  id: string;
  comment: string;
};
const reviewsStore: Record<string, Review[]> = {};  
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (Array.isArray(id) || typeof id !== "string") {
    return res.status(400).json({ error: "Invalid property ID" });
  }

  switch (req.method) {
    case "GET": {
      const reviews = reviewsStore[id] ?? [];
      return res.status(200).json(reviews);
    }

    case "POST": {
      const { comment } = req.body as { comment?: string };
      if (!comment) {
        return res.status(400).json({ error: "Missing `comment` in body" });
      }

      if (!reviewsStore[id]) {
        reviewsStore[id] = [];
      }

      const newReview: Review = {
        id: String(Date.now()), 
        comment,
      };
      reviewsStore[id].push(newReview);

      return res.status(201).json(newReview);
    }

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}