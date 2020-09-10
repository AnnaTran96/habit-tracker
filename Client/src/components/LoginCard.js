import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './style/Login.css'

class LoginCard extends Component {


     state = {
            email: '',
            password: ''
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
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
    
        fetch('http://localhost:3000/login', options)
            .then(r => r.json())
            .then(data=>{
                if(data.id){
                    this.props.history.push(`/habits`)
                }
            }).catch(err => alert('Invalid Login'))     
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="login-form">
                    <label>Email</label>
                    <input type="text" name="email" onChange={this.handleChange}></input>
                    <label>Password</label>
                    <input type="password" name="password"></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginCard);