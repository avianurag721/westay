import Hotels from "@/models/hotels.model";
import cloudinary from "@/utils/cloudinaryConfig";

export default async function allHotels(req, res) {
  try {
    cloudinary();
    console.log("into hotels");
      const allHotels = Hotels.find({})
      console.log(allHotels)
    if (!allHotels) {
      return res
        .status(401)
        .json({ success: false, message: "hotels not found" });
    }
    console.log("into hotels2");
    return res.status(200).json({
      success: true,
    //   data:
      message: "All Hotels Fetched successfully",
    });
  } catch (error) {
    console.log(error);
  }
}
