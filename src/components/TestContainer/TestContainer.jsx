import React from "react";
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

function TestContainer ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timeStarted,
    testInfo,
    onInputChange,
    startAgain,}) {
    return(
        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-container">
                    <TypingChallengeContainer  
                    timeRemaining={timeRemaining}
                    timeStarted={timeStarted}
                    selectedParagraph={selectedParagraph}
                    words={words}
                    characters={characters}
                    wpm={wpm}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                    />
                </div>
                ) : (
                    <div className="tryagain-container">
                    <TryAgain 
                        words={words} 
                        characters={characters} 
                        wpm={wpm}
                        startAgain={startAgain}
                    />
                 </div>
                )
            }
        </div>
    )

}

export default TestContainer;