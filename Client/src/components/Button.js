import React, { Component } from 'react'

class Button extends Component {
    state = {
        tick: false
    }
    increaseCount=(e)=>{
        this.setState({tick: true})
        e.preventDefault()
        const options = { 
            method: 'PATCH',
        };
        fetch(`http://localhost:3000/tracker/${this.props.id}`, options)
            .then(r => r.json())
            .catch(console.warn)
    }
    render(){
        return(
            <div>
                <button onClick={this.increaseCount} style={{ color: this.state.tick ? 'blue' : 'red' }}>✔</button> 
            </div>
        )
    }
}
export default Button