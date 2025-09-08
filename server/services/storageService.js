// services/storageService.js - Uploads audio files to Firebase Storage

import { bucket } from "../config/db.js";

// Upload file to Firebase Storage
export const uploadFile = async (file, filename) => {
  const blob = bucket.file(filename);

  // Create a stream for upload
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: file.mimetype,
    },
  });

  return new Promise((resolve, reject) => {
    blobStream.on("error", (err) => reject(err));
    blobStream.on("finish", async () => {
      // Make the file publicly accessible
      await blob.makePublic();
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      resolve(publicUrl);
    });
    blobStream.end(file.buffer);
  });
};
