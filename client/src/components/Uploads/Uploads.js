import React from 'react';
import { useSelector } from 'react-redux';

import Upload from './Upload/Upload'
import useStyles from './styles'

const Uploads = () => {
    const posts = useSelector((state) => state.uploads)
    const classes = useStyles();

    console.log(posts);

    return(
        <>
            <h1>Uploads</h1>
            <Upload />
            <Upload />
        </>
    );
}

export default Uploads;