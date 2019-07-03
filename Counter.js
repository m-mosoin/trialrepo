import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0,
            count2: 0
        }
        setInterval(this.timer,1000);
    }
// use of callback function 
// when you need some code to execute after updating state
    timer = () =>{
        this.setState({
            count : this.state.count + 1
        }, () =>{
            // callback value
            console.log('callback function', this.state.count)
        })
    }
// use this style when you have to 
// update the state based on the previous state
    increment = () =>{
        this.setState(prevState =>({
            count2 : prevState.count2 + 1
        }))
    }

  render() {
    return (
      <span className="pull-right">
        uptime &#x1F557; - { this.state.count } secs
        <strong> counter - { this.state.count2 }</strong>
        <button className="btn btn-danger btn-lg"
            onClick = { this.increment}
        >Count</button>
      </span>
    )
  }
}

export default Counter
