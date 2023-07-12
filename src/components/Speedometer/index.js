import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`incremented ${prevState.count}`)

      return {count: prevState.count + 10}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      console.log(`incremented ${prevState.count}`)
      return {count: prevState.count - 10}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="height"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="description">Speed is {count}mph</h1>
        <p className="limit">min Limit is 0mph, max Limit is 200mph</p>
        <div>
          <button type="submit" className="b1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button type="submit" className="b2" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
