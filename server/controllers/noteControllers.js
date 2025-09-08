// controllers/noteController.js - Handles CRUD for notes (text + audio)

import { db } from "../config/db.js";
import { uploadFile } from "../services/storageService.js";
import generateId from "../utils/generateId.js";

// @desc Create a new note
export const createNote = async (req, res) => {
  try {
    const { title, content, userId } = req.body; // Extract text fields
    let audioUrl = null;

    // ✅ Validation: check required fields
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    // If audio file is uploaded, push to Firebase Storage
    if (req.file) {
      const filename = `${generateId()}-${req.file.originalname}`;
      audioUrl = await uploadFile(req.file, filename);
    }

    // Create new note reference
    const newNoteRef = db.ref("notes").push();

    // Build note object (⚡ only include non-undefined fields)
    const noteData = {
      id: newNoteRef.key,
      title,
      content,
      audioUrl: audioUrl || null, // null if no audio
      createdAt: new Date().toISOString(),
    };

    // Attach userId ONLY if provided
    if (userId) {
      noteData.userId = userId;
    }

    // Save to Realtime Database
    await newNoteRef.set(noteData);

    res.status(201).json({
      message: "Note created successfully",
      note: noteData,
    });
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ error: error.message });
  }
};

// @desc Get all notes for a user
export const getNotes = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const snapshot = await db
      .ref("notes")
      .orderByChild("userId")
      .equalTo(userId)
      .once("value");

    if (!snapshot.exists()) {
      return res.status(200).json([]);
    }

    res.json(Object.values(snapshot.val()));
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ error: error.message });
  }
};

// @desc Delete a note by ID
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Note ID is required" });
    }

    await db.ref(`notes/${id}`).remove();

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: error.message });
  }
};
