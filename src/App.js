import './App.scss';
import React from 'react';

const randomQuotes = [

  {
         "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},
  {
         "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
  {
         "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
  {
         "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
  {
         "quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
  {
         "quote":"You miss 100% of the shots you don’t take.","author":"Wayne Gretzky"},
  {
         "quote":"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.","author":"Michael Jordan"},
  {
         "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart"},
  {
         "quote":"Every strike brings me closer to the next home run.","author":"Babe Ruth"},
  {
         "quote":"Definiteness of purpose is the starting point of all achievement.","author":"W. Clement Stone"},
  {
         "quote":"We must balance conspicuous consumption with conscious capitalism.","author":"Kevin Kruse"},
  {
         "quote":"Life is what happens to you while you’re busy making other plans.","author":"John Lennon"},
  {
         "quote":"We become what we think about.","author":"Earl Nightingale"},
  {
         "quote":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.","author":"Mark Twain"},
  {
         "quote":"Life is 10% what happens to me and 90% of how I react to it.","author":"Charles Swindoll"},
  {
         "quote":"The most common way people give up their power is by thinking they don’t have any.","author":"Alice Walker"},
  {
         "quote":"The mind is everything. What you think you become.","author":"Buddha"},
  {
         "quote":"The best time to plant a tree was 20 years ago. The second best time is now.","author":"Chinese Proverb"},
  {
         "quote":"An unexamined life is not worth living.","author":"Socrates"},
  {
         "quote":"Eighty percent of success is showing up.","author":"Woody Allen"},
  {
         "quote":"Your time is limited, so don’t waste it living someone else’s life.","author":"Steve Jobs"},
  {
         "quote":"Winning isn’t everything, but wanting to win is.","author":"Vince Lombardi"},
  {
         "quote":"I am not a product of my circumstances. I am a product of my decisions.","author":"Stephen Covey"},
  {
         "quote":"Every child is an artist.  The problem is how to remain an artist once he grows up.","author":"Pablo Picasso"},
  {
         "quote":"You can never cross the ocean until you have the courage to lose sight of the shore.","author":"Christopher Columbus"},
  {
         "quote":"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","author":"Maya Angelou"},
  {
         "quote":"Either you run the day, or the day runs you.","author":"Jim Rohn"},
  {
         "quote":"Whether you think you can or you think you can’t, you’re right.","author":"Henry Ford"},
  {
         "quote":"The two most important days in your life are the day you are born and the day you find out why.","author":"Mark Twain"},
  {
         "quote":"Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.","author":"Johann Wolfgang von Goethe"},
  {
         "quote":"The best revenge is massive success.","author":"Frank Sinatra"},
  {
         "quote":"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.","author":"Zig Ziglar"},
  {
         "quote":"Life shrinks or expands in proportion to one’s courage.","author":"Anais Nin"}]
  
const generateRandomNum = () => {
  return (Math.floor(Math.random() * randomQuotes.length));
}

let firstTemp = generateRandomNum();

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote: randomQuotes[firstTemp].quote,
      author: randomQuotes[firstTemp].author
    };
    this.handleClick = this.handleClick.bind(this);
  }  
  
  handleClick(){
    let nextTemp = generateRandomNum();
    this.setState({
      quote: randomQuotes[nextTemp].quote,
      author: randomQuotes[nextTemp].author
    })
  }
  
  render(){
    return(
      <div className="wrapper" id="quote-box">
        <span id="text">{this.state.quote}</span>
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