// src/firebaseConfig.jsx

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCys4ZldNZRzTnrLjBgFU5wCIg_OG8kExg",
  authDomain: "aifa-b45e1.firebaseapp.com",
  projectId: "aifa-b45e1",
  storageBucket: "aifa-b45e1.appspot.com",
  messagingSenderId: "699716612545",
  appId: "1:699716612545:web:b69386200ca8159e2d7f40",
  measurementId: "G-HDHBW5N3LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app); // Make sure to export the storage object
