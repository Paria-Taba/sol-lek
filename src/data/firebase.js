
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-oJckyviLRDUwFFhWCInrUMc1BT5ss8o",
  authDomain: "sol-lek.firebaseapp.com",
  projectId: "sol-lek",
  storageBucket: "sol-lek.firebasestorage.app",
  messagingSenderId: "117559427583",
  appId: "1:117559427583:web:064314a8ba27b6e17467ca",
  measurementId: "G-XG0CHGE2VG"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db ;