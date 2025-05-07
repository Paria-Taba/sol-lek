import "../Produkt/Produkt.css"
function Produkt(props){
	return(
		<div className="produkt-div">
			<div className="produkt-img">
				<img src={props.produkt.bild} alt="Bild" />
			</div>
			<div className="div-row">
			<div className="produkt-info">
				<p>{props.produkt.namn}</p>
				<p>Pris : {props.produkt.pris}</p>
				<p>⭐️{props.produkt.beskrivning}⭐️</p>
			</div>
			<div>
				<button>Lägg till kundvagn</button>
				</div>
				</div>
		</div>
	)
}
export default Produkt