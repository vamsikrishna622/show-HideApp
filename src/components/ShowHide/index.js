// Write your code here

import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  showFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="hidden-name-element">Joe</p>}
          </div>
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            {lastName && <p className="hidden-name-element">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
