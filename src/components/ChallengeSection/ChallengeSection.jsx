import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";

function ChallengeSection ({words, characters, wpm}) {
    return (
        <div className="challenge-container">
            <h1 data-aos="fade-down" className="challenge-header">
                Take a speed test now!
            </h1>
            <TestContainer words={4}
             characters={14}
             wpm={20}/>   
        </div>
    )
}

export default ChallengeSection;