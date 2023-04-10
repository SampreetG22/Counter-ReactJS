import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="mainContainer">
        <div className="subContainer">
          <h1 className="mainHead">
            The Button has been clicked <br />
            <span className="numberCSS">{count}</span> times
          </h1>
          <p className="paraCSS">Click the button to increase the count!</p>
          <button
            onClick={this.onIncrement}
            type="button"
            className="buttonCSS"
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
