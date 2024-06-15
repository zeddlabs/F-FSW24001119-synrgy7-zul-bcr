import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <header className="header">
        <nav
          className="navbar position-absolute top-0 start-0 end-0 navbar-expand-lg bg-transparent"
        >
          <div className="container">
            <a className="navbar-brand" href="#">Binar Car Rental</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon">
                <FiMenu size={24} />
              </span>
            </button>
            <div
              className={`offcanvas offcanvas-end ${collapsed ? '' : 'show'}`}
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Binar Car Rental
                </h5>
                <button
                  type="button"
                  className="navbar__btn-close btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={toggleNavbar}
                >
                  <FiX size={24} />
                </button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link" href="#our-services">Our Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#why-us">Why Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonial">Testimonial</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#faq">FAQ</a>
                  </li>
                </ul>
                <a className="navbar__register-button btn btn-success" href="#"
                  >Register</a
                >
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default App
