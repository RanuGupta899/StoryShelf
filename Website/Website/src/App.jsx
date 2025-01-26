
import './App.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Cart from './Components/Cart'
import Contact from './Components/Contact'
import Product1 from './Components/Product1'
 import Products from './Components/Products'
 import Productdetails from './Components/Productdetails'
 import BookCategory from './Components/BookCategory'
function App() {

  return (
    <>

<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Product1" element={<Product1/>}/>
    <Route path="/Products" element={<Products/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Productdetails' element={<Productdetails/>}/>
    <Route path='/bookcategory' element={<BookCategory/>}/>
  </Routes>
  </Router>   
   </>
  )
}

export default App
