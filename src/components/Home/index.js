import './index.css'
import BlogsList from '../BlogList'
import UserInfo from '../UserInfo'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogsList />
  </div>
)

export default Home
