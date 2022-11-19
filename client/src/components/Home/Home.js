import useStyles from './styles'
import React from 'react';
import Notes from '../Notes/Notes';
import { Container, Grow, Grid, Typography } from '@material-ui/core'
import NavigateBeforeSharpIcon from '@material-ui/icons/NavigateBeforeSharp';
import NavigateNextSharpIcon from '@material-ui/icons/NavigateNextSharp';


const Home = () => {
  const classes = useStyles();

    // add this later to make text white: style="color:#FFFFFF"

    return (
      <Grow in>
        <Container>

          <Grid container direction="column" justifyContent="flex-start" alignItems="stretch">
            <Grid item xs>
              <Typography variant="h3" className={classes.blurb}>What is SpartanShare?</Typography>
            </Grid>
            <Grid item xs>
              <Typography paragraph className={classes.blurb}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non leo et magna tristique egestas nec a nisl. Mauris quis ipsum nisl. Sed ultricies urna eros, vel ornare urna molestie eu. Proin ullamcorper dictum luctus. In vitae dolor ac nulla luctus consectetur id in justo. Sed ultricies lectus id semper ullamcorper. Nam orci massa, interdum sed tortor id, rutrum fermentum justo. Nulla facilisi. Integer tempor augue pellentesque, consectetur eros id, porttitor eros. Pellentesque et felis tortor. Suspendisse vitae turpis at dolor convallis aliquam. Nam ipsum ex, hendrerit venenatis odio sit amet, pretium consequat risus. Vestibulum non ligula rhoncus, congue nulla sit amet, interdum metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec semper felis. </Typography>
            </Grid>
          </Grid>

          <Grid container direction="column" justifyContent="space-around" alignItems="stretch">
            <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" spacing={3}>

              <Grid item xs>
                <Typography variant="h4" className={classes.subheader}>Popular</Typography>
              </Grid>
              <Grid item xs>
                <Container>
                  <Grid container justifyContent="space-evenly" alignItems="stretch">
                    <Grid item xs><NavigateBeforeSharpIcon color="primary" fontSize="large" /></Grid>
                    <Grid item xs={10}>ADD CONTAINER FOR NOTES HERE</Grid>
                    <Grid item xs><NavigateNextSharpIcon color="primary" fontSize="large" /></Grid>
                  </Grid>
                </Container>
              </Grid>

              <Grid item xs>
                <Typography variant="h4" className={classes.subheader}>Recently Uploaded</Typography>
              </Grid>
              <Grid item xs>
                <Container>
                  <Grid container justifyContent="space-evenly" alignItems="stretch">
                    <Grid item xs><NavigateBeforeSharpIcon color="primary" fontSize="large" /></Grid>
                    <Grid item xs={10}>ADD CONTAINER FOR NOTES HERE</Grid>
                    <Grid item xs><NavigateNextSharpIcon color="primary" fontSize="large" /></Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Grid>

       </Container>
      </Grow>
    );
  };
  
export default Home;
