import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import Button from './Button'

class Results extends Component{

    state = { habitID: this.props.match.params.id }


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
                <h2>{item.count}</h2>
                <Button id={item.id}/>
            </div>) 

        return (
            <div>
                {allData} 
            </div>
        )
    }
}
export default withRouter(Results);