
import { doc, updateDoc } from "firebase/firestore";
import db  from "./firebase";

const updateProdukt = async (id, updatedData) => {
  const produktRef = doc(db, "produkter", id);
  try {
    await updateDoc(produktRef, updatedData);
    console.log("Produkten uppdaterad");
  } catch (error) {
    console.error("Fel vid uppdatering:", error);
  }
};

export default updateProdukt;
