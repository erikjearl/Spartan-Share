import React from 'react';
import Notes from '../Notes/Notes';
import { Container, Grow, Grid } from '@material-ui/core'

const Home = () => {


    // add this later to make text white: style="color:#FFFFFF"

    return (
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid item sm={4}>
                <Notes />
              </Grid>
          </Grid>
       </Container>
      </Grow>
    );
  };
  
export default Home;
