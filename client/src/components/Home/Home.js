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
              <Typography variant="h5" paragraph> 
                Spartan Share is an anonymous file sharing platform designed for CWRU students to upload, download, and share notes between each other.
                Students can add class notes, homework assignments, lecture slides and notes, or textbooks for other students to access and study from.
                Sharing your old notes is a great way to help other students and give all students equal access to notes and materials!
              </Typography>
              <Typography variant="h5" paragraph>
                SpartanShare™ does not condone cheating or any form of academic dishonestly.
              </Typography>
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
