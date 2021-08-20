import React from "react";
import "./Footer.css";
import ln from "./../../assets/ln.jpeg";
import git from "./../../assets/git.png";

function Footer () {
    return(
            <div className="footer-container">
                <p className="footer-text">Connect With Me!</p>
                <div className="footer-img">
                    <a href="https://www.linkedin.com/in/manavtimbadiya"
                    target="_blank" rel="noreferrer" className="footer-link"> 
                    <img src={ln} alt="" />
                    </a>
                    <a href="https://github.com/manavtimbadiya"
                    target="_blank" rel="noreferrer" className="footer-link">
                    <img className="git" src={git} alt=""></img>
                    </a>
                </div>
                
            </div>
    )
}

export default Footer;