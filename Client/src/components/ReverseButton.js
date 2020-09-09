import React, { Component } from 'react';


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
                <button onClick={this.disable}>New Day</button>
            </div>
        )

    }
}

export default ReverseButton; 