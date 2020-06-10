import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import { render } from '@testing-library/react';


// generate deck
function generateDeck() {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let deck = [];
  for (let i = 0; i <= 15; i++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[i % 8]
    })
  }

  shuffle(deck);
  console.log(deck);
  return deck;
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
      matched: 0,
    };
  }

  pickCard = (cardIndex) => {
    if (this.state.deck[cardIndex].isFlipped === true) {
      return
    }
    let cardToFlip = { ...this.state.deck[cardIndex] }
    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip
      }
      return card;
    })

    // step 7.1
    if (newPickedCards.length === 2) {
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];

      if (newDeck[card1Index].symbol === newDeck[card2Index].symbol) {
        this.setState({ matched: (this.state.matched + 1) })
      } else if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        console.log(`${newDeck[card1Index].symbol} : ${newDeck[card2Index].symbol}`);
        setTimeout(() => { this.unflipCards(card1Index, card2Index) }, 1000);
      }
      newPickedCards = [];
    }

    this.setState({ deck: newDeck, pickedCards: newPickedCards })

  }

  // Step 7.6
  unflipCards = (card1Index, card2Index) => {
    let card1 = { ...this.state.deck[card1Index] };
    let card2 = { ...this.state.deck[card2Index] };
    card1.isFlipped = false;
    card2.isFlipped = false;
    let newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      }
      if (card2Index === index) {
        return card2;
      }
      return card;
    })
    this.setState({ deck: newDeck })
  }

  gameOver = () => {
    if (this.state.matched === 2) {
      setTimeout(() => { this.setState({ deck: generateDeck(), matched: 0 }) }, 20);
    }
  }


  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <Card
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        key={index}
        pickCard={this.pickCard.bind(this, index)}
      />
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Test Your Memory</h1>
          <small>can you find the match?</small>
          <small>{this.state.matched == 8 ? <button onClick={this.gameOver}>You've Won Play Again?</button> : this.state.matched + ' out of 8'}</small>
        </header>
        <div id="wide">{cardsJSX.slice(0, 4)}</div>
        <br></br>
        <div id="wide">{cardsJSX.slice(4, 8)}</div>
        <br></br>
        <div id="wide">{cardsJSX.slice(8, 12)}</div>
        <br></br>
        <div id="wide">{cardsJSX.slice(12, 16)}</div>
        <br></br>
        {/* <button className={toggle} onClick={this.gameOver}>You've Won! Play Again?</button> */}
      </div >
    )
  }
}

export default App;
