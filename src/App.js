import React,{useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [myStyle,setMyStyle] = useState({
    color : "black",
    backgroundColor:"white"
});
const [alert,setAlert] = useState(null);
const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      },1500)
}
  return (
    <>
    <Router>
      <Navbar showAlert={showAlert} title="textUtils" setMyStyle={setMyStyle} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
          <Switch>
              <Route path="/about">
              <About style={myStyle}/>
              </Route>
              <Route path="/">
              <Textform showAlert={showAlert} heading = "Enter the text to Analyze below" style={myStyle}/>
              </Route>
          </Switch>
       </div>
       </Router>
      
    </>
  );
}

export default App;
