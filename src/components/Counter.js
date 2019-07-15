import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {

  render() {

    return (
      <div>
          <h1>{this.props.counter}</h1>
          <button onClick={this.handleIncrement}>increment me</button>

      </div>
    )
  }

  handleIncrement = () => {
    const {increment} = this.props
    increment()
  }

}

function mapStateToProps(state) {
    return {
      counter: state.count
    }
}

const mapToDispatch = {increment}

export default connect(mapStateToProps, mapToDispatch)(Counter)