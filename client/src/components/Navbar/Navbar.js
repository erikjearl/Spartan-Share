import React from 'react';
import { AppBar, Typography, Link, Grid} from '@material-ui/core'
import logo from '../../images/logo.png';
import text from '../../images/text.png';
import search from '../../images/search.jpg';
import upload from '../../images/upload.jpg';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import PublishIcon from '@material-ui/icons/Publish';

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">    
            <img className={classes.image} src={logo} alt="logo" height="75"></img>
              <Link href='/' className={classes.heading} variant="h2" align="center"> 
                <img src={text} alt="upload" height="75" width="260"></img>
              </Link>
            <Grid container justifyContent="flex-end">
              <Link href='/form' className={classes.upload} variant="h4">
                  <img src={upload} alt="upload" height="40"></img>
              </Link>
              <Link href='/search' className={classes.search} variant="h4">
                <img src={search} alt="upload" height="40"></img>
              </Link>
            </Grid>
      </AppBar>
    );
  };
  
export default Navbar;