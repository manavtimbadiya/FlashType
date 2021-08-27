import React from "react";
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

function TestContainer ({words, characters, wpm}) {
   
    return(
        <div className="test-container">
            <div data-aos="fade-up" className="typing-challenge-container">
                <TypingChallengeContainer  
                words={words}
                characters={characters}
                wpm={wpm}
                />
            </div>
               {/* <div className="tryagain-container">
                    <TryAgain words={words} characters={characters} wpm={wpm}/>
                 </div>*/}
        </div>
    )

}

export default TestContainer;