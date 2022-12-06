import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Paper, Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createNote } from '../../actions/notes'

import useStyles from './styles'
import { ErrorSharp } from '@material-ui/icons';


const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    // hooks
    const [noteData, setNoteData] = useState({
        name: '',
        date: '',
        classID: '',
        description: '',
        type: '',
        selectedFile: '',
    });

    const [formErrors, setFormErrors] = useState({
        nameError: '',
        noName: false,
        dateError: '',
        noError: false,
        classIDError: '',
        noClassID: false,
        descriptionError: '',
        noDescription: false,
        typeError: '',
        noType: false,
        selectedFileError: '',
        noSelectedFile: false
    })
    const [isSubmit, setIsSubmit] = useState(false)

    // button functionally 
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(handleValidation(noteData))
        setIsSubmit(true)
        if (Object.keys(formErrors).length === 0) {
            dispatch(createNote(noteData))
            clear();
        }
    }

    // implement form clear
    const clear = () => {
        setNoteData({
            name: '',
            date: '',
            classID: '',
            description: '',
            type: '',
            selectedFile: '',
        })
        setFormErrors({
            nameError: '',
            noName: false,
            dateError: '',
            noError: false,
            classIDError: '',
            noClassID: false,
            descriptionError: '',
            noDescription: false,
            typeError: '',
            noType: false,
            selectedFileError: '',
            noSelectedFile: false
        })
    }

    const handleValidation = (values) => {
        const errors = []
        if (!values.name) {
            errors.nameError = "Name is Required"
            errors.noName = true
        }
        if (!values.date) {
            errors.dateError = "Date is Required"
            errors.noDate = true
        }
        if (!values.classID) {
            errors.classIDError = "Class ID is Required"
            errors.noClassID = true
        }
        if (!values.type) {
            errors.typeError = "Type is Required"
            errors.noType = true
        }
        if (!values.description) {
            errors.descritpionError = "Description is Required"
            errors.noDescription = true
        }
        if (!values.selectedFile) {
            errors.selectedFileError = "File is Required"
        }
        return errors
    }

    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(noteData)
        }
    }, [formErrors])

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

                <Typography className={classes.title} variant="h3" noWrap>Post a New Note</Typography>

                <TextField className={classes.smallBox} name="name" variant='outlined' label='Note Name'
                    value={noteData.name} helperText={formErrors.nameError} error={formErrors.noName} onChange={(e) => setNoteData({ ...noteData, name: e.target.value })} />

                <TextField className={classes.smallBox} name="date" variant='outlined' label="Date of Note"
                    type="date" InputLabelProps={{ shrink: true, }}
                    value={noteData.date} helperText={formErrors.dateError} error={formErrors.noDate} onChange={(e) => setNoteData({ ...noteData, date: e.target.value })} />


                <TextField className={classes.smallBox} name="class" variant='outlined' label='Class Code'
                    value={noteData.classID} helperText={formErrors.classIDError} error={formErrors.noClassID} onChange={(e) => setNoteData({ ...noteData, classID: e.target.value })} />


                <FormControl className={classes.fileType} variant='outlined' error={formErrors.noType}>
                    <InputLabel id="file-type">File Type</InputLabel>
                    <Select
                        labelId="file-type"
                        id="demo-simple-select"
                        value={noteData.type}
                        label="File Type"
                        onChange={(e) => setNoteData({ ...noteData, type: e.target.value })}
                    >
                        <MenuItem value={'Note'}> Note </MenuItem>
                        <MenuItem value={'Homework'}> Homework </MenuItem>
                        <MenuItem value={'Lecture'}> Lecture Material </MenuItem>
                        <MenuItem value={'Textbook'}> Textbook </MenuItem>
                    </Select>
                    <FormHelperText>{formErrors.typeError}</FormHelperText>
                </FormControl>



                <TextField name="description" variant='outlined' label='Description' multiline minRows={5} fullWidth
                    value={noteData.description} helperText={formErrors.descriptionError} error={formErrors.noDescription} onChange={(e) => setNoteData({ ...noteData, description: e.target.value })} />


                <div className={classes.fileInput}>
                    <Typography className={classes.title} variant="h5">Attach File(s)</Typography>
                    <Typography style={{ color: "red" }}>{formErrors.selectedFileError}</Typography>
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