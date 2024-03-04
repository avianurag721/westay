import connect from "@/DBconnect"
import Hotel from "@/models/hotels.model"



export default async function GET(req, res) {
    if (req.method !== "GET") {
      return res.status(401).json({success:false,message:"method not allow"})
    }
    try {
      connect()
      const Hotels=await Hotel.find({})
        return res.status(200).json({success:true,message:"Hotel Created Successfully",Hotels})
    } catch (error) {
      console.log("error while getting",error)
    }
  }