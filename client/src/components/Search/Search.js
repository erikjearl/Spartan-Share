import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Notes from "../Notes/Notes";
import { Container, Grow, Grid, AppBar, TextField, Button, Typography } from '@material-ui/core'
import { useNavigate, useLocation } from 'react-router-dom';

import useStyles from './styles';
//import { getUploadBySearch } from '../../actions/notes';


function useQuery(){
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useQuery();
  const searchQuery = query.get('searchQuery');

  const [searchName,  setSearchName] = useState('');
  const [searchClass, setSearchClass] = useState('');

  const searchUpload = () => {
    console.log(`Name: ${searchName}   Class: ${searchClass}`)
    //dispatch getUploadBySearch
    // navigate to url /search/?searchQuery=${search}
  }
  const handleKeyPress = (e) => {
    // submit if ENTER is pressed
    if(e.keyCode === 13) {
      searchUpload();
  }
  }

    return (
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid item sm={12}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Typography className={classes.title} variant="h4">Search Fields</Typography>
                  <TextField
                    className={classes.textField}
                    name="search" 
                    variant ="outlined"
                    label="Search Notes by Name"
                    onKeyPress={handleKeyPress}
                    fullWidth
                    value={searchName}
                    onChange={(e)=>setSearchName(e.target.value)}
                  />
                  <TextField
                    className={classes.textField}
                    name="search" 
                    variant ="outlined"
                    label="Search Notes by Class"
                    onKeyPress={handleKeyPress}
                    fullWidth
                    value={searchClass}
                    onChange={(e)=>setSearchClass(e.target.value)}
                  />
                  <Button className={classes.button} onClick={searchUpload} color="primary" variant="contained">
                    Search
                  </Button>
                </AppBar>
              </Grid>
              <Grid item sm={12}>
                <Notes />
              </Grid>
          </Grid>
        </Container>
      </Grow>
    );
  };
  
export default Search;