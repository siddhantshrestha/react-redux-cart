import React from "react"
import { FiArrowUp, FiArrowDown } from "react-icons/fi"
import { useDispatch } from "react-redux/es/exports"
import { decrease, increase, removeItem } from "../feature/cart/cartSlice"

const CardItem = ({ id, title, img, price, amount }) => {
  const dispatch = useDispatch()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeItem(id))
          }}>
          Remove
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => 
        dispatch(increase({id}))}>
          <FiArrowUp />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          onClick={() => {
            if (amount === 1) {
                dispatch(removeItem(id))
              return
            }
            dispatch(decrease({ id }))
          }}>
          <FiArrowDown />
        </button>
      </div>
    </article>
  )
}

export default CardItem
