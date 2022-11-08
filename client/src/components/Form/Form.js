import React, { useState, useRef } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';


import useStyles from './styles'





const Form = () => {
    const [uploadData, setUploadData] = useState({
        name:'',
        selectedFile:'',
    });
    const classes = useStyles();
    const fileInput = useRef(null);

    const handleSubmit = () => {
        // implement submit functionality
    }

    const clear = () => {
        // implement form clear
        setUploadData({
            name: '',
            selectedFile: ''
        })

        // reset the file selection
        fileInput.current.value = null;
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h3">Post a Data Upload</Typography>
                <TextField name="name" variant='outlined' label='name' fullWidth 
                    value={uploadData.name}      onChange={(e) => setUploadData(       {...uploadData, name:e.target.value}) }/>
                
                <div className={classes.fileInput}>
                    <FileBase
                        ref={fileInput}
                        type='file' multiple={false}
                        onDone={({base64}) => setUploadData({...uploadData, selectedFile:base64})}
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;