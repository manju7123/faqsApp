import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isButtonClicked: false,
  }

  buttonClicked = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  render() {
    const {isButtonClicked} = this.state
    const {listItem} = this.props
    const {questionText, answerText} = listItem
    const plusOrMinus = isButtonClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const plusOrMinusAlt = isButtonClicked ? 'minus' : 'plus'

    return (
      <li className="list-card">
        <div className="button-card">
          <h1 className="question"> {questionText} </h1>
          <button className="btn" type="button" onClick={this.buttonClicked}>
            <img className="btn-image" src={plusOrMinus} alt={plusOrMinusAlt} />
          </button>
        </div>
        {isButtonClicked && (
          <div className="answer-card">
            <hr className="line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
