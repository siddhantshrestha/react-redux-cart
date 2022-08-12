import React,{useEffect} from "react"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { calculateTotal, emptyCart } from "../feature/cart/cartSlice"
import CardItem from "./cardItem"


const CardContainer = () => {
  const dispatch = useDispatch()
  const { cartItem, amount, total } = useSelector(store => store.cart)


  useEffect(()=>{
    dispatch(calculateTotal())

  },[cartItem])

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>Your Bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItem.map(item => (
          <CardItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(emptyCart())}>
          clear cart
        </button>
      </footer>
    </section>
  )

  return <div>CardContainer</div>
}

export default CardContainer
