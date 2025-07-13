import type { NextApiRequest, NextApiResponse } from "next";

// i'm using this array to store the booking data
const bookings: Array<Record<string, any>> = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res
      .setHeader("Allow", "POST")
      .status(405)
      .end("Method Not Allowed");
  }
  const bookingData = req.body;
  
  const newBooking = {
    id: bookings.length + 1,
    ...bookingData,
    createdAt: new Date().toISOString(),
  };
  bookings.push(newBooking);
  return res.status(201).json({ success: true, booking: newBooking });
}
