import React, { Component } from 'react';
import './style/Button.css'

class ReverseButton extends Component {

    disable = (e)=>{
        e.preventDefault()
        const options = { 
            method: 'PUT',
        };
        fetch(`http://localhost:3000/practice/${this.props.id}`, options)
            .then(r => r.json())
            .catch(console.warn)
    }

    render(){

        return (
            <div>
                <button onClick={this.disable} className="newDayBtn">New Day</button>
            </div>
        )

    }
}

export default ReverseButton; 