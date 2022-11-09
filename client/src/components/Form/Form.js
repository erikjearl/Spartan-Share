import React, { useState, useRef } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createNote } from '../../actions/notes'

import useStyles from './styles'


const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    // hooks
    const [noteData, setNoteData] = useState({
        name: '',
        class: '',
        description: '',
        selectedFile: '',
    });


    // button functionally 
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createNote(noteData))
    }

    // implement form clear
    const clear = () => {
        setNoteData({
            name: '',
            class: '',
            code: ' ',
            description: '',
            selectedFile: '',
        })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>


                <Typography variant="h3" className={classes.title} noWrap>Post a New Note</Typography>


                <TextField name="name" variant='outlined' label='name'
                    value={noteData.name} onChange={(e) => setNoteData({ ...noteData, name: e.target.value })} />



                <TextField name="class number" variant='outlined' label='class number'
                    value={noteData.code} onChange={(e) => setNoteData({ ...noteData, code: e.target.value })} />


                <TextField name="description" variant='outlined' label='description' multiline rows={5} fullWidth
                    value={noteData.description} onChange={(e) => setNoteData({ ...noteData, description: e.target.value })} />


                <div className={classes.fileInput}>
                    <FileBase
                        type='file' multiple={false}
                        onDone={({ base64 }) => setNoteData({ ...noteData, selectedFile: base64 })}
                    />
                </div>



                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper >
    );
}

export default Form;