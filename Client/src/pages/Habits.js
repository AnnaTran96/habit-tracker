import React from 'react'
import HabitCard from '../components/HabitCard'
import NavBar from '../components/NavBar'
import '../components/style/Results.css'

const Habits = () => {
    return (
        <>
            <h3 className="logo">Habitory</h3>
            <NavBar/>
            <h1 className="habit-title">Habits</h1>
            <HabitCard/>
        
        </>
    )
}

export default Habits;