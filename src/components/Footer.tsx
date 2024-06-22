import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiTwitch,
  FiTwitter,
} from "react-icons/fi"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className='footer container'>
      <div className='footer__contacts'>
        <p className='footer__address'>
          Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
        </p>
        <p className='footer__email'>binarcarrental@gmail.com</p>
        <p className='footer__phone'>081-233-334-808</p>
      </div>
      <div className='footer__navigation'>
        <Link to='/#our-services' className='footer__navigation-item'>
          Our Services
        </Link>
        <Link to='/#why-us' className='footer__navigation-item'>
          Why Us
        </Link>
        <Link to='/#testimonial' className='footer__navigation-item'>
          Testimonial
        </Link>
        <Link to='/#faq' className='footer__navigation-item'>
          FAQ
        </Link>
      </div>
      <div className='footer__socials'>
        <p>Connect with us</p>
        <div className='footer__social-media'>
          <a href='#' className='footer__social-icon'>
            <FiFacebook color='#ffffff' size={20} />
          </a>
          <a href='#' className='footer__social-icon'>
            <FiInstagram color='#ffffff' size={20} />
          </a>
          <a href='#' className='footer__social-icon'>
            <FiTwitter color='#ffffff' size={20} />
          </a>
          <a href='#' className='footer__social-icon'>
            <FiMail color='#ffffff' size={20} />
          </a>
          <a href='#' className='footer__social-icon'>
            <FiTwitch color='#ffffff' size={20} />
          </a>
        </div>
      </div>
      <div className='footer__copyright'>
        <p>Copyright Binar 2024</p>
        <Link to='/' className='footer__brand'>
          Binar Car Rental
        </Link>
      </div>
    </footer>
  )
}
