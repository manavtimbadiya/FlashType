import React from "react";
import ChallengeDetailCard from "../ChallengeDetailsCard/ChallengeDetaliCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css"

function TypingChallengeContainer ({words ,characters ,wpm}) {
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
                        <TypingChallenge selectedParagraph="Hello World!" />
                     </div>
        </div>
    )
}

export default TypingChallengeContainer;