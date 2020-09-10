import React, { Component } from 'react';
import { withRouter } from "react-router";

class SignUpCard extends Component {

    state = {
        email: '',
        password:''

    }

    handleChange = e => {
        e.preventDefault();
        this.setState({ email: e.target.email.value })
        this.setState({ password: e.target.password.value }) 
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
    
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        }
    
        fetch('http://localhost:3000/register', options)
            .then(r => r.json())
            .then(this.props.history.push(`/login`))
            .catch(console.warn)        
    }



    render(){

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='name' id='name' onChange={this.handleChange} placeholder='Name'></input>
                    <input type='text' name='email' id='email' onChange={this.handleChange} placeholder='Email'></input>
                    <input type='password' name='password' id='password' onChange={this.handleChange} placeholder='Password'></input>
                    <input type='submit' ></input>
                </form>

            </div>
        )
    }
}

export default withRouter(SignUpCard); 