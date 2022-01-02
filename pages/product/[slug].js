import React from 'react'
import { useRouter } from 'next/router'
import data from '../../utils/data'
import NextLink from 'next/link'
import { Link } from '@mui/material'
import Layout from '../../components/Layout'

export default function ProductScreen() {
  const router = useRouter()
  const { slug } = router.query
  const product = data.products.find((p) => p.slug === slug)
  if (!product) {
    return <div>Product not found</div>
  }
  return <Layout title={product.name}>
    <div>
      <NextLink href="/" passHref>
        <Link href="/">Back to products</Link>
      </NextLink>
    </div>
  </Layout>

}
