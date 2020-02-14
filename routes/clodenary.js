const express = require('express');
const multers = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const cloudinary = require('cloudinary')
const uploader = multer({ storage });
cloudinary.config({
    cloud_name: 'virap10',
    api_key: '718528185693492',
    api_secret: 'A8D__TAvChlwtt21dntzaSb9u7E'
  })

  multers.post("/files",uploader.single("imgCollection"),uploader.array('imgCollection', 6), (req,res)=>{
    // const userId = req.user._id;
    const file  = req.file;

    cloudinary.v2.uploader
      .upload_stream({ resource_type: "auto" }, (error, result) => {
        if (error) {
          throw new Error(error);
        }

        const fileData = {
          filename: result.original_filename,
          size: result.bytes,
          ext: result.format,
          url: result.url,
        //   user: userId
        };

})
console.log(fileData,req.file);

})

module.exports = multers