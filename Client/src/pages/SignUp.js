import React, { Component } from 'react';
import SignUpCard from '../components/SignUpCard'
import { Link } from 'react-router-dom'
import '../components/style/SignUpCard.css'

class SignUp extends Component{

    render(){
        return(
            <div>
                <h3 className="logo">Habitory</h3>
                <h1 className="register">Register</h1>
                <SignUpCard></SignUpCard>
                <div className="register-text">
                    <p>Already registered?</p>
                    <Link to='/login' className="login-link">Click Here to Log in</Link>
                </div>
            </div>
        )
    }
}

export default SignUp;