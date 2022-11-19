import useStyles from './styles'
import React from 'react';
import Notes from '../Notes/Notes';
import { Container, Grow, Grid, Typography } from '@material-ui/core'


const Home = () => {
  const classes = useStyles();

    // add this later to make text white: style="color:#FFFFFF"

    return (
      <Grow in>
        <Container>
          // Intro blurb
          <Grid container justifyContent="space-between" alignItems="stretch">
            <Grid item xs={true}>
              <Typography paragraph className={classes.blurb}>Blurb (Add later)</Typography>
            </Grid>
          </Grid>
          // Popular Entries Section
          <Grid container justifyContent="flex-start" alignItems="stretch">
            <Grid item xs={true}>
              <Typography variant="h2" className={classes.subheader}>Popular SubHeader (Rename later)</Typography>
            </Grid>
          </Grid>
          // Recently Uploaded Section
          <Grid container justifyContent="flex-start" alignItems="stretch">
            <Grid item xs={true}>
              <Typography variant="h2" className={classes.subheader}>Recent SubHeader (Rename later)</Typography>
            </Grid>
          </Grid>
       </Container>
      </Grow>
    );
  };
  
export default Home;
