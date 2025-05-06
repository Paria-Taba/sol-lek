import Header from "../../Component/Header/Header";
import "../Home/Home.css"
import sol from "../../assets/Images/sol-1.png"

function Home(){
	return(
		<div>
			<Header></Header>
			<h1>Välkommen till Sol & Lek </h1>
			<div className="main-1">
				<div><p>Sol & Lek är din sommarbutik online! Hos oss hittar du roliga, färgglada och prisvärda sommarleksaker för barn i alla åldrar – perfekta för strand, trädgård och park. Vi brinner för lek, rörelse och kreativitet i solen!</p></div>
				<div className="main-1-img">
					<img src={sol} alt="Sol & Lek" />
				</div>

			</div>
		</div>
	)
}
export default Home;