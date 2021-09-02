import React from "react";
import ChallengeDetailCard from "../ChallengeDetailsCard/ChallengeDetaliCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css"

function TypingChallengeContainer ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timeStarted,
    testInfo,}) {
    return(
        <div className="typing-challenge-container">
            {/* Details Section*/}
                <div className="details-container">
                    {/* Words Typed */}
                  <ChallengeDetailCard cardName="Words" cardValue={words}/>
                  <ChallengeDetailCard cardName="characters" cardValue={characters}/>
                  <ChallengeDetailCard cardName="wpm" cardValue={wpm}/>
                    {/* Characters Typed */}
                   {/* <ChallengeDetailCard cardName="Words" cardValue={words}/> */}
                    {/* Speed */}
                </div>

                  {/* The Real Challenge */}
                    <div className="typewriter-container">
                        <TypingChallenge 
                        testInfo={testInfo}
                        timeRemaining={timeRemaining}
                        timeStarted={timeStarted}
                        selectedParagraph={selectedParagraph} />
                     </div>
        </div>
    )
}

export default TypingChallengeContainer;