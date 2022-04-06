import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { LineWeight } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },

    title: {
      flexGrow: 1,
      fontFamily: "Helvetica",
      fontSize: 50,
      fontWeight: 700,
      color: "white",
    },
    appBarColor: {
        backgroundColor: '#003882',
    },
    button: {
        fontFamily: "Helvetica",
        fontSize: 20,
        fontWeight: 700,
        color: "white",

    }
  }));

const Nav = () => {

const classes = useStyles();

  return (
    <AppBar position="static" className={ classes.appBarColor}>
  <Toolbar>
    <Typography variant="h2" className={classes.title}>
      Daily Journal
    </Typography>
    <Button to="/" component={ Link } className={classes.button}>Home</Button>
    <Button to="/read" component={ Link } className={classes.button}>Read</Button>
    <Button to="/write" component={ Link } className={classes.button}>Write</Button>
  </Toolbar>
</AppBar>
  )
}

export default Nav