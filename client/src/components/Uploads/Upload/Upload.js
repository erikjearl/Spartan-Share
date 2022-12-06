import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

//import { likePost, deletePost } from '../../../actions/uploads'
import useStyles from './styles';

const Upload = () => {
    const classes = useStyles();
    
    return(
        <Card className={classes.card}>
            
            <CardMedia />

            <CardContent>
                <Typography>
                    Look into Card from material UI i think it has useful stuff for displaying an upload
                </Typography>
            </CardContent>

            <CardActions>
                <Button>Like</Button>
            </CardActions>

        </Card>
    );
}

export default Upload;