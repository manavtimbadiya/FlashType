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

    componentDidMount () {
       // fetch(ServiceUrl)
         //   .then(response => response.text())
           // .then(data => {
             //   this.setState({selectedParagraph : data})
            //});

        const selectedParagraphArray = this.state.selectedParagraph.split("");
        console.log('splited array - ', selectedParagraphArray);
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
                    />
                    {/*Footer*/}
                    <Footer />
                </div>
        );
    }
}

export default App;