import React from "react";
import "./TypingChallengeContainer.css"

function TypingChallengeContainer ({words ,characters , wpm}) {
    return(
        <div className="typing-challenge-container">
            {/* Details Section*/}
                <div className="details-container">
                    {/* Words Typed */}
                    <p>1</p>
                    {/* Characters Typed */}
                    <p>2</p>
                    {/* Speed */}
                    <p>3</p>
                </div>

            {/* The Real Challenge */}
            <div className="typewriter-container">
                <p>This is a Real Challenge</p>
            </div>
        </div>
    )
}

export default TypingChallengeContainer;