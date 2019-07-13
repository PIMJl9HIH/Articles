import React, {Component} from 'react'

class UserForm extends Component {
  state = {
    userText: ''
  }

  render() {
    return (
      <div>
        <label >
          Name:
          <input
            type="text"
            value={this.state.userText}
            onChange={this.changeInput}
          />
        </label>
      </div>
    )
  }

  changeInput = (e) => {
    if (e.target.value.length > 10) return;
    this.setState({
      userText: e.target.value
    })
  }

}

export default UserForm