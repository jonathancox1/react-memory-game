import React, { component, Component } from 'react';
import numeral from 'numeral';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png"></img>
            </div>
        )
    }
}

export default Card;