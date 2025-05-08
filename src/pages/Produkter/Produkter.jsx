import "../Produkter/Produkter.css"
import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer"
import getProdukter from "../../data/getProdukter"
import { useState,useEffect } from "react"
import Produkt from "../../Component/Produkt/Produkt"
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom"
import useCartStore from "../../store/cartStore"
function Produkter(){
	const [produkter, setProdukter] = useState([]);
	const items = useCartStore((state) => state.items)

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
				<select defaultValue="produkter" >
						<option value="produkter">All produkter</option>
						<option value="Vattenlek">Vattenlek</option>
						<option value="Aktiv lek">Aktiv lek</option>
						<option value="Utomhuslek">Utomhuslek</option>
						<option value="lågt till högt">Pris: lågt till högt</option>
						<option value="högt till lågt">Pris: högt till lågt</option>
						<option value="A-Ö">Namn: A-Ö</option>
						<option value="Ö-A">Namn: Ö-A</option>
				</select></div>
			<div>
				<h1>Sommarleksaker</h1>
				
				<div className="produkter-design-div">
				{produkter.map(item=>(
					<Produkt produkt={item} key={item.id}></Produkt>
				))}
				
		</div>
		<NavLink className="kundvagn" to="/kundvagn">
		<FaShoppingCart size={30} color="black" />
		<span>Kundvagn</span>
		<span>{items.length}</span>
		</NavLink>
			</div>
			<Footer></Footer>
		</div>
	)
}
export default Produkter