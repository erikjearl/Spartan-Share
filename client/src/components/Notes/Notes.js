import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Note from './Note/Note'
import useStyles from './styles'

const Notes = () => {
    const notes = useSelector((state) => state.notes)
    const classes = useStyles();

    console.log(notes);

    return(
        !notes.length ? <CircularProgress color='primary'/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {notes.map((note) => (
                    <Grid item key={note._id} xs={12} s={6} md={6}>
                        <Note note={note}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Notes;