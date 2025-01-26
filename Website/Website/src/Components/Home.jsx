import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Product1 from './Product1'
// import Category from './Category'
import Products from './Products'
import News from './News'
import Footer from './Footer'
function Home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Product1/>
     
      <Products/>
      <News/>
      <Footer/>
    </div>
  )
}

export default Home
