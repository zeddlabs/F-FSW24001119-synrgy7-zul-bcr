import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiTwitch,
  FiTwitter,
} from "react-icons/fi"

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
        <a href='#our-servicess' className='footer__navigation-item'>
          Our Services
        </a>
        <a href='#why-us' className='footer__navigation-item'>
          Why Us
        </a>
        <a href='#testimonial' className='footer__navigation-item'>
          Testimonial
        </a>
        <a href='#faq' className='footer__navigation-item'>
          FAQ
        </a>
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
        <a href='#' className='footer__brand'>
          Binar Car Rental
        </a>
      </div>
    </footer>
  )
}
