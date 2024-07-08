import { baseUrl } from "@/constants"
import { useState } from "react"
import { FiLogOut, FiMenu, FiX } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(true)
  const user = JSON.parse(localStorage.getItem("user") as string)

  const toggleNavbar = () => setCollapsed(!collapsed)
  const closeNavbar = () => setCollapsed(true)

  const handleSignOut = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")

    navigate("/")
  }

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
                  <a
                    href={`/#our-services`}
                    className='nav-link'
                    onClick={closeNavbar}
                  >
                    Our Services
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    href={`/#why-us`}
                    className='nav-link'
                    onClick={closeNavbar}
                  >
                    Why Us
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    href={`/#testimonial`}
                    className='nav-link'
                    onClick={closeNavbar}
                  >
                    Testimonial
                  </a>
                </li>
                <li className='nav-item'>
                  <a href={`/#faq`} className='nav-link' onClick={closeNavbar}>
                    FAQ
                  </a>
                </li>
              </ul>
              {user ? (
                <div className='dropdown'>
                  <button
                    type='button'
                    className='topbar__user-dropdown dropdown-toggle topbar__user d-flex align-items-center'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    {user.avatar ? (
                      <img
                        src={`${baseUrl}${user.avatar}`}
                        className='topbar__user-avatar'
                        alt=''
                      />
                    ) : (
                      <img
                        src={`https://ui-avatars.com/api/?name=${user.name}`}
                        className='topbar__user-avatar'
                        alt=''
                      />
                    )}
                    <span>{user.name}</span>
                  </button>

                  <ul className='dropdown-menu'>
                    <li>
                      <a
                        href='#'
                        role='button'
                        className='dropdown-item'
                        onClick={handleSignOut}
                      >
                        <FiLogOut color='#151515' /> Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  className='navbar__register-button btn btn-success'
                  to='/sign-up'
                >
                  Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
