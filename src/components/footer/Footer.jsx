import React from 'react'
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
      <footer>
          <div className="container footer__container">
                <div className="footer_container">
                <a href="https://www.instagram.com"><InstagramIcon className='footerIcon'/></a>
                <a href="https://www.instagram.com"><TwitterIcon className='footerIcon'/></a>
                <a href="https://www.instagram.com"><FacebookIcon className='footerIcon'/></a>
                <a href="https://www.instagram.com"><LinkedInIcon className='footerIcon'/></a>
                </div>
                <div className="footer__credit">
                    &copy; 2022 p_for_pizza.com!
                </div>
          </div>
      </footer>
  )
}

export default Footer