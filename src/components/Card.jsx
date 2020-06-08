import React, { component, Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                {this.props.title ? (this.props.title) : "default title"}
                <br />
                {/* if statement */}
                {this.props.likes > 0 ? (
                    <sup>Likes: {this.props.likes} </sup>
                ) : ''}
            </div>
        )
    }
}

export default Card;