import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Note from './Note/Note'
import useStyles from './styles'

const Notes = () => {
    const notes = useSelector((state) => state.notes)
    const classes = useStyles();

    return(
        !notes.length ? <CircularProgress color='primary'/> : (
            <Grid container alignItems="stretch" spacing={3}>
                {notes.reverse().map((note) => (
                    <Grid className={classes.note} item key={note._id} xs={6} sm={4} lg={3}>
                        <Note note={note}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Notes;