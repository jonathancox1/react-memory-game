import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card></Card>
      <Card likes={12}></Card>
      <Card likes={0}></Card>
      <Card likes={2}></Card>
      <Card likes={3} title="Some Stuff"></Card>
      <Card></Card>
    </div >
  );
}

export default App;
