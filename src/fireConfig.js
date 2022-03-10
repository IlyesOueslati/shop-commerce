import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL6HpwY6w0obJXmXYmv8aKSN0iAF02X1s",
  authDomain: "firecommerce-436f0.firebaseapp.com",
  projectId: "firecommerce-436f0",
  storageBucket: "firecommerce-436f0.appspot.com",
  messagingSenderId: "1071200048908",
  appId: "1:1071200048908:web:1be635480be34426f11b29",
  measurementId: "G-XDR8ZK6TYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)

export default fireDB