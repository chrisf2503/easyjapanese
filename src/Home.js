import React from 'react';
import './StyleSheet/Home.css'
import './StyleSheet/General.css'
import cherryBloosm from './img/cherryBlossom.jpg'
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

//import Signin from './Frontend/Signin';

function Home(){
    const navigate = useNavigate(); 

    return (
        <div className = "body">
            <nav className = "nav-bar">
                <p className = "title">暢気日本語</p>
                <div className = "buttons">
                    {/* Trying to fix the this in order to click an move on to the signin page */}
                    <Link to = "/signin">Sign in</Link>
                    <button className= "signup" onClick={()=>navigate("/signup")}>Sing up</button>
                    
                </div>
            </nav>
                
            <div className = "content">
                <h1>暢気日本語</h1>
                <div className="middle-image">
                    <p className="jpn">こにちは</p>
                    <img src={cherryBloosm} alt="Cherry Blossom Tree" className="img1"/>
                    <p className="jpn">みなさん</p>
                </div>
                <p className="p1">Welcome to Easy Japanese!</p>
                <p className="p2">Learning Japanese easier an better</p>
            </div>
            
        </div>
    );
}

export default Home;