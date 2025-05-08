import sol from "../../assets/Images/sol-lek.png"
import "../Header/Header.css"
import { NavLink } from "react-router-dom"
function Header(){
	return(
<div className="header">
	<div className="header-img">
	<img src={sol} alt="Sol & Lek Logo" />
	</div>
	<div className="header-button">
	<NavLink to="/">Hem</NavLink>
		<NavLink to="/produkter">Produkter</NavLink>
		<NavLink to="/login">Inloggning</NavLink>
	</div>
</div>
	)
}
export default Header