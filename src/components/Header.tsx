import React from "react"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { Link } from "react-scroll"

export default function Header() {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)
  const closeNavbar = () => setCollapsed(true)

  return (
    <header className='header'>
      <nav className='navbar position-absolute top-0 start-0 end-0 navbar-expand-lg bg-transparent'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            Binar Car Rental
          </a>
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
                    to='our-services'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={300}
                    className='nav-link'
                    onClick={closeNavbar}
                  >
                    Our Services
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='why-us'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={300}
                    className='nav-link'
                    onClick={closeNavbar}
                  >
                    Why Us
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='testimonial'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={300}
                    className='nav-link'
                    onClick={closeNavbar}
                  >
                    Testimonial
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='faq'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={300}
                    className='nav-link'
                    onClick={closeNavbar}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
              <a className='navbar__register-button btn btn-success' href='#'>
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
