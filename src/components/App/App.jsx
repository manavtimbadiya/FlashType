import React from "react";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import "./App.css";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

const TotalTime = 60;
const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";
class App extends React.Component {
    state ={
        selectedParagraph:"Hello world!",
        timeStarted:false,
        timeRemaining:TotalTime,
        words:0,
        characters:0,
        wpm:0,
        testInfo: [],
    }
    /**
 * Schema of Test Info:
 * [
 *    {
 *      testLetter: 'H',
 *      status: correct/incorrect/notAttempted
 *    }, {
 *      testLetter: 'e',
 *      status: correct/incorrect/notAttempted
 *    }
 * ]
 */

    startTimer = () => {
        this.setState( {timeStarted: true} );
        const timer = setInterval(() => {
            if(this.state.timeRemaining > 0)
                {
                  //Change the WPM
                    const timeSpent = TotalTime - this.state.timeRemaining;
                    const wpm = timeSpent > 0 
                            ? (this.state.words / timeSpent) * TotalTime
                            : 0;

                    this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm : parseInt(wpm),
                    });    
                }
            else 
                {
                    clearInterval(timer);
                }   
        },1000);
    }

    handleUserInput = (inputValue) => {
        if(this.state.timeStarted == false) this.startTimer();

         /**
         * 1. Handle the underflow case - all characters should be shown as not-attempted
         * 2. Handle the overflow case - early exit
         * 3. Handle the backspace case
         *      - Mark the [index+1] element as notAttempted
         *        (irrespective of whether the index is less than zero)
         *      - But, don't forget to check for the overflow here
         *        (index + 1 -> out of bound, when index === length-1)
         * 4. Update the status in test info
         *      1. Find out the last character in the inputValue and it's index
         *      2. Check if the character at same index in testInfo (state) matches
         *      3. Yes -> Correct
         *         No  -> Incorrect (Mistake++)
         * 5. Irrespective of the case, characters, words and wpm can be updated
         */

         const characters = inputValue.length;
         const words = inputValue.split(" ").length;
         const index = characters - 1 ;

         if(index >0)
         {
            this.setState({
                testInfo: [
                {
                    testLetter: this.state.testInfo[0].testLetter,
                    status: "notAttempted",
                },
                ...this.state.testInfo.slice(1)
                ],
                characters,
                words,
            });
            
            return;
         }

         if(index >= this.state.selectedParagraph.length)
         {
            this.setState({characters,words});
            return;
         }
    }

    componentDidMount () {   //this is used because fetching paragraph from url take a time so render first call then cDM call so It Doesn't take time to loading page.
       // fetch(ServiceUrl)
         //   .then(response => response.text())
           // .then(data => {
             //   this.setState({selectedParagraph : data})
            //});

        const selectedParagraphArray = this.state.selectedParagraph.split("");
        const testInfo = selectedParagraphArray.map(selectedLetter => {
            return {
                testLetter : selectedLetter,
                status : "notAttempted",
            };
        });

        this.setState({testInfo : testInfo}) 
    }


    render ()  {
        return (
                <div className="app">
                    {/*Nav Section*/}
                    <Nav />
                    {/*Landing page*/}
                    <Landing />
                    {/*Challenge Section*/}
                    <ChallengeSection 
                        selectedParagraph={this.state.selectedParagraph}
                        words={this.state.words}
                        characters={this.state.characters}
                        wpm={this.state.wpm}
                        timeRemaining={this.state.timeRemaining}
                        timeStarted={this.state.timeStarted}
                        testInfo={this.state.testInfo}
                        onInputChange ={this.handleUserInput}
                    />
                    {/*Footer*/}
                    <Footer />
                </div>
        );
    }
}

export default App;