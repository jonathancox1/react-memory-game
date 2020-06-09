import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
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
