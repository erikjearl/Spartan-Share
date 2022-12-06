import useStyles from './styles'
import React from 'react';
import Notes from '../Notes/NotesRow';
import { Container, Grow, Grid, Typography, Paper } from '@material-ui/core'
import NavigateBeforeSharpIcon from '@material-ui/icons/NavigateBeforeSharp';
import NavigateNextSharpIcon from '@material-ui/icons/NavigateNextSharp';

import logo from '../../images/logo.png';

const Home = () => {
  const classes = useStyles();

    // add this later to make text white: style="color:#FFFFFF"

    return (
      <Grow in>
        <Container disableGutters>
        <Paper className={classes.AboutUs} style={{padding:'20px', borderRadius:'15px'}} elevation={6}>
          
          <Grid container direction="row" spacing={5}>
            <Grid item xs={9}>
              <Typography variant="h3">What is SpartanShare?</Typography>
              <br/>
              <Typography paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non leo et magna tristique egestas nec a nisl. Mauris quis ipsum nisl. Sed ultricies urna eros, vel ornare urna molestie eu. Proin ullamcorper dictum luctus. In vitae dolor ac nulla luctus consectetur id in justo. Sed ultricies lectus id semper ullamcorper. Nam orci massa, interdum sed tortor id, rutrum fermentum justo. Nulla facilisi. Integer tempor augue pellentesque, consectetur eros id, porttitor eros. Pellentesque et felis tortor. Suspendisse vitae turpis at dolor convallis aliquam. Nam ipsum ex, hendrerit venenatis odio sit amet, pretium consequat risus. Vestibulum non ligula rhoncus, congue nulla sit amet, interdum metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec semper felis. </Typography>
            </Grid>
            <Grid item xs={3}>
              <img className={classes.image} src={logo} alt="logo" height="75"></img>
            </Grid>
          </Grid>
        </Paper>
        <br/>
        <Paper style={{padding:'20px', borderRadius:'15px'}} elevation={6}>
          <Grid container direction="column" justifyContent="space-around" alignItems="stretch">
            <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" spacing={3}>
              <Grid item xs>
                <Typography variant="h4" className={classes.subheader}>Recently Uploaded</Typography>
              </Grid>
              <Grid item xs>
                <Container>
                  <Grid container justifyContent="space-evenly" alignItems="stretch">
                    {/* 
                    <Grid item xs><NavigateBeforeSharpIcon color="primary" fontSize="large" /></Grid>
                    */}
                    <Grid item sm={12}>
                      <Notes />
                    </Grid>
                    {/* 
                    <Grid item xs><NavigateNextSharpIcon color="primary" fontSize="large" /></Grid>
                    */}
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Grid>
          </Paper>
          <br/>
       </Container>
      </Grow>
    );
  };
  
export default Home;
