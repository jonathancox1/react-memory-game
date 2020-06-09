import React, { Component } from 'react';
import './Card.css';

class Card_back extends Component {
    constructor(props) {
        super(props);
        this.state = { isFlipped: false };
    }

    handelClick = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    render() {
        let innerClass = 'Card_inner';
        if (this.state.isFlipped) {
            innerClass = 'Card_inner flipped';
        }
        return (
            <div class="Card" onClick={this.handelClick} >
                <div className={innerClass}>
                    <div className="Card_back">
                        <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" alt="digital crafts logo"></img>
                    </div>
                    <div className="Card_front">∆</div>
                </div>
            </ div >
        )
    }
}


export default Card_back;