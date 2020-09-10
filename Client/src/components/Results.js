import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import ProgressCard from './ProgressBar'
import Button from './Button'
import ReverseButton from './ReverseButton';
import './style/Results.css'

class Results extends Component{

    // increaseCount = e => {
    //     e.preventDefault();
    //     const options = { 
    //         method: 'PATCH',
    //     };
    //     fetch(`http://localhost:3000/tracker/`, options)
    //         .then(r => r.json())
    //         .catch(console.warn)
    // }


    render(){
 
        const allData = this.props.results.map((item, idx) =>
            <div key={idx} className="results-container">
                <h2 className="title">{item.name}</h2>
                <h2 className="streak">Streak: {item.count}</h2>
                <ProgressCard id={item.id} frequency={item.frequency} disable={item.disable}/><br></br>
                <Button id={item.id} disable={item.disable} ></Button>   
                <ReverseButton id={item.id}></ReverseButton>
                
            </div>) 

        return (
            <div className="all-habits">
                {allData} 
            </div>
        )
    }
}
export default withRouter(Results);