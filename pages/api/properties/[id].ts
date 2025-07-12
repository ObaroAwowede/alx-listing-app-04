import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertyProps | { message: string }>
) {
  const { id } = req.query;

  const prop = PROPERTYLISTINGSAMPLE.find((p) => p.name === id);

  if (!prop) {
    return res.status(404).json({ message: "Property not found" });
  }

  res.status(200).json(prop);
}
