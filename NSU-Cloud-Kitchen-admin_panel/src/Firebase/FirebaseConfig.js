// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBstqun9iAHdWjnwKnsZf0c4yjvXj7HApc",
  authDomain: "foodapp1-55d5a.firebaseapp.com",
  projectId: "foodapp1-55d5a",
  storageBucket: "foodapp1-55d5a.appspot.com",
  messagingSenderId: "398769872242",
  appId: "1:398769872242:web:f71e9758427ca3af8d91eb",
  measurementId: "G-GL2MPRQBQZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { storage, db };
