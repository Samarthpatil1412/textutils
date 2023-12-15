import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');     // sate of dark mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }

  const toggleMode =  (cls) =>{
    removeBodyClasses();
  
    document.body.classList.add('bg-'+cls);
    
    if (mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2C3333';
      showAlert("Dark mode has benn enabled","success")
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has benn enabled","success")
    }
  }
  return (

   <>
   <Router>
   <Navbar title="TextUtils" subHeading="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
      <div className="container my-3">

        <Switch>
          <Route exact path="/about">
            <About  mode={mode} />
          </Route>

          <Route exact path="/">
          <TextForm heading="Enter your text to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
          </Route>
          
        </Switch>
      </div>
      </Router>
   </>
  );
}

export default App;
