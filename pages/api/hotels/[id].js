import connect from "@/DBconnect";
import Hotel from "@/models/hotels.model";

export default async function GET(req, res) {
  console.log("idddd", req.query.id);
  try {
    await connect();
    const hotel = await Hotel.findById(req.query.id);
    console.log("hotel",hotel)
    return res.status(201).json({
      success: true,
      hotel,
      message: "into id section of the api",
    });
  } catch (error) {
      console.log("erroe in id", error);
      return res.status(401).json({success:false,message:"Cant get Hotel "})
  }
}
