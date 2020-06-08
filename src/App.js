import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  // const projects = [
  //   { name: 'Tripster', likes: 10 },
  //   { name: 'myMovie Bucket', likes: 4 },
  //   { name: 'BlackJack', likes: 2 },
  //   { name: 'Local Dashboard', likes: 87 },
  //   { name: 'Web Design', likes: 2001 },
  // ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test Your Memory</h1>
        <small>can you find the match?</small>
      </header>
      <div id="wide"><Card></Card><Card></Card><Card></Card><Card></Card></div>
      <br></br>
      <div id="wide"><Card></Card><Card></Card><Card></Card><Card></Card></div>
      <br></br>
      <div id="wide"><Card></Card><Card></Card><Card></Card><Card></Card></div>
      <br></br>
      <div id="wide"><Card></Card><Card></Card><Card></Card><Card></Card></div>
    </div >
  )
}

export default App;
