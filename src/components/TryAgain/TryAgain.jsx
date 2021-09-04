import React from "react";
import "./TryAgain.css";

function TryAgain ({words , characters, wpm, startAgain}) {
    return (
                <div  data-aos="fade-up" className="try-container">
                    <h1>Test Results</h1>
                    <div className="results-container">
                        <p>
                            <b>Characters:</b>  {characters}
                        </p>
                        <p>
                            <b>Words:</b>  {words}
                        </p>
                        <p>
                            <b>Speed:</b>  {wpm} wpm
                        </p>

                        <div >
                            <button onClick={() => startAgain()} 
                                className="end-buttons start-again-btn">Re-try</button>
                            <button 
                            onClick={() =>{
                                window.open(
                                    "https://www.facebook.com/sharer/sharer.php?u=",
                                     "facebook-share-dialog",
                                      "width=800,height=600")
                            }}
                            className="end-buttons share-btn">
                                Share
                            </button>

                            <button
                          onClick={() =>
                              window.open(
                                   "https://twitter.com/intent/tweet?text=Check%20this%20out%20",
                                    "Twitter",
                                    "width=800,height=600"
                                  )
                             }
                                className="end-buttons tweet-btn"
                                  >
                                   Tweet
                            </button>
                        </div>
                    </div>
                </div>
    )
}

export default TryAgain;