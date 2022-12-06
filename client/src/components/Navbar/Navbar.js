import React from 'react';
import { AppBar, Typography, Link} from '@material-ui/core'
import logo from '../../images/logo.png';
import text from '../../images/text.png';
import upload from '../../images/link.png';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import PublishIcon from '@material-ui/icons/Publish';

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={logo} alt="logo" height="75"></img>
          <Link href='/' className={classes.heading} variant="h2" align="center"> 
            <img className={classes.image} src={text} alt="upload" height="75" width="260"></img>
          </Link>
          <div className={classes.space}></div>
          <Link href='/form' className={classes.link} variant="h4"> <PublishIcon className={classes.icons}/> Upload </Link>
          <Link href='/search' className={classes.link} variant="h4"> <SearchIcon className={classes.icons}/> Search </Link>
          
      </AppBar>
    );
  };
  
export default Navbar;