import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";

const getProdukter = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "produkter"));
    const produkter = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return produkter;
  } catch (error) {
    console.error("Fel vid hämtning:", error);
    return [];
  }
};

export default getProdukter;
