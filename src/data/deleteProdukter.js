import { doc, deleteDoc } from "firebase/firestore";
import db from "./firebase";

const deleteProdukt = async (produktId) => {
  try {
    const produktRef = doc(db, "produkter", produktId);
    await deleteDoc(produktRef);
  } catch (error) {
    console.error("Fel vid borttagning:", error);
  }
};

export default deleteProdukt;
