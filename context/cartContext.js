import React from 'react'

const cartContext = React.createContext({
  cardList: [],
  removeAllcartItems: () => {},
  addCartItems: () => {},
  removeCartItems: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})
export default cartContext
