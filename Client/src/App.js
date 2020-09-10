import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login, AddNew, Habits, SignUp, Welcome } from './pages'
import './App.css'

export class App extends Component {
    render() {
        return (
            <div>
                {/* <h1>Habit Tracker!</h1> */}
                <Switch>
                    <Route exact path='/' component={ Welcome }/>
                    <Route path='/login' component={Login}/>
                    <Route path='/addnew' component={AddNew}/> 
                    <Route path='/habits' component={Habits}/> 
                    <Route path='/register' component={SignUp}/> 
                </Switch>
        

              
            </div>
        )
    }
}

export default App;
