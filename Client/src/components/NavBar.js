import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink to='/habits'>Habits</NavLink>
                <NavLink to='/addnew'>Add New</NavLink>
            </div>
        )
    }
}

export default NavBar;
