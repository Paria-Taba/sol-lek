import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer"
import getProdukter from "../../data/getProdukter";
import deleteProdukt from "../../data/deleteProdukter";
import EditProdukt from "../../Component/EditProdukt/EditProdukt";
import "../Produkter/Produkter.css"
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import"../Admin/Admin.css";




function Admin(){
	const [editProdukt, setEditProdukt] = useState([]);

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


	return(
<div>
	<><Header></Header>
	
	<div className="produkter-design-div">
				{editProdukt.map(item=>(
					<EditProdukt produkt={item} key={item.id} onDelete={handleDelete}></EditProdukt>
				))}
				
		</div>
		<div className="new-product">
			<NavLink>Lägg till ny produkt</NavLink>
		</div>
	<Footer></Footer>
	
	</>
</div>
	)
}
export default Admin