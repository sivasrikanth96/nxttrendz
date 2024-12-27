import './index.css'
import Header from '../Header'

const Home = () => (
  <div>
    <Header />
    <div className="bottom-container">
      <div>
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air and it does not quite help that it
          changes all the time.
        </p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)

export default Home
