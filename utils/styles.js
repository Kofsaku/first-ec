import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow:{
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',

  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  bigCard: {
    height: 510,
    borderRadius: 10
  },
  image: {
    borderRadius: 10
  },
  form: {
    maxWidth: 800,
    margin: '0 auto',
  },
  point: {
    cursor: 'pointer',
    '&:hover': {
      color: "#E9C93A",
    },
  }

});
export default useStyles;