
import AppDownload from '../../components/App Download/app'
import ExploreMenu from '../../components/ExploreMenu/menu'
import FoodDisplay from '../../components/fooddisplay/display'
import Header from '../../components/header/heder'
import './home.css'
import React, { useState } from 'react'

const Home = () => {
   const[category, setCategory]=useState('All')

  return (
    <div id='home-page'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    <AppDownload/>
    </div>
  )
}

export default Home