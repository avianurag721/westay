import dbConnect from "@/DBconnect";
import Razorpay from "razorpay";
import shortid from "shortid";
import Hotel from "@/models/hotels.model";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      dbConnect();
      const razorpay = new Razorpay({
        key_id: process.env.api_key,
        key_secret: process.env.api_secret,
      });

      const hotel = await Hotel.findById(req.body.id);
      if (hotel) {
        const amount = hotel.price;
        const options = {
          amount: (amount * 100).toString(),
          currency: "INR",
          receipt: shortid.generate(),
          payment_capture: 1,
        };

        try {
          const result = await razorpay.orders.create(options);
          // console.log("into payment request", result);
          return res.status(201).json({
            id: result.id,
            currency: result.currency,
            amount: result.amount,
          });
        } catch (err) {
          console.log("into payment request error", err);
          res.status(400).json(err.message);
        }
      }
    }
  } catch (error) {
    res.status(401).json({ success: false, message: error });
  }
}
