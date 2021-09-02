import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";

function ChallengeSection ({
        selectedParagraph,
        words,
        characters,
        wpm,
        timeRemaining,
        timeStarted,
        testInfo,
    }) {
    return (
        <div className="challenge-container">
            <h1 data-aos="fade-down" className="challenge-header">
                Take a speed test now!
            </h1>
            <TestContainer words={words}
             characters={characters}
             wpm={wpm}
             selectedParagraph={selectedParagraph}
             timeRemaining={timeRemaining}
             timeStarted={timeStarted}
             testInfo={testInfo}
             />   
        </div>
    )
}

export default ChallengeSection;