import React, { Component } from 'react';
import './numButton.css'
class numButton extends Component {

    render() {
        return (
                <button
                className = "numButton"
                name="renderNum"
                onClick = {this.props.changeClick}
                value = {this.props.num}
                >{this.props.num}</button>
        );
    }
}

export default numButton;