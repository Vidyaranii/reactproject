import { StoreContext } from '../../context/StoreContex'
import './order.css'

import React, { useContext } from 'react'

const PlaceOrder = () => {
const {getTotalCartAmount}=useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">
          Delivery Information
        </p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='email address'/>
        <input type="text" placeholder='street'/>
        <div className="multi-fields">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='country' />
        </div>
        <input type='text' placeholder='phone' ></input>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
      <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
           
          <button>PROCEED TO PAYMENT</button>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder