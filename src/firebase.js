import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2uFmFQreijsVMFYkN1_aGY70SvhFyPhw",
  authDomain: "after-ruins-archive.firebaseapp.com",
  projectId: "after-ruins-archive",
  storageBucket: "after-ruins-archive.firebasestorage.app",
  messagingSenderId: "238558313761",
  appId: "1:238558313761:web:3c76cbd301a4c711949260"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);