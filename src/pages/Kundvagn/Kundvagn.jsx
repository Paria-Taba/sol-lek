import { NavLink } from "react-router-dom"
import Footer from "../../Component/Footer/Footer"
import Header from "../../Component/Header/Header"
import useCartStore from "../../store/cartStore"
import "../Kundvagn/kundvagn.css"

function Kundvagn(){
	const items = useCartStore((state) => state.items)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const getTotalPrice=useCartStore((state)=>state.getTotalPrice)
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
	return(
		<div>
			<Header></Header>
			{(items.length===0)?<p className="tomt-basket">Du har inga varor i kundvagnen.</p> :(


<div className="shop-main">
				{items.map(item=>(
				<div className="shop-div" key={item.id}>
					<div className="shop-img">
					<img src={item.bild} alt="Bild" /></div>
					<div className="row-div">
						<div className="name-price">
							<p>{item.namn}</p>
					<p>Pris : {item.pris}</p>
		
					</div>
					<div className="edit-button">
						<button onClick={() => removeFromCart(item.id)}>tabort</button>
						<div className="dec-inc">
							<button onClick={()=>increaseQuantity(item.id)}>+</button>
							<span> {item.quantity}</span>
							<button onClick={()=>decreaseQuantity(item.id)}>-</button>
						</div>
					</div>
					
					</div>
					
				
			</div>
			))}

			</div>
			)}
			
			<div className="shop-button">
				<button>Totalt pris : {getTotalPrice()} SEK</button>
				<button>Slutför beställning</button>
				
			</div>
			<div className="back-div">	<NavLink to="/produkter">tillbaka</NavLink></div>
		
			<Footer></Footer>
		</div>
	)
}
export default Kundvagn