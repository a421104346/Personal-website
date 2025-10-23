// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase config object - Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBZKRPgxaCL3V6OJP4q-l-z8dYNH9pQQoU",
  authDomain: "personal-website-message-6aa5c.firebaseapp.com",
  projectId: "personal-website-message-6aa5c",
  storageBucket: "personal-website-message-6aa5c.firebasestorage.app",
  messagingSenderId: "194912711721",
  appId: "1:194912711721:web:cf194b4ce20748a720d838",
  measurementId: "G-XLDSRVSZ0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;