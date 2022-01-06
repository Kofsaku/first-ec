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
import useStyles from '../../utils/styles'
import Product from '../../models/Product'
import db from '../../utils/db'
import Router from 'next/router'

export default function ProductScreen(props) {
  const { product } = props
  const classes = useStyles();

  if (!product) {
    return <div>Product not found</div>
  }

  return <Layout title={product.name} description={product.description}>
    <div className={classes.section}>
      <Typography component="h2" variant='h2' onClick={() => Router.back()} className={classes.point}>一覧に戻る</Typography>

    </div>
    <Grid container spacing={1}>
      <Grid item md={5} sp={12}>
        <Image src={product.image} alt={product.name} width={640} height={640} layout='responsive' className={classes.image}></Image>
      </Grid>

      <Grid item md={6} sp={12}>
      <Card className={classes.bigCard}>
        <List>
          <ListItem>
            <Typography component="h1" variant='h1'>
              {product.name}
            </Typography>
          </ListItem>
          <ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>
                    カテゴリー
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                  {product.category}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          <ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>
                    時期
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                  {product.brand}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          <ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>
                    おすすめ度
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                  {product.rating} 星({product.numReviews}) 点
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>
                    推定費用
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                  {product.price}円
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          <ListItem>
          <div className={classes.tate}>
            <Typography>
              ◇詳細◇
            </Typography>
            <Typography>
              {product.description}
            </Typography>
          </div>
          </ListItem>

        </List>
        </Card>
      </Grid>
    </Grid>
  </Layout>

}


export async function getServerSideProps(context) {
  const {params} = context;
  const {slug} = params;

  await db.connect();
  const product = await Product.findOne({slug}).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  }
}