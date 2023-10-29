import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid w-full grid-rows-app min-h-screen p-8 max-w-[1600px] gap-5">
      <Header />
      {children}
    </div>
  )
}
