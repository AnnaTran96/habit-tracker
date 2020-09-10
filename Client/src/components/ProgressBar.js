import React, {Component} from 'react';
import './style/ProgressBar.css'

class Progress extends Component {
    constructor(props) {
      super(props);
      this.state = {
        width: 0,
        text: "",
        disable: false

      }; 

      // this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {

        this.setState(state => {
          if (state.width + this.props.frequency === 105) {
            return { width: 0 };
          } else if (state.width === 100) {
                return {text: 'Well Done!', disable: true } 
          } else {
              return { width: state.width + this.props.frequency };
          }
        });
        e.preventDefault()
        const options = { 
            method: 'PATCH',
        };
        fetch(`http://localhost:3000/tracker/${this.props.id}`, options)
            .then(r => r.json())
            .catch(console.warn)

    }


    render() {
      const style = {
        width: this.state.width + '%'
      };
    
      return (
        <div className="wrapper">
          {this.state.width + '%'}
          {this.state.text}
          <div className="bar" style={style} />
          <button className= "upBtn" disabled={this.props.disable} frequency={this.props.frequency} onClick={(e) => { this.handleClick(e) }}>+</button>
        </div>
      );
    }
}
   

export default Progress;