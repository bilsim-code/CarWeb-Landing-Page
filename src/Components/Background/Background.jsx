import './Background.css'
import PropTypes from 'prop-types'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/img3.jpg'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img1.jpg'
const Background = ({playStatus, heroCount}) => {
    if(playStatus) {
        return (
            <video src={video1} 
            className='background' 
            autoPlay loop muted
            ></video>
          )
        }
        else if(heroCount === 0) {
            return (
                <img src={image1} className='background fade-in' alt="image1" />
            )
        }
        else if(heroCount === 1) {
            return (
                <img src={image2} className='background' alt='image2'/>
            )
        }
        else if(heroCount === 2) {
            return(
                <img src={image3} className='background' alt='image3'/>
            )
        }
    }

    Background.propTypes = {
        playStatus: PropTypes.bool,
        heroCount: PropTypes.number
    }
    

export default Background