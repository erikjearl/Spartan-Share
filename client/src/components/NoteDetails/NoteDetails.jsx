 import React, { useEffect, useState } from 'react';
import { Paper, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import useStyles from './styles'

 const NoteDetails = () =>{
    const classes = useStyles();
    const { id } = useParams();
    let notes = useSelector((state) => state.notes);

    let [note, setNote] =  useState({
        name: 'LOADING',
        date: '',
        classID: '',
        description: '',
        type: '',
        selectedFile: '',
    });
    useEffect(() => {
        if (notes.length === 1){setNote(notes[0]);}
    },
        [notes]
    );
    if(notes.length > 1){
        notes = notes.filter((note) => note._id === id);
    }

    function downloadBase64File() {
        const base64Data = note.selectedFile;
        const fileName = note.name;
        const linkSource = `${base64Data}`;
        const downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
   }

    return(     
        <Paper style={{padding:'20px', borderRadius:'15px' }} elevation={6}>
            <div className={classes.card}>
            <div className={classes.section}>
                <Typography style={{margin: '0px 0px 3px 0px'}} variant="h3" component="h2">{note.name}</Typography>
                <Typography variant="body1" color="textSecondary">{note.type}</Typography>
                <Divider style={{ margin: '0px 0px 20px 0px' }}/>

                <Typography variant="h5">
                    {note.classID}
                </Typography>
                <Typography gutterBottom variant="body1" component="p"> {note.description} </Typography>

                <Divider  style={{ margin: '20px 0' }}/>
                <Button onClick={downloadBase64File} variant="contained" color="primary"> Download </Button>
                <Typography variant="body1" color="textSecondary" >{moment(note.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.imageSection}>
                <img className={classes.media} src={note.selectedFile || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"} alt={note.name} />
            </div>

        </div>
      </Paper>
    );
 };

 export default NoteDetails;