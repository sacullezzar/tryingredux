import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Counter.css';

class Counter extends Component {
  state = { count: this.props.count }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  decrement = () => {
    if(this.props.count > 0){
      return this.props.dispatch({ type: 'DECREMENT' })
    } 
    return
  }

  reset = () => {
    this.props.dispatch({ type: 'RESET' })
  }

  render() {
    return (
      <div className='App'>
      <div className='title'>
        <h2>Counter</h2>
      </div>
        <div className='controls'>
        <div className='down-container'>
          <button className='down' onClick={this.decrement} >-</button>
        </div>
          <div className='current-container'>
          <span className='current'>{this.props.count}</span>
          </div>
          <div className='up-container'>
          <button className='up' onClick={this.increment} >+</button>
          </div>
          <div className='reset-container'>
          <button className='reset' onClick={this.reset} >Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter);
