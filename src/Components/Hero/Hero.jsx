import './Hero.css'
import PropTypes from 'prop-types'
import {FaArrowCircleRight, FaPause, FaPlay} from 'react-icons/fa'
const Hero = ({setHeroCount, setPlayStatus, heroCount, heroData, playStatus}) => {
  return (
    <div className='hero'>
        <div className="icons">
            <div className="hero-text">
               <p>{heroData.text1}</p>
               <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <p>Explore the features</p>
                <FaArrowCircleRight/>
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : 'hero-dot' }></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? 'hero-dot orange' : 'hero-dot'}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? 'hero-dot orange' : 'hero-dot'}></li>
                </ul>
           
            <div className="hero-play">
                {playStatus ? <FaPause onClick={() => setPlayStatus(!playStatus)}/> : <FaPlay onClick={() => setPlayStatus(!playStatus)}/>}
                <p>See the video</p>
            </div>
            </div>
        </div>
    </div>
  )
}

Hero.propTypes = {
    setHeroCount: PropTypes.func,
    setPlayStatus: PropTypes.func,
    heroCount: PropTypes.number,
    playStatus: PropTypes.bool,
    heroData: PropTypes.arrayOf(
        PropTypes.shape({
            text1: PropTypes.string,
            text2: PropTypes.string
        })
    )
}
export default Hero