import "../Produkt/Produkt.css"
import useCartStore from "../../store/cartStore"
function Produkt(props){

	const addToCart = useCartStore((state) => state.addToCart)

	function shopHandler(){
		addToCart(props.produkt)

	}
	return(
		<div className="produkt-div">
			<div className="produkt-img">
				{props.produkt.bild ? (
					<img src={props.produkt.bild} alt="Bild" />
				) : null}
			</div>
			<div className="div-row">
			<div className="produkt-info">
				<p>{props.produkt.namn}</p>
				<p>Pris : {props.produkt.pris}</p>
				<p>⭐️{props.produkt.beskrivning}⭐️</p>
			</div>
			<div>
				<button onClick={shopHandler}>Lägg till kundvagn</button>
				</div>
				</div>
		</div>
	)
}
export default Produkt