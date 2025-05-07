import "../Produkter/Produkter.css"
import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer"
import getProdukter from "../../data/getProdukter"
import { useState,useEffect } from "react"
import Produkt from "../../Component/Produkt/Produkt"
import { FaShoppingCart } from "react-icons/fa";
function Produkter(){
	const [produkter, setProdukter] = useState([]);

	useEffect(() => {
	  const fetchData = async () => {
		const data = await getProdukter();
		setProdukter(data);
		console.log(data)
	  };
  
	  fetchData();
	}, []);
  
	return(
		<div>
			<Header></Header>
			<div className="sort">
				<select >
						<option value="" selected>All produkter</option>
						<option value="">Vattenlek</option>
						<option value="">Aktiv lek</option>
						<option value="">Utomhuslek</option>
						<option value="">Pris: lågt till högt</option>
						<option value="">Pris: högt till lågt</option>
						<option value="">Namn: A-Ö</option>
						<option value="">Namn: Ö-A</option>
				</select></div>
			<div>
				<h1>Sommarleksaker</h1>
				
				<div className="produkter-design-div">
				{produkter.map(item=>(
					<Produkt produkt={item} key={item.id}></Produkt>
				))}
				
		</div>
		<div className="kundvagn">
		<FaShoppingCart size={30} color="black" />
		<span>Kundvagn</span>
		<span>0</span>
		</div>
			</div>
			<Footer></Footer>
		</div>
	)
}
export default Produkter