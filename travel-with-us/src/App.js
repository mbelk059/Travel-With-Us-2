import React from 'react';
import './app.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';

import China from './Components/Countries/China';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Home />
                        <Main />
                    </>
                } />
                <Route path="/china" element={<China />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
