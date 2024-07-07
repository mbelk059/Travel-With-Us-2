import React from 'react';
import './app.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Japan from './Components/Countries/Japan';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

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
                <Route path="/japan" element={<Japan />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
