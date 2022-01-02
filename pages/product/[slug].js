import React from 'react'
import { useRouter } from 'next/router'
import data from '../../utils/data'
import NextLink from 'next/link'
import Image from 'next/image'
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
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
    <Grid container spacing={1}>
      <Grid item md={6} sp={12}>
        <Image src={product.image} alt={product.name} width={640} height={640} layout="responsive"></Image>
      </Grid>
      <Grid item md={6} sp={12}>
        <List>
          <ListItem>
            <Typography>
              Category: {product.category}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Brand: {product.brand}
            </Typography>
            </ListItem>
          <ListItem>
            <Typography>
              Rating: {product.rating} stars({product.numReviews}) reviews
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Description: {product.description}
            </Typography>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  </Layout>

}
