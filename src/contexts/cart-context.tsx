'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContext {
  cart: CartItem[]
  addToCart: (productId: number) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

const cartContext = createContext({} as CartContext)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCartItems] = useState<CartItem[]>([])

  const addToCart = (productId: number) => {
    setCartItems((state) => {
      const productInCart = state.some(
        (cartItem) => cartItem.productId === productId,
      )

      if (productInCart) {
        return state.map((cartItem) => {
          return cartItem.productId === productId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems(cart.filter((item) => item.productId !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </cartContext.Provider>
  )
}

export const useCart = () => useContext(cartContext)
