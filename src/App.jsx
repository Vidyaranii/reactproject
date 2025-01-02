



import React, { useState } from 'react'
import Navbar from './components/navbar/nav'
// import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeorder/order'
import Footer from './components/footer/footer'
import LoginPopup from './components/loginpopup/login'
import { Route, Routes } from 'react-router-dom'

const App = () => {
const [showLogin,setShowLogin]=useState(false)

  return (
    <>   
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    
    <Footer/>
    </>
 
  )
}

export default App
