import React from "react";
import "./TestLetter.css";

function TestLetter({individualLetterInfo}){
	return (
		<span className="test-letter">{individualLetterInfo.testLetter} </span>
		)
}

export default TestLetter;