import { ImageResponse } from 'next/server'

import { api } from '@/data/api'
import { Product } from '@/data/types/products'

import colors from 'tailwindcss/colors'

export const runtime = 'edge'

export const alt = ''

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getFeaturedProducts(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const data = await response.json()

  return data
}

export default async function Image({ params }: { params: { slug: string } }) {
  const product = await getFeaturedProducts(params.slug)

  const imageURL = new URL(product.image, 'http://localhost:3000/').toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          style={{
            height: '100%',
          }}
          src={imageURL}
          alt=""
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
