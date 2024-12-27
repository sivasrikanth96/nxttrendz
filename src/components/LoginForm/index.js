import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    console.log(response)
    console.log(data.jwt_token)

    if (response.ok === true) {
      this.successPage(data.jwt_token)
    } else {
      this.failurePage(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  successPage = () => {
    const {history} = this.props
    history.replace('/')
  }

  failurePage = error => {
    this.setState({
      errorMsg: error,
      showErrorMsg: true,
    })
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-image"
        />
        <form className="login-form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-image"
          />
          <label className="label" htmlFor="usernames">
            USERNAME
          </label>
          <input
            type="text"
            onChange={this.onChangeUsername}
            value={username}
            className="input-class"
            id="usernames"
            placeholder="Username"
          />
          <label className="label" htmlFor="passwords">
            PASSWORD
          </label>
          <input
            type="password"
            onChange={this.onChangePassword}
            value={password}
            className="input-class"
            id="passwords"
            placeholder="Password"
          />
          <button type="submit" className="login-button">
            Login
          </button>
          {showErrorMsg && <p>*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
