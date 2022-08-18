import React, { useState } from 'react';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';
import Alert from './components/Alert';




function App() {
  const [mode, setMode] = useState('light');  // whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = "#09192d";
    showAlert("Dark mode has been enabled", "success");
    document.title = 'TextUtils - Dark Mode';
// below code is not good user experience
    // setInterval(() => {
    //   document.title = 'TextUtils is amazing';
    // }, 2000)
    // setInterval(() => {
    //   document.title = 'Install TextUtils now';
    // }, 1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
}
  
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    {/* <Navbar/> */}
    <Alert alert={alert} />
    {/* <About/> */}
    <div className="container">
          {/* <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes> */}
          <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
        </div>
    {/* </Router> */}
    </>
  );
}

// // Add this in node_modules/react-dom/index.js
// window.React1 = require('react');

// // Add this in your component file
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);


export default App;
