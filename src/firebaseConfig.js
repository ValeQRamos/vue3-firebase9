import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCK4JBdyQ5CeoV6Iht6JJGaUrlvVIKXL4w",
  authDomain: "vue-3-2023-b4a9d.firebaseapp.com",
  projectId: "vue-3-2023-b4a9d",
  storageBucket: "vue-3-2023-b4a9d.appspot.com",
  messagingSenderId: "18267088735",
  appId: "1:18267088735:web:b1750b92cdc88d9526f8ea",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db };
