import React, {Component} from 'react';
import { withRouter } from "react-router";

class AddNewCard extends Component {
    state = {
        name:"",
        frequency:"",
        
    }

    handleChange = e => {
        this.setState({ habit: e.target.habit.value })
        this.setState({ frequency: e.target.frequency.value })
        
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const data = {
            name: e.target.name.value,
        }
    
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        }
    
        fetch('http://localhost:3000/tracker', options)
            .then(r => r.json())
            .then(this.props.history.push(`/habits`))
            .catch(console.warn)        
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' id="name" placeholder='Enter Habit'onChange={this.handleChange}></input>
                    <input type='number' id='frequency' placeholder='Enter Frequency' onChange={this.handleChange}></input>
                    <input type='submit'/>
                </form>
            </div>
        )
    }

}

export default withRouter(AddNewCard)