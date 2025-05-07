
import './App.css'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Produkter from './pages/Produkter/Produkter'
function App() {


  return (
    <>
     <HashRouter>
		<Routes>
			<Route path='/' element={<Home></Home>}></Route>
			<Route path='/produkter' element={<Produkter></Produkter>}></Route>
		</Routes>

	 </HashRouter>
    </>
  )
}

export default App
