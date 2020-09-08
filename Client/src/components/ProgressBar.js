import React, {Component} from 'react';
import './ProgressBar.css'
import moment from 'moment'

class Progress extends Component {
    constructor(props) {
      super(props);
      this.state = {
        width: 0,
        text: "",
        disable: false,
        markedDate: moment(new Date()).format("dddd DD/MM/YYYY")
      }; 

      this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {

        this.setState(state => {
          if (state.width + this.props.frequency === 110) {
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
        <div className="wrapper" onClick={(e) => { this.handleClick(e); }}>
          {this.state.width + '%'}
          {this.state.text}
          <div className="bar" style={style} />
          <button disabled={this.state.disable} frequency={this.props.frequency}>+</button>
          <p>{this.state.markedDate}</p>
        </div>
      );
    }
}
   

export default Progress;