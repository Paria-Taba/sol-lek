import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer"
import getProdukter from "../../data/getProdukter";
import deleteProdukt from "../../data/deleteProdukter";
import EditProdukt from "../../Component/EditProdukt/EditProdukt";
import "../Produkter/Produkter.css"
import { useState,useEffect } from "react";
import"../Admin/Admin.css";
import addProdukt from "../../data/addProdukt";




function Admin(){
	const[showNemItem,setShowNewItem]=useState(false)
	const [editProdukt, setEditProdukt] = useState([]);
const [newItem,setNewItem]=useState({
	namn:"",
	pris:"",
	url:"",
	kategori:"",
	beskrivning:""
})

	const fetchData = async () => {
		const data = await getProdukter();
		setEditProdukt(data);
	  };
	  
	  useEffect(() => {
		fetchData();
	  }, []);
	  
	
	 const handleDelete = async (id) => {
  console.log("Försöker ta bort produkt med id:", id);
  await deleteProdukt(id);
  fetchData();
};
function showItemHandler(){
	setShowNewItem(true)
}
async function saveNewItemHandler() {
	const nyProdukt = {
	  namn: newItem.namn,
	  pris: newItem.pris,
	  kategori: newItem.kategori,
	  bild: newItem.url,
	  beskrivning: newItem.beskrivning,
	};

	await addProdukt(nyProdukt);
	fetchData(); 
	setShowNewItem(false);
	setNewItem({ namn: "", pris: "", url: "", kategori: "", beskrivning: "" }); 
}
function closeNewItem(){
	setShowNewItem(false)
}

	return(
<div>
	<><Header></Header>
		<div className="new-product">
			<button onClick={showItemHandler}>Lägg till ny produkt</button>
		</div>
		{showNemItem ? (
			<div className="new-item">
				<label htmlFor="name">Namn :</label>
				<input type="text" id="name" value={newItem.namn} onChange={(e) => setNewItem({ ...newItem, namn: e.target.value })}
				/>
				<label htmlFor="price">Pris :</label>
				<input type="text" id="price" value={newItem.pris} onChange={(e) => setNewItem({ ...newItem, pris: e.target.value })}/>
				<label htmlFor="kategori">Kategori :</label>
				<input type="text" id="kategori" value={newItem.kategori} onChange={(e) => setNewItem({ ...newItem, kategori: e.target.value })}/>
				<label htmlFor="url">URL :</label>
				<input type="text" id="url" value={newItem.url} onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}/>
				<label htmlFor="beskrivning">Beskrivning :</label>
				<textarea  id="beskrivning" value={newItem.beskrivning} onChange={(e) => setNewItem({ ...newItem, beskrivning: e.target.value })}></textarea>
				<div>
					<button onClick={saveNewItemHandler}>Lägg till</button>
				<button onClick={closeNewItem}>Stäng</button>
				</div>
				
			</div>
		) : null}
	<div className="produkter-edit">
				{editProdukt.map(item=>(
					<EditProdukt produkt={item} key={item.id} onDelete={handleDelete}></EditProdukt>
				))}
				
		</div>
	
	<Footer></Footer>
	
	</>
</div>
	)
}
export default Admin