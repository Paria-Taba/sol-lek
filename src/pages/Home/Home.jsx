import Header from "../../Component/Header/Header";
import "../Home/Home.css"
import sol from "../../assets/Images/sol-1.png"
import karta from "../../assets/Images/karta.png"
import Footer from "../../Component/Footer/Footer";

function Home(){
	return(
		<div>
		<Header></Header>
		<h1>Välkommen till Sol & Lek </h1>
		<div className="main-1">
		<div><p>Sol & Lek är din sommarbutik online! Hos oss hittar du roliga, färgglada och prisvärda sommarleksaker för barn i alla åldrar – perfekta för strand, trädgård och park. Vi brinner för lek, rörelse och kreativitet i solen!</p>
		<p className="p-main-1">Upptäck sommarens roligaste leksaker hos Sol & Lek – en färgglad webbshop fylld med vattenpistoler, strandbollar, hopprep, sandlådekit och mycket mer! Hos oss hittar du produkter som inspirerar till lek, rörelse och glädje i solen – för både stora och små.</p></div>
		<div className="main-1-img">
		<img src={sol} alt="Sol & Lek" />
		</div>
		
		</div>
		<div className="main-2">
		<div className="main-2-blue">
		
		<p role="img" aria-label="clock">🕒 Öppettider : Måndag – Fredag: 09.00 – 17.00 & Lördag – Söndag: Stängt</p>
		<p role="img" aria-label="phone">📞 Telefon: 031–123 456</p>
		<p role="img" aria-label="mail">✉️ E-post: info@solochlek.se</p>
		</div>
		<div className="main-2-img">
		<img src={karta} alt="Karta" />
		</div>
		</div>
		<div className="main-3">
			<p>  Är du administratör?
			</p>
			<button>Logga in</button>
		</div>
		<Footer></Footer>
		
		</div>
	)
}
export default Home;