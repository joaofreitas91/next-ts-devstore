import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid w-full grid-rows-app min-h-screen p-8 max-w-[1400px] gap-5">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
