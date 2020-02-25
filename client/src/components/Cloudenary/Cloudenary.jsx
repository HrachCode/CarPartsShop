const cloudinary = require("cloudinary");

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// cloudinary.v2.uploader
//       .upload_stream({ resource_type: "auto" }, (error, result) => {
//         if (error) {
//           throw new Error(error);
//         }

//         const fileData = {
//           filename: result.original_filename,
//           size: result.bytes,
//           ext: result.format,
//           url: result.url,
//           user: userId
//         };


export default cloudinary;