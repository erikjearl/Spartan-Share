import React from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getUploads } from "./actions/uploads"
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";

const App = () => {

    // app body
    return(
        <Container maxWidth="lg">
            
            <Navbar />

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/form' element={<Form />} />
                </Routes>
            </BrowserRouter>

        </Container>
    );
}

export default App;