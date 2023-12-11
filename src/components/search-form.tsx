'use client'

import { FormEvent } from 'react'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) return null

    router.push(`/search?q=${query}`)
  }

  return (
    <search>
      <form
        onSubmit={handleSubmit}
        className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
      >
        <Search className="w-5 h-5 text-zinc-500" />
        <input
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-zinc-500"
          placeholder="Buscar Produto"
          type="text"
          name="q"
          defaultValue={query ?? ''}
        />
      </form>
    </search>
  )
}
