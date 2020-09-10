import React, {Component} from 'react';
import LoginCard from '../components/LoginCard'
import { Link } from 'react-router-dom'
import '../components/style/Login.css'

class Login extends Component {

    render(){
        return(
            <div>
                <h3 className="logo">Habitory</h3>
                <h1 className="login-title">Login</h1>
                <LoginCard></LoginCard>
                <div className="login-text">
                    <p>Don't have an account?</p>
                    <Link to='/register' className="register-link">Register Now</Link>
                </div>
            </div>
        )
    }
}

export default Login;