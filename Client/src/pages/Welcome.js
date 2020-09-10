import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../components/style/Welcome.css';

class Welcome extends Component{
    render () {
        return (
            <div id= 'background' className="habits-nav">
                <h1 id="site-title">Habitory</h1>
                <div id="welcome-links">
                    <Link to='/login' className="links">Login</Link>
                    <Link to='/register' className="links">Register</Link>
                </div>
            </div>
        )
    }

}

export default Welcome;