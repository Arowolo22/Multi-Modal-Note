
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js"; 

dotenv.config();

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Routes
app.use("/api/notes", noteRoutes); 

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
