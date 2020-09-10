import React, { Component } from 'react';
import './style/Button.css'

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
                <button className="clickBtn" disabled ={this.props.disable} onClick={this.disable}>Click when 100%</button>
            </div>
        )

    }
}

export default Button; 