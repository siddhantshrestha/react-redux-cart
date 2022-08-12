import { createSlice } from "@reduxjs/toolkit"
import cartItems from "../../cartItems"

const initialState = {
  cartItem: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    emptyCart: state => {
      state.cartItem = []
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cartItem = state.cartItem.filter(item => item.id !== itemId)
    },
    // increase: (state, action) => {
    //   const ID = action.payload
    //   const incItem = state.cartItem.find(item => item.id === ID)
    //   incItem.amount = incItem.amount + 1
    // },
    increase: (state, { payload }) => {
      // console.log(payload.id)
      const inc = state.cartItem.find(item => item.id === payload.id)
      inc.amount = inc.amount + 1
    },
    decrease: (state, { payload }) => {
      const cartItems = state.cartItem.find(item => item.id === payload.id)
      cartItems.amount = cartItems.amount - 1;
      // console.log(cartItems)
    },
    calculateTotal:(state)=>{
      let amount = 0
      let total = 0
      {state.cartItem.map((item)=>{
        amount += item.amount
        total += item.amount * item.price
      })}
      state.amount = amount
      state.total =total
    },
  },
})
export const { emptyCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions

export default cartSlice.reducer
