import React, { useState } from 'react';
import Results from './Results'
import axios from 'axios'

function HabitCard () {
    const [ results, setResults ] = useState([])
    const showData = () => {
        axios.get(`http://localhost:3000/tracker`)
            .then(function (response) {
                setResults(response.data.habits)
        })
    }
    return(
        <div className="habit-container">
            {showData()}
            <Results results={results}/>
        </div>
    )
}
export default HabitCard;