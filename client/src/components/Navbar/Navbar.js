import React from 'react';
import { AppBar, Typography, Link} from '@material-ui/core'
import upload from '../../images/upload.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
          <img className={classes.image} src={upload} alt="upload" height="50"></img>
          <Link href='/' className={classes.heading} variant="h2" align="center">SpartanShare</Link>
          <div className={classes.space}></div>
          <Link href='/form' className={classes.link} variant="h4">Form</Link>
          <Link href='/search' className={classes.link} variant="h4">Search</Link>
      </AppBar>
    );
  };
  
export default Navbar;