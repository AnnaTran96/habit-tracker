import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.changeInput = this.changeInput.bind(this)
    }

    changeInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Email</label>
                    <input type="text" name="email" onChange={this.changeInput}></input>
                    <label>Password</label>
                    <input type="password" name="password"></input>
                </form>
            </div>
        )
    }
}

export default Login
