import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './navbar.css';



const Navbar = () => {
  
  return (
    <nav>
      <div className="container navbar__container">
        <div className='navbar'>
          <div className="leftside">
              <img src={Logo} alt="pic"/>
          </div>
          <div className="rightside">
            <Link className='lin' to='/'>Home</Link>
            <Link className='lin' to='/menu'>Menu</Link>
            <Link className='lin' to='/about'>About</Link>
            <Link className='lin' to='/contact'>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 