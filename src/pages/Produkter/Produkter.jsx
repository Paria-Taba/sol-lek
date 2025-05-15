import "../Produkter/Produkter.css"
import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer"
import getProdukter from "../../data/getProdukter"
import { useState,useEffect } from "react"
import Produkt from "../../Component/Produkt/Produkt"
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom"
import useCartStore from "../../store/cartStore"
import searchImg from "../../assets/Images/search.png"
function Produkter(){
	const [produkter, setProdukter] = useState([]);
	  const [filter, setFilter] = useState("produkter");
	  const [search,setSearch]=useState("")
	const items = useCartStore((state) => state.items)
 const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
	useEffect(() => {
	  const fetchData = async () => {
		const data = await getProdukter();
		setProdukter(data);
		console.log(data)
	  };
  
	  fetchData();
	}, []);
   const filterProdukter = () => {
    let filtered = [...produkter];
    if (filter === "Vattenlek" || filter === "Aktiv lek" || filter === "Utomhuslek") {
      filtered = produkter.filter(p => p.kategori === filter);
    } else if (filter === "lågt till högt") {
      filtered.sort((a, b) => a.pris - b.pris);
    } else if (filter === "högt till lågt") {
      filtered.sort((a, b) => b.pris - a.pris);
    } else if (filter === "A-Ö") {
      filtered.sort((a, b) => a.namn.localeCompare(b.namn));
    } else if (filter === "Ö-A") {
      filtered.sort((a, b) => b.namn.localeCompare(a.namn));
    }
	 if (search.trim() !== "") {
      filtered = filtered.filter(p =>
        p.namn.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filtered;
  };
function searchHandler(e){
setSearch(e.target.value)
}
	return(
		<div>
			<Header></Header>
			<div className="search">
					<input type="text"   placeholder="Sök..." onChange={searchHandler}/><img src={searchImg} alt="search-icon" />

			</div>
			<div className="sort">
				<select defaultValue="produkter" onChange={handleFilterChange} >
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
				{filterProdukter().map(item=>(
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