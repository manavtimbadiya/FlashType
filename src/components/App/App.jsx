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
                    this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
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