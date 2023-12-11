import { z } from 'zod'
import data from '../data.json'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1500)) // simulate network delay

  const { searchParams } = request.nextUrl

  const search = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  )

  return Response.json(products)
}
