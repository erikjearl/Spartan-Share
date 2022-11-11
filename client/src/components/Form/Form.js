import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
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
        date: '',
        class: '',
        description: '',
        type: '',
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
            date: '',
            class: '',
            description: '',
            type: '',
            selectedFile: '',
        })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

                <Typography className={classes.title} variant="h3" noWrap>Post a New Note</Typography>

                <TextField className={classes.smallBox} name="name" variant='outlined' label='Note Name'
                    value={noteData.name} onChange={(e) => setNoteData({ ...noteData, name: e.target.value })} />

                <TextField className={classes.smallBox} name="date" variant='outlined' label='Class Date'
                    value={noteData.date} onChange={(e) => setNoteData({ ...noteData, date: e.target.value })} />

                <TextField className={classes.smallBox} name="class" variant='outlined' label='Class Code'
                    value={noteData.class} onChange={(e) => setNoteData({ ...noteData, class: e.target.value })} />

                <TextField name="description" variant='outlined' label='Description' multiline rows={5} fullWidth
                    value={noteData.description} onChange={(e) => setNoteData({ ...noteData, description: e.target.value })} />

                <FormControl fullWidth>
                    <InputLabel id="file-type">File Type</InputLabel>
                    <Select
                        labelId="file-type"
                        id="demo-simple-select"
                        value={noteData.type}
                        label="File Type"
                        onChange={(e) => setNoteData({ ...noteData, type: e.target.value })}
                    >
                        <MenuItem value={'NOTES'}> Notes </MenuItem>
                        <MenuItem value={'HW'}> Homework </MenuItem>
                        <MenuItem value={'LECTURE'}> Lecture Slides </MenuItem>
                    </Select>
                </FormControl>

                <div className={classes.fileInput}>
                    <Typography className={classes.title} variant="h5">Attach File(s)</Typography>
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