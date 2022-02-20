import './index.css'

const PasswordItem = props => {
  const {passwordDetails, toShowPasswords, onDelete} = props
  const {id, website, username, password} = passwordDetails
  const randomNum = Math.floor(Math.random() * 5)
  const initialBackground = `initial_container color${randomNum}`

  const onClickDelete = () => {
    onDelete(id)
  }

  const initial = website[0]

  return (
    <li className="password_container">
      <div className={initialBackground}>
        <p className="initial">{initial}</p>
      </div>
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
      </div>
      <button
        type="button"
        className="delete"
        onClick={onClickDelete}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="deleteIcon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
