import React, { Component } from 'react'
import Options from './Options'
import './style.css'
import TimeLine from './TimeLine'
import { useEffect } from 'react'


class Addition extends Component {

  constructor(props) {
    super(props)

    this.state = {
      operator: '+',
      first_operand: Math.floor(Math.random() * 100) + 78,
      Second_operand: Math.floor(Math.random() * 100) + 67,
      correct_option: Math.floor(Math.random() * 3) + 1,
      score: 0,
      color: 0,
      style: {border: '1px solid black', background:'green', height: '20px'}
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);

    // setInterval(()=>{this.onSelect()
    // // setInterval(()=>{
    // // this.setState({
    // // color: this.state.color+1
    // // }) },100)
    // // this.setState({color:0})
    // },
    //  10000)

   
   
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress);
  }


  handleKeyPress=(event)=> {
    if (event.key === '1' || event.key === '2' || event.key === '3') {
     this.onSelect();
    
    }
  }

  onSelect = (props) => {
    this.setState({
      // operator: props.operator,
      first_operand: Math.floor(Math.random() * 100) + 59,
      Second_operand: Math.floor(Math.random() * 100) + 87,
      correct_option: Math.floor(Math.random() * 3) + 1,
      // score: props.score
      
    });
    // this.getScore()
   
    console.log(this.state.score)
    // console.log(this.state.operator)
  }


  getScore = (score1) => {
    this.setState({
      score: score1
    });
  }


  render(props) {
    

    return (
      <div  >
        <TimeLine />
        <h2>Score: {this.state.score}</h2>
        <h3 className='expression'>{this.state.first_operand} {this.state.operator} {this.state.Second_operand}</h3>
        <div onClick={this.onSelect} >
          <Options correct_option={this.state.correct_option}
            first_operand={this.state.first_operand}
            Second_operand={this.state.Second_operand}
            operator={this.state.operator}
            getScore={this.getScore}
            />
        </div>
      </div>
    )
  }
}

export default Addition