import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id
  })

  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}


const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToRemove.id
  })

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== cartItemToRemove.id
    })
  }

  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    )
  }
}

const clearCartItem = (cartItems, clearItemToClear) => {
  return cartItems.filter((cartItem) => {
    return cartItem.id !== clearItemToClear.id
  })
}


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItem: [],
  addItemToCart: () => { }
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)


  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity
    }, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price
    }, 0)
    setCartTotal(newCartTotal)
  }, [cartItems])


  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const clearItemToCart = (clearItemToClear) => {
    setCartItems(clearCartItem(cartItems, clearItemToClear))
  }

  const value = { isCartOpen, setisCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemToCart, cartTotal }



  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}