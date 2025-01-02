import './display.css'
import React, { useContext }  from 'react'
// import { food_list } from './../../assets/assets';
import { StoreContext } from '../../context/StoreContex';
import FoodItem from '../fooditem/item';

const FoodDisplay = ({category}) => {
  const{food_list}=useContext(StoreContext)


  return (
    <div className='food-display' id='food-display'>
      <h1> Top dishes near you </h1>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
          if(category=='All'||category===item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />

          }
          
        })}
      </div>
    </div>
  )
}

export default FoodDisplay