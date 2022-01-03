import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
  Badge,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  InputBase,
  createTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../utils/styles'
import {Store} from '../utils/Store';
import Cookies from 'js-cookie';

export default function Layout({ title, description, children }) {
  const classes = useStyles();

  const {state, dispatch} = useContext(Store);
  const {darkMode} = state;
  const darkModeChangeHandler = () => {
    dispatch({type: darkMode? 'DARK_MODE_OFF': 'DARK_MODE_ON'});
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'true': 'false');
    // localStorage.setItem('darkMode', newDarkMode ? 'true': 'false');
  }
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: '700',
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: '400',
        margin: '1rem 0',
      },
      body: {
        fontWeight: 'normal',
      }
    },
    palette: {
      type: darkMode? 'dark' : 'light',
      primary: {
        main: '#F0c000',
      },
      secondary: {
        main: '#f50057',
      }
    }

  })
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazona` : "Next Amazona"}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>amazona</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}> </div>
            <div>
              <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography className={classes.typography}>All rights reserved. Next Amazona.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}