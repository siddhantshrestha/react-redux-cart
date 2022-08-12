import React from "react"
import {FiShoppingCart} from 'react-icons/fi'
import { useSelector } from "react-redux"


const Navbar = () => {
    const { amount } = useSelector((store)=>store.cart);
  
  return (
    <div className="header">
      <h3>Redux Toolkit</h3>
      <div className="cat">
      <FiShoppingCart id='cart'/>
      <div className="amount-container">
        <p className="total-amount">{amount}</p>
      </div>
      </div>
    </div>
  )
}

export default Navbar
