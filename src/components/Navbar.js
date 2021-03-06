import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";


export default function Navbar({setMyStyle},props) {
    const [mode,setMode] = useState("light");
    const darkMode = () =>{
        document.body.style.backgroundColor = "#0f274b";
        document.title = "textUtils-Dark Mode";
        // props.showAlert("Spaces Cleared Successfully","success");
          setMyStyle({
            color: "white",
            backgroundColor:"#343a40",
            border: "1px solid white",
          });
          setMode("dark");
        }
    const darkMode2 =() =>{
        document.body.style.backgroundColor = "white";
        document.title = "textUtils-Light Mode";
        // props.showAlert("Spaces Cleared Successfully","success");
        setMyStyle({
              color: "black",
              backgroundColor:"white"
            });
            setMode("light");
          }
        
    
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><b>textUtils</b></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="form-check form-switch">
                        <button className="btn btn-dark mx-2" onClick={darkMode} value = "1">DM</button>
                <button className="btn btn-light mx-2" onClick={darkMode2} value = "0">LM</button>
</div>
                </div>
            </nav>`
        </>
    )
}   

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "set your title here",
    aboutText: "about"
}
