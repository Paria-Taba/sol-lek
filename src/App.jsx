
import './App.css'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Produkter from './pages/Produkter/Produkter'
import Login from './pages/Login/Login'
import Kundvagn from './pages/Kundvagn/Kundvagn'
import Admin from './pages/Admin/Admin'
import Tack from './pages/Tack/Tack'
function App() {


  return (
    <>
     <HashRouter>
		<Routes>
			<Route path='/' element={<Home></Home>}></Route>
			<Route path='/produkter' element={<Produkter></Produkter>}></Route>
			<Route path='/login' element={<Login></Login>}></Route>
			<Route path='/kundvagn' element={<Kundvagn></Kundvagn>}></Route>
			<Route path='/admin' element={<Admin></Admin>}></Route>
			<Route path='/tack' element={<Tack></Tack>}></Route>
		</Routes>

	 </HashRouter>
    </>
  )
}

export default App
