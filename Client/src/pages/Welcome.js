import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Welcome extends Component{
    render () {
        return (
            <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </>
        )
    }

}

export default Welcome;