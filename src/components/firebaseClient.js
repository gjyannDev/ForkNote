import { initializeApp } from "firebase/app";
import { collection, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5EtQXxEUYfKKVodUMASZDHObZN9vJ9BY",
  authDomain: "forknote-75fb0.firebaseapp.com",
  projectId: "forknote-75fb0",
  storageBucket: "forknote-75fb0.firebasestorage.app",
  messagingSenderId: "211052727613",
  appId: "1:211052727613:web:08ed47e5238276e5368954",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const colRef = collection(db, "custom_recipes");
export default app;
