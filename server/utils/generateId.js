// utils/generateId.js - Generate a unique ID for filenames or notes

import { randomBytes } from "crypto";

const generateId = () => randomBytes(8).toString("hex");

export default generateId;
