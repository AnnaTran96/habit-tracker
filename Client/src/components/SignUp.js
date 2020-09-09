import React, { Component } from 'react'

class SignUp extends Component {

    render(){

        return (
            <div>
                <form>
                    <input type='text' name='name' id='name' placeholder='Name'></input>
                    <input type='text' name='email' id='email' placeholder='Email'></input>
                    <input type='password' name='password' id='password' placeholder='Password'></input>
                </form>

            </div>
        )
    }
}

export default SignUp; 