import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

//import { likePost } from '../../../actions/notes'
import useStyles from './styles';

const Note = ({note}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const openNote = () => navigate(`/notes/${note._id}`);
    
    return(
        <Card className={classes.card}>

        
            <CardMedia className={classes.media} image={note.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={note.title}/>
            <div className={classes.overlay}>
            <Typography variant="h6">{note.type}</Typography>
                <Typography variant="body1">{moment(note.createdAt).fromNow()}</Typography>
            </div>
        <ButtonBase className ={classes.cardAction} onClick={openNote} >
            <CardContent >
                <Typography variant='h4'>
                    {note.name}
                </Typography>
                <Typography variant="h6" className={classes.paragraph}>
                    {note.classID}
                </Typography>
                <Typography variant="body1" color="textSecondary" className={classes.paragraph}>
                    {note.description}
                </Typography>
            </CardContent>
        </ButtonBase>

            <CardActions className={classes.actions}>
                <Button>Like 👍</Button>
            </CardActions>

        </Card>
    );
}

export default Note;