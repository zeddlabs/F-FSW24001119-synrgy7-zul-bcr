import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function Header() {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)
  const closeNavbar = () => setCollapsed(true)

  return (
    <header className='header'>
      <nav className='navbar position-absolute top-0 start-0 end-0 navbar-expand-lg bg-transparent'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            Binar Car Rental
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
            aria-label='Toggle navigation'
            onClick={toggleNavbar}
          >
            <span className='navbar-toggler-icon'>
              <FiMenu size={24} />
            </span>
          </button>
          <div
            className={`offcanvas offcanvas-end ${collapsed ? "" : "show"}`}
            tabIndex={-1}
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
          >
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                Binar Car Rental
              </h5>
              <button
                type='button'
                className='navbar__btn-close btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
                onClick={toggleNavbar}
              >
                <FiX size={24} />
              </button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li className='nav-item'>
                  <Link
                    to='/#our-services'
                    className='nav-link'
                    onClick={closeNavbar}
                  >
                    Our Services
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/#why-us'
                    className='nav-link'
                    onClick={closeNavbar}
                  >
                    Why Us
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/#testimonial'
                    className='nav-link'
                    onClick={closeNavbar}
                  >
                    Testimonial
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/#faq' className='nav-link' onClick={closeNavbar}>
                    FAQ
                  </Link>
                </li>
              </ul>
              <Link
                className='navbar__register-button btn btn-success'
                to='/sign-up'
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
