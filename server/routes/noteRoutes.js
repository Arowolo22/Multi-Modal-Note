

import express from "express";
import {
  createNote,
  getNotes,
  deleteNote,
} from "../controllers/noteControllers.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// POST /api/notes - Create a note
router.post("/", upload.single("audio"), createNote);

// GET /api/notes/:userId - Fetch notes for a user
router.get("/:userId", getNotes);

// DELETE /api/notes/:id - Delete a note
router.delete("/:id", deleteNote);

export default router;
