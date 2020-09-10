import React, {Component} from 'react';
import { withRouter } from "react-router";
import NavBar from './NavBar'

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
            frequency: e.target.frequency.value
        }
    
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        }
    
        fetch('http://localhost:3000/tracker', options)
            .then(r => r.json())
            .then(console.log(data))
            .then(this.props.history.push(`/habits`))
            .catch(console.warn)        
    }


    render(){
        return(
            <div>
                <NavBar></NavBar>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' id="name" placeholder='Enter Habit'onChange={this.handleChange}></input><br></br>
            
                    <label>Select No. of Frequency: </label> <br/>
                            <select name="frequency" id ='frequency' onChange={this.handleChange}>
                                <option value="" selected disabled>Please select an option</option>
                                <option value = "100"> 1 </option>
                                <option value = "50"> 2 </option>
                                <option value = "20"> 5 </option>
                            </select>

                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default withRouter(AddNewCard)