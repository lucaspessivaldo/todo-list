import { Link } from 'react-router-dom'
import img from '../../assets/homepage-hero.png'
import FeatureSection from './FeatureSection'
import './homepage.css'

export default function Homepage() {
  return (
    <div className='hero-section-container'>
      <div className="homepage-title">Organize your life and work, use Todo.</div>
      <p className='homepage-small-title'>Become focused, organized, and calm with Todo.</p>
      <Link to={'/signup'} className='homepage-button'>
        <span className="button_top">Get Started</span>
      </Link>
      <img src={img} className="homepage-img" />
      <FeatureSection />
    </div>
  )
}
