import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Notes from "../Notes/NotesSmall";
import { Container, Grow, Grid, AppBar, TextField, Button, Typography, FormControl,InputLabel,Select,MenuItem } from '@material-ui/core'
import { useNavigate, useLocation } from 'react-router-dom';

import useStyles from './styles';
import { getNotes, getNoteBySearch } from '../../actions/notes';


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
  const [searchType, setSearchType] = useState('');

  const clear = () => {
    setSearchName('');
    setSearchClass('');
    setSearchType('');
  }

  const searchUpload = () => {
    if(searchName.trim() || searchClass.trim() || searchType){
      console.log(`Name: ${searchName} , Class: ${searchClass} , Type: ${searchType}`);
      dispatch(getNoteBySearch({searchName,searchClass,searchType}));
      navigate(`/search/?name=${searchName||'none'}&class=${searchClass||'none'}&type=${searchType||'none'}`);
    }else{
      dispatch(getNotes());
      navigate(`/search`);
    }
    clear();
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
                  <FormControl variant ="outlined">
                    <InputLabel  className={classes.select} id="file-type">File Type</InputLabel>
                    <Select className={classes.textField}
                        labelId="file-type"
                        id="demo-simple-select"
                        value={searchType}
                        label="File Type"
                        onChange={(e) => setSearchType(e.target.value)}
                    >
                        <MenuItem value={'Note'}> Note </MenuItem>
                        <MenuItem value={'Homework'}> Homework </MenuItem>
                        <MenuItem value={'Lecture'}> Lecture Material </MenuItem>
                        <MenuItem value={'Textbook'}> Textbook </MenuItem>
                    </Select>
                  </FormControl>
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
                    Filter
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