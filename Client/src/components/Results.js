import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import ProgressCard from './ProgressBar'

class Results extends Component{

    increaseCount = e => {
        e.preventDefault();
        const options = { 
            method: 'PATCH',
        };
        fetch(`http://localhost:3000/tracker/`, options)
            .then(r => r.json())
            .catch(console.warn)
    }

    render(){
 
        const allData = this.props.results.map((item, idx) =>
            <div key={idx}>
                <h2>{item.name}</h2>
                <h2>Streak: {item.count}</h2>
                <ProgressCard id={item.id} frequency={item.frequency}/>
            </div>) 

        return (
            <div>
                {allData} 
            </div>
        )
    }
}
export default withRouter(Results);