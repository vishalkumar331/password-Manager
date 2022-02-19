import {Component} from 'react'
import './index.css'

import {v4 as uuidV4} from 'uuid'
import PasswordItem from '../passwordItem'
import EmptyView from '../emptyView'

class PasswordManager extends Component {
  state = {
    searchInput: '',
    showPasswords: false,
    passwordsList: [],
    newWebsite: '',
    newUsername: '',
    newPassword: '',
  }

  onAddPassword = event => {
    event.preventDefault()
    const {newWebsite, newUsername, newPassword} = this.state
    const newPasswordDetails = {
      id: uuidV4(),
      website: newWebsite,
      username: newUsername,
      password: newPassword,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPasswordDetails],
      newWebsite: '',
      newUsername: '',
      newPassword: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({newWebsite: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({newUsername: event.target.value})
  }

  onChangePassword = event => {
    this.setState({newPassword: event.target.value})
  }

  onDeletePassword = uniqueNo => {
    const {passwordsList} = this.state
    const updatedList = passwordsList.filter(each => each.id !== uniqueNo)
    this.setState({passwordsList: updatedList})
  }

  render() {
    const {
      searchInput,
      showPasswords,
      passwordsList,
      newWebsite,
      newUsername,
      newPassword,
    } = this.state
    const count = passwordsList.length

    const filteredList = passwordsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(filteredList)

    return (
      <div className="bg_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="password_manager_title"
        />
        <div className="top_section">
          <form type="submit" className="new_password_container">
            <h1 className="new_password_title">Add New Password</h1>
            <div className="input_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input_image"
              />

              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                id="website"
                value={newWebsite}
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input_image"
              />

              <input
                type="text"
                className="input"
                placeholder="Enter Username"
                id="username"
                value={newUsername}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input_image"
              />

              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                id="password"
                value={newPassword}
                onChange={this.onChangePassword}
              />
            </div>
            <button
              type="submit"
              className="add_btn"
              onClick={this.onAddPassword}
            >
              Add
            </button>
          </form>
          <div className="top_section_img_container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="top_section_image"
            />
          </div>
        </div>
        <div className="bottom_section">
          <div className="your_passwords_top_section">
            <div className="passwordsDescription">
              <h1 className="your_passwords_title">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="search_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input_image"
              />
              <input type="search" className="searchBox" />
            </div>
          </div>
          <hr className="line" />
          <div className="show_passwords_container">
            <input type="checkbox" className="check_box" id="showPasswords" />
            <label htmlFor="showPasswords" className="label">
              Show Passwords
            </label>
          </div>
          {count === 0 && <EmptyView />}
          {count > 0 && (
            <ul className="passwordsList">
              {filteredList.map(eachPassword => (
                <PasswordItem
                  passwordDetails={eachPassword}
                  toShowPasswords={showPasswords}
                  onDelete={this.onDeletePassword}
                  key={eachPassword.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
