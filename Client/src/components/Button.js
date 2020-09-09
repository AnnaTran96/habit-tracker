import React, { Component } from 'react';


class Button extends Component {

    disable = (e)=>{
        e.preventDefault()
        const options = { 
            method: 'PUT',
        };
        fetch(`http://localhost:3000/tracker/${this.props.id}`, options)
            .then(r => r.json())
            .catch(console.warn)
    }

    render(){

        return (
            <div>
                <button disabled ={this.props.disable} onClick={this.disable}>Click when complete</button>
            </div>
        )

    }
}

export default Button; 