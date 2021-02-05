import './App.scss';
import React from 'react';

let randomQuotes = [
       {
         "text": "Be the chief but never the lord.",
         "author": "Lao Tzu"
       },
       {
         "text": "Nothing happens unless first we dream.",
         "author": "Carl Sandburg"
       },
       {
         "text": "Ideas are the beginning points of all fortunes.",
         "author": "Napoleon Hill"
       },
       {
         "text": "Everything in life is luck.",
         "author": "Donald Trump"
       },
       {
         "text": "Doing nothing is better than being busy doing nothing.",
         "author": "Lao Tzu"
       },
       {
         "text": "Trust yourself. You know more than you think you do.",
         "author": "Benjamin Spock"
       }
]

const getQuotes = () => {
       fetch('https://type.fit/api/quotes')
              .then(function (response) {
                     return response.json()
              })
              .then((data) => {
                     randomQuotes.push(...data);
              })
              .catch(() => {
                     console.log("error bro!")
              })
}

getQuotes();

const generateRandomNum = () => {
       return (Math.floor(Math.random() * randomQuotes.length));
}

let firstTemp = generateRandomNum();

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: randomQuotes[firstTemp].text,
      author: randomQuotes[firstTemp].author
    };
    this.handleClick = this.handleClick.bind(this);
  }  
  
  handleClick(){
    let nextTemp = generateRandomNum();
    this.setState({
      text: randomQuotes[nextTemp].text,
      author: randomQuotes[nextTemp].author
    })
  }
  
  render(){
    return(
      <div className="wrapper" id="quote-box">
        <span id="text">{this.state.text}</span>
        <div className="twitter-author">
          <a className="btn-floating btn-lg btn-tw" type="button" role="button" id="tweet-quote" href="twitter.com/intent/tweet"><i className="fab fa-twitter"></i></a>
          <div className="author-box">
            <span>- </span><span id="author">{this.state.author}</span>
          </div>
        </div>
        <div className="button">
          <button className="btn btn-dark" id="new-quote" onClick={this.handleClick}>New quote</button>
        </div>  
      </div>
    );
  }
}

export default App;