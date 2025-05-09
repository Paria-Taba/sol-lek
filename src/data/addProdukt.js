import { collection, addDoc } from "firebase/firestore";
import db  from "./firebase";
const addProdukt = async (nyProdukt) => {
  try {
    const docRef = await addDoc(collection(db, "produkter"), nyProdukt);
    console.log("Ny produkt tillagd med ID:", docRef.id);
  } catch (error) {
    console.error("Fel vid tillägg av produkt:", error);
  }
};

export default addProdukt;
