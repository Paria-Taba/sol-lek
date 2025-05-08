
import './App.css'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Produkter from './pages/Produkter/Produkter'
import Login from './pages/Login/Login'
function App() {


  return (
    <>
     <HashRouter>
		<Routes>
			<Route path='/' element={<Home></Home>}></Route>
			<Route path='/produkter' element={<Produkter></Produkter>}></Route>
			<Route path='/login' element={<Login></Login>}></Route>
		</Routes>

	 </HashRouter>
    </>
  )
}

export default App
