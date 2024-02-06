import React, { Component } from 'react'

class TimeLine extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         color: 0,
         bgColor: 'rgb(55, 183, 8)',
         time: 60
      }

     setInterval(()=>{this.setState({
        color: this.state.color+(0.05),
        bgColor: ((this.state.color>=90)?'rgb(183, 37, 8)':(this.state.color>=80)?'rgb(183, 101, 8)':(this.state.color>=70)?'rgb(183, 180, 8)':(this.state.color>=60)?'rgb(116, 183, 8)':'rgb(55, 183, 8)')
      })}, (31))

      setInterval(()=>{this.setState({
        time: this.state.time-1
      })}, 1000)
    }

  render() {
    return (
      <div><div style={{background:'rgb(141, 219, 141)', fontSize: '25px' }}>{this.state.time}<div style={{background: `${this.state.bgColor}`,height:'20px', marginTop:"-28px", width: `${this.state.color}%`}}></div></div>
      </div>
    )
  }
}

export default TimeLine