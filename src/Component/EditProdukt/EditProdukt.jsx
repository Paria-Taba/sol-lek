import { useState } from "react"
import "../EditProdukt/EditProdukt.css"
function EditProdukt(props){
	const[showEdit,setShowEdit]=useState(false)
	function editHandler(){
		setShowEdit(true)
	}
	function closeHandler(){
		setShowEdit(false)
	}
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
					<button onClick={() => props.onDelete(props.produkt.id)}>Tabort</button>
					<button onClick={editHandler}>Redigera</button>
				</div>
				{showEdit ? (
					<div className="edit-div">
						<label htmlFor="name">Namn: </label>
						<input type="text" placeholder={props.produkt.namn} id="name" />
						<label htmlFor="price">Pris :</label>
					<input type="text" placeholder={props.produkt.pris} id="price" />
					<label htmlFor="beskrivning">Beskrivning: </label>
					<textarea placeholder={props.produkt.beskrivning} rows={7} id="beskrivning"/>
					<button>Save</button>
					<button onClick={closeHandler}>Stäng</button>
					</div>
					
				):null}
			</div>
				</div>
		</div>
	)
}
export default EditProdukt