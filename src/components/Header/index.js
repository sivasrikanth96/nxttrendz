import './index.css'

const Header = () => (
  <div className="header-container">
    <div>
      <img
        className="header-image"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
    </div>
    <ul className="icons-container">
      <li>Home</li>
      <li>Products</li>
      <li>Cart</li>
      <button type="button" className="login-button">
        Login
      </button>
    </ul>
  </div>
)

export default Header
