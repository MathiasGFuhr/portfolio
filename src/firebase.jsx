import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsnlbfxpocDHoSlw0EPpknLPg5INW1IBU",
  authDomain: "portfolio-6d4b1.firebaseapp.com",
  projectId: "portfolio-6d4b1",
  storageBucket: "portfolio-6d4b1.firebasestorage.app",
  messagingSenderId: "921141477836",
  appId: "1:921141477836:web:4d27221a4192e094021d69"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };