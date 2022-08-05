import React, { Component } from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Footer from "./item/Footer";
import Pokemon from "./page/Pokemon";
import About from "./page/About";
import Home from "./item/Home";
import Navbar from "./item/Navbar";
import Notfound from "./page/Notfound";
import './App.css'
import './main.css'


class App extends Component {
  render() {
    const Appstyle = {
      display:'flex',
      flexDirection:'column',
      flexWrap:'wrap',
      justifyContent:'space-between',
      minHeight: '100vh',
    }

    return (
      <BrowserRouter>
        <div style={Appstyle} className='App'>
          <div className="main">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/pokemon" element={<Pokemon/>} />
              <Route exact path="/about" element={<About/>} />
              <Route path="/404" element={<Notfound />} />
              <Route path='*' element={<Navigate to='/404' replace /> } />
            </Routes>
          </div>
          <Footer />
        </div>
    </BrowserRouter>
    )
	}
}
export default App;
