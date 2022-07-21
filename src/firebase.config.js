import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFV7l0aC42B1fJv0lhDL2d07qwpbFKmEg",
  authDomain: "react-crud-5ca78.firebaseapp.com",
  projectId: "react-crud-5ca78",
  storageBucket: "react-crud-5ca78.appspot.com",
  messagingSenderId: "268397592193",
  appId: "1:268397592193:web:7ad3b952e29b78ce561780",
  measurementId: "G-ZCW424GST3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
