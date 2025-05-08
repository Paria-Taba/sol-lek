import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer"
import getProdukter from "../../data/getProdukter";
import EditProdukt from "../../Component/EditProdukt/EditProdukt";
import "../Produkter/Produkter.css"
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import"../Admin/Admin.css";
function Admin(){
	const [editProdukt, setEditProdukt] = useState([]);
	
	useEffect(() => {
	  const fetchData = async () => {
		const data = await getProdukter();
		setEditProdukt(data);
	  };
  
	  fetchData();
	}, []);
	return(
<div>
	<><Header></Header>
	
	<div className="produkter-design-div">
				{editProdukt.map(item=>(
					<EditProdukt produkt={item} key={item.id}></EditProdukt>
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