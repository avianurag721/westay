import cloudinary from "cloudinary";
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

export default function handler(req, res) {
  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const fileKeys = Object.keys(files);
    const uploadedUrls = [];

    try {
      await Promise.all(
        fileKeys.map(async (key) => {
            const file = files[key];
            console.log(file)
          try {
            const result = await cloudinary.v2.uploader.upload(file[0].filepath);
            console.log("Uploaded file:", result);

            // Collect the URL in the array
            uploadedUrls.push(result.secure_url);
          } catch (uploadError) {
            console.error("Error uploading file to Cloudinary:", uploadError);
            res
              .status(500)
              .json({ error: "Error uploading file to Cloudinary" });
          }
        })
      );

      // Send all URLs in the response
      res
        .status(200)
        .json({ message: "Files uploaded successfully", uploadedUrls });
    } catch (error) {
      console.error("Error processing files:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
}
