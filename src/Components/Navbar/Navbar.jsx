import './Navbar.css'
import {FaBars, FaStar,} from 'react-icons/fa'
import {useState} from 'react'
const Navbar = () => {
    const [bar, setbar] = useState(true)
    
  return (
    <nav className="nav">
        <div className='nav-logo'>Vintage-Life</div>
        {(!bar) ? (
            <ul className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='nav-contact'>Contact</li>
            </ul>
        ):(
            <div></div>
        )}
       
       {bar ? (
        <FaBars
        role='button'
        onClick={() => setbar(!bar)}
        />
       ):(
        <FaStar
  
        role='button'
        onClick={() => setbar(!bar)}
        />
       )}
        
    </nav>
   
  )
}

export default Navbar 