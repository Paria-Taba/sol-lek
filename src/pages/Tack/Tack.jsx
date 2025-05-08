import { NavLink } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import "../Tack/Tack.css"

function Tack(){
	return(<><Header>
		</Header>
		<div className="tack-div">
			<p>Din beställning är mottagen!</p>
			<div className="tack-in">
				<p>Tack för att du handlade hos oss! Vi jobbar på att behandla din beställning och den kommer att skickas så snart som möjligt.</p>
			</div>
			<NavLink to="/">Start sida</NavLink>
		</div>
		<Footer></Footer>
	</>
		
	)
}
export default Tack