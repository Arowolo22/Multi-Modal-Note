
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmZJqHsBrFAnjl5nfh_HIrkipUXRCXArw",
  authDomain: "multi-modal-note-app.firebaseapp.com",
  databaseURL:
    "https://multi-modal-note-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "multi-modal-note-app",
  storageBucket: "multi-modal-note-app.firebasestorage.app",
  messagingSenderId: "64092243519",
  appId: "1:64092243519:web:49f8b1958c54f67fa11a8a",
  measurementId: "G-MCFXZFF27H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;

