import cloudinary from "cloudinary";

const cloudinaryConfig = () => {
    cloudinary.config({ 
        cloud_name: 'dncohypn3', 
        api_key: '925154744467128', 
        api_secret: 'r2tvzGDUsN7FyGQoZP9gS4nJtZA' 
      });
}



export default cloudinaryConfig