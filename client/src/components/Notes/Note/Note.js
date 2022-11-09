import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

//import { likePost, deletePost } from '../../../actions/notes'
import useStyles from './styles';

const Note = ({note}) => {
    const classes = useStyles();
    
    return(
        <Card className={classes.card}>
            
            <CardMedia className={classes.media} image={note.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={note.title}/>

            <CardContent>
                <Typography variant='h4'>
                    {note.name}
                </Typography>
                <Typography variant="h6">
                    {note.class}
                </Typography>
                <Typography variant="body1">
                    {note.description}
                </Typography>
            </CardContent>

            <CardActions>
                <Button>Like 👍</Button>
            </CardActions>

        </Card>
    );
}

export default Note;