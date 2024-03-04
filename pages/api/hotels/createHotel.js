import Hotel from "@/models/hotels.model";
import cloudinary from "cloudinary";
import connect from "@/DBconnect";
import { IncomingForm } from "formidable";

cloudinary.config({
  cloud_name: "dncohypn3",
  api_key: "925154744467128",
  api_secret: "r2tvzGDUsN7FyGQoZP9gS4nJtZA",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function POST(req, res) {
  if (req.method!=="POST") {
    return res.status(401).json({message:"method not allowed"})
  }
  connect()
  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    const hotelName = fields.hotelName[0];
    const address = fields.address[0];
    const price = fields.price[0];
    const description = fields.description[0];
    const policies = fields.policies[0];
    const facilities = fields.facilities[0];
    console.log(hotelName, address, price, description, policies, facilities);
    const fileKeys = Object.keys(files);
    const photos = [];

    try {
      await Promise.all(
        fileKeys.map(async (key) => {
          const file = files[key];
          try {
            const result = await cloudinary.v2.uploader.upload(
              file[0].filepath
            );
            // console.log("Uploaded file:", result);

            // Collect the URL in the array
            photos.push(result.secure_url);
          } catch (uploadError) {
            console.error("Error uploading file to Cloudinary:", uploadError);
            res
              .status(500)
              .json({ error: "Error uploading file to Cloudinary" });
          }
        })
      );

      const result = await Hotel.create({
        hotelName,
        address,
        price,
        description,
        policies,
        facilities,
        photos,
      });
      return res
        .status(200)
        .json({ message: "Hotel Created successfully", photos, result });
    } catch (error) {
      console.error("Error processing files:", error);
      return res.status(500).json({ error: "Internal Server Errordd" });
    }
  });
}

