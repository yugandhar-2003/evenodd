// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomNumber: null}

  generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    this.setState({randomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="container">
        <h1 className="incrementnum">
          {randomNumber !== null ? `Count ${randomNumber}` : 'Count 0'}
        </h1>
        <p className="para">
          {randomNumber % 2 === 0 ? 'Count is Even' : 'Count is Odd'}
        </p>
        <button
          type="button"
          className="buttons"
          onClick={this.generateRandomNumber}
        >
          Increment
        </button>
        <p className="pa">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
