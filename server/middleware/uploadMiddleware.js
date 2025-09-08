// middleware/uploadMiddleware.js - Handles file uploads before sending to Firebase Storage

import multer from "multer";

// Use memory storage so files are uploaded directly without saving locally
const storage = multer.memoryStorage();
const upload = multer({ storage });

export default upload;
