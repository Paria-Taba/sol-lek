import { useState } from "react"
import "../EditProdukt/EditProdukt.css"
import updateProdukt from "../../data/updateProdukt"
import { Navigate } from "react-router-dom"



function EditProdukt(props){
	const[showEdit,setShowEdit]=useState(false)
	const [namn, setNamn] = useState(props.produkt.namn);
	const [pris, setPris] = useState(props.produkt.pris);
	const [beskrivning, setBeskrivning] = useState(props.produkt.beskrivning);
	const [url, setUrl] = useState(props.produkt.bild);
	const [kategori, setKategori] = useState(props.produkt.kategori);
	
	
	
	function editHandler(){
		setShowEdit(true)
	}
	function closeHandler(){
		setShowEdit(false)
	}
	async function saveHandler() {
		const updatedData = {
			namn,
			pris,
			beskrivning,
			url,
			kategori,
		};
		
		await updateProdukt(props.produkt.id, updatedData);
		setShowEdit(false);
		Navigate('/admin');
	}
	
	
	return(
		<div className="edit">
		<div className="edit-info">
			{props.produkt.bild ? (
  <img src={props.produkt.bild}  />
) : null}
		<p>{props.produkt.namn}</p>
		<p>Pris : {props.produkt.pris}</p>
		<p>Kategori : {props.produkt.kategori}</p>
		
		<p>⭐️{props.produkt.beskrivning}⭐️</p>
		<div className="edit-button">
		<button onClick={() => props.onDelete(props.produkt.id)}>Ta bort</button>
		<button onClick={editHandler}>Redigera</button>
		</div></div>
		{showEdit ? (
			<div className="edit-div">
			<label htmlFor="name">Namn: </label>
			<input type="text" placeholder={props.produkt.namn} id="name" value={namn} onChange={e=>setNamn(e.target.value)}/>
			<label htmlFor="price">Pris :</label>
			<input type="text" placeholder={props.produkt.pris} id="price" value={pris} onChange={e=>setPris(e.target.value)}/>
			<label htmlFor="kategori">Kategori :</label>
			<input type="text" placeholder={props.produkt.kategori} id="kategori" value={kategori} onChange={e=>setKategori(e.target.value)}/>
			<label htmlFor="url">URL: </label>
			<input type="text" placeholder={props.produkt.bild} id="url" className="url-input" value={url} onChange={e=>setUrl(e.target.value)}/>
			<label htmlFor="beskrivning">Beskrivning: </label>
			<textarea placeholder={props.produkt.beskrivning}  id="beskrivning" value={beskrivning} onChange={e=>setBeskrivning(e.target.value)}/>
			<button onClick={saveHandler}>Save</button>
			<button onClick={closeHandler}>Stäng</button>
			</div>
			
		):null}
		
		
		</div>
	)
}
export default EditProdukt