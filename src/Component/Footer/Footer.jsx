import "../Footer/Footer.css"
import footerImg from "../../assets/Images/footer.png"
function Footer(){
	return(
		<div className="footer">
			<div className="footer-left">
				<p role="img" aria-label="location">📍Sommargatan 12, Göteborg</p>
				<p role="img" aria-label="clock">🕒 Mån–Fre 9–17</p>
                 <p role="img" aria-label="mail">✉️ info@solochlek.se</p>
			</div>
			<div className="footer-right">
				<img src={footerImg} alt="Sol & Lek" />
			</div>

		</div>
	)
}
export default Footer