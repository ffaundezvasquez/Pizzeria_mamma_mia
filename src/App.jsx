import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Header/> */}
      {/* <Home/> */}
      <Cart/>
      {/* <Register/> */}
      {/* <Login/> */}
      <Footer/>
    </>
  )
}

export default App
