import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";
import produktKategorier from "./data";

const uploadData = async () => { for (const kategoriObj of produktKategorier) {
    const kategori = kategoriObj.kategori;
    for (const produkt of kategoriObj.produkter) {
      try {
        await addDoc(collection(db, "produkter"), {
          ...produkt,
          kategori: kategori
        });
        console.log(`Produkt "${produkt.namn}" tillagd i kategori "${kategori}"`);
      } catch (error) {
        console.error("Fel vid uppladdning:", error);
      }
    }
  }
  };
uploadData();
export default uploadData;
