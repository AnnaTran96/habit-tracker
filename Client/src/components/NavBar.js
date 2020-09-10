import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style/NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div className="habits-nav">
                <NavLink to='/habits' className="navlink">Habits</NavLink>
                <NavLink to='/addnew' className="navlink">Add New</NavLink>
                <NavLink to='/' className="navlink">Log Out</NavLink>

            </div>
        )
    }
}

export default NavBar;
