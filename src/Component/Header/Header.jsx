import sol from "../../assets/Images/sol-lek.png"
import "../Header/Header.css"
function Header(){
	return(
<div className="header">
	<div className="header-img">
	<img src={sol} alt="Sol & Lek Logo" />
	</div>
	<div className="header-button">
		<button>Produkter</button>
		<button>Inloggning</button>
	</div>
</div>
	)
}
export default Header