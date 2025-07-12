// pages/api/properties/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropertyProps[]>
) {
  res.status(200).json(PROPERTYLISTINGSAMPLE);
}