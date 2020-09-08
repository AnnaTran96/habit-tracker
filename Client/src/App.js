import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login, AddNew, Habits } from './pages'

export class App extends Component {
    render() {
        return (
            <div>
                <h1>Habit Tracker!</h1>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/addnew' component={AddNew}/> 
                    <Route path='/habits' component={Habits}/> 
                </Switch>
            </div>
        )
    }
}

export default App;
