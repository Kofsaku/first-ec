import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from  '@mui/material'
import useStyles from '../utils/styles'

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. Next Amazona.</Typography>
      </footer>
    </div>
  );
}