import "../EditProdukt/EditProdukt.css"
function EditProdukt(props){
	return(
<div className="produkt-div edit">
			<div className="produkt-img">
				<img src={props.produkt.bild} alt="Bild" />
			</div>
			<div className="div-row">
			<div className="produkt-info">
				<p>{props.produkt.namn}</p>
				<p>Pris : {props.produkt.pris}</p>
				<p>⭐️{props.produkt.beskrivning}⭐️</p>
				<div>
					<button>Tabort</button>
					<button>Redigera</button>
				</div>
			</div>
				</div>
		</div>
	)
}
export default EditProdukt