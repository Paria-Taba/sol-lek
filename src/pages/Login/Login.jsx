import { useState } from "react";
import Footer from "../../Component/Footer/Footer"
import Header from "../../Component/Header/Header"
import "../Login/Login.css"
import Joi from "joi";
import { useNavigate } from "react-router-dom";

const schema = Joi.object({
	name: Joi.string().valid('admin').required(),
	pass: Joi.string().valid('12345').required(),
});

function Login(){
	const navigate = useNavigate();


	const [formData, setFormData] = useState({ name: "", pass: "" });
	const [message, setMessage] = useState({ name: "", pass: "" });
	const [css,setCss]=useState({name:"", pass:""})
	const newCss={
		name:"",
		pass:""
	}
const messageError={
	name:"",
	pass:""
}

	function submitButton(){

	const result=schema.validate(formData)
		if(result.error){
		result.error.details.forEach(item=>{
			if(item.context.key==="name"){
				messageError.name="Du behöver fylla i ett giltigt namn."
				newCss.name="invalid"
				
			}else{
				newCss.name="valid"
			}
			if(item.context.key==="pass"){
				messageError.pass="Du behöver fylla i ett giltigt lösenord"
			
			}
		})
		setMessage(messageError)
		setCss(newCss)
	}else {
		setMessage({ name: "", pass: "" });
		setCss({ name: "valid", pass: "valid" });
		navigate("/Admin"); 
	}
	}
	return(
		<div>
		<Header></Header>
		<div>
		<h1>Logga in</h1>
		<div className="login-div">
		<div>
			<label htmlFor="name">Namn :</label>
		<input type="text" id="name" onChange={e=>setFormData({...formData, name:e.target.value})} value={formData.name} className={css.name}/>
		<p className="error">{message.name}</p>
		</div>
		<div>
			<label htmlFor="pass">Lösenord :</label>
		<input type="text" id="pass" onChange={e=>setFormData({...formData, pass:e.target.value})} value={formData.pass} className={css.pass}/>
		<p className="error">{message.pass}</p>
		</div>
		</div>
		</div>
		<div className="login-button">
			<button onClick={submitButton}>inloggning</button>
		</div>
		<Footer></Footer>
		</div>
	)
}
export default Login