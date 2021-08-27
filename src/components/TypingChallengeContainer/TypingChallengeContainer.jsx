import React from "react";
import ChallengeDetailCard from "../ChallengeDetailsCard/ChallengeDetaliCard";
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
                        <p>This is a Real Challenge</p>
                     </div>
        </div>
    )
}

export default TypingChallengeContainer;