import { Grid, Link, Card, CardMedia, CardContent, CardActions, CardActionArea, Typography, Button } from '@material-ui/core';

import Layout from '../components/Layout'
import data from '../utils/data';
import NextLink from 'next/link';
import db from '../utils/db';
import Product from '../models/Product';

export default function Home(props) {
  const {products} = props;
  return (
    <Layout>
      <div>
        <h1>やりたいこと一覧</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}>

                  </CardMedia>
                  <CardContent>
                    <Typography>
                      {product.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </NextLink>
              </Card>
            </Grid>
            ))}
        </Grid>
      </div>
    </Layout>

  )
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj)
    },
  }
}