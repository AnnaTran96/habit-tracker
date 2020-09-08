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
        <div>
            {showData()}
            <Results results={results}/>
        </div>
    )
}
export default HabitCard;



// import React, { Component } from 'react';
// import Button from './Button'

// class HabitCard extends Component {
//     state = {
//         results: [],
//         // load: false

//     }  

//     async componentDidMount(){
//         const url = `http://localhost:3000/tracker`;
//         const response = await fetch(url)
//         const data = await response.json();
//         // console.log(data.habits)
//         this.setState({ results: data.habits })
//         // this.setState({ load: true })
//     }


//     getResults = () => {this.state.results.map((item, idx) => (
//         <div key={idx}>
//                     {/* {console.log(item)} */}
//                     <p>Habit: {item.name}</p>
//                     <p>Count: {item.count}</p>
//                     {console.log(item.name)}
//                     {console.log(item.count)}
//                     <Button count={item.count}/>

//         </div>
//     ))}

//     // getResults = () => {
//     //     this.state.results.map((item, idx) => {
//     //         return <div key={idx}> {/* {console.log(item)} */} <p>Habit: {item.name}</p> <p>Count: {item.count}</p>{console.log(item.name)} {console.log(item.count)} <Button count={item.count}/> </div>
//     //     })
//     // }


//     // renderResults = () => {
//     //     return(
//     //         <>
//     //         {console.log(this.state.results)}
//     //         {this.state.results.map((item,id)=>{
//     //             <div key={id}>
//     //                 <p>Habit: {item.name}</p>
//     //                 <p>Count: {item.count}</p>

//     //             </div>
//     //         })}
//     //         </>
//     //     )
//     // }

//     render(){ 

//         // const getResults = () => {
//         //     const results = this.state.results
//         //    results.map((item, idx) => {
//         //         return <div key={idx}> <p>Habit: {item.name}</p> <p>Count: {item.count}</p>{console.log(item.name)} {console.log(item.count)} <Button count={item.count}/> </div>
//         //     })
//         // }
       
//         return(
//             <div>
//                 {/* {console.log(this.state.load)} */}

//                 {/* {this.state.load ? this.renderResults() : <h1></h1>}       */}
//                 {/* Habit: {this.state.results.name}<br></br> */}
//                 {/* Count: {this.state.results.count} */}
//                 {/* {this.renderResults} */}
//                 {this.getResults()}

//             </div>

//         )
//     }
// }
// export default HabitCard; 