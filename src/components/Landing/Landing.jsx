import React from "react";
import "./Landing.css";
import flash from "./../../assets/flash.png";

function Landing () {
    return (
        <div className="landing-container">
            <div className="landing-left">
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewriter-container">
                    <p>Fast?</p>
                    <p>Correct</p>
                    <p>Quick</p>
                </div>
            </div>

            <div className="landing-right">
                <img src=   {flash} alt="hero" className="flash-image" />
            </div>
        </div>
    )
}

export default Landing;