'use client'

import { useCart } from '@/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'

export function CartWidget() {
  const { cart } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-4 h-4" />
      <span className="text-sm">Cart ({cart.length})</span>
    </div>
  )
}
