import { v2 as cloudinary } from 'cloudinary'
import path from 'path'
import multer from 'multer'
import "dotenv/config"
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Use memory storage (no local files)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Helper: upload buffer directly to Cloudinary
const uploadImage = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "uploads" }, // optional folder name
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(fileBuffer);
  });
};

export { upload, uploadImage }