import './index.css'

const PasswordItem = props => {
  const {passwordDetails, toShowPasswords, onDelete} = props
  const {id, website, username, password} = passwordDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  const initial = website.splice(0, 1)

  return (
    <li className="password_container">
      <p className="initial">{initial}</p>
      <div className="password_details_container">
        <p className="username_details">{website}</p>
        <p className="username_details">{username}</p>
        {toShowPasswords ? (
          <p className="username_details">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars_image"
          />
        )}
        <button type="button" className="delete" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="deleteIcon"
            testid="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
