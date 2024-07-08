import { baseUrl } from "@/constants"
import { useEffect, useState } from "react"
import { FiLogOut, FiMenu, FiTruck, FiUsers } from "react-icons/fi"
import { Link, NavLink, useNavigate } from "react-router-dom"

type DashboardLayoutProps = {
  children: React.ReactNode
}

type User = {
  name: string
  avatar: string | null
  role: string
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate()

  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentUser, setCurrentUser] = useState<User>({
    name: "",
    avatar: null,
    role: "",
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string)
    if (user) {
      setCurrentUser(user)
    }
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")

    navigate("/sign-in")
  }

  return (
    <div className='container-fluid dashboard__wrapper'>
      <div className='row min-vh-100'>
        <div className='main__sidebar d-flex flex-column gx-0'>
          <div className='main__logo d-flex justify-content-center align-items-center'>
            <div></div>
          </div>
          <ul className='main__menu'>
            <li className='main__menu-item'>
              <NavLink
                to='/dashboard/cars'
                className={`main__menu-link text-white ${({
                  isActive,
                }: {
                  isActive: any
                }) => (isActive ? "active" : null)}`}
              >
                <FiTruck size={24} color='#ffffff' />
                <span>Cars</span>
              </NavLink>
            </li>
            {currentUser.role === "Super Admin" && (
              <li className='main__menu-item'>
                <NavLink
                  to='/dashboard/users'
                  className={`main__menu-link text-white ${({
                    isActive,
                  }: {
                    isActive: any
                  }) => (isActive ? "active" : null)}`}
                >
                  <FiUsers size={24} color='#ffffff' />
                  <span>Users</span>
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        <div
          className={`sidebar ${
            !isCollapsed && "d-lg-block"
          } d-none col-lg-2 g-0 bg-white`}
        >
          <div className='sidebar__brand'>
            <Link to='' className='sidebar__brand-link navbar-brand'>
              Binar Car Rental
            </Link>
          </div>

          <ul className='sidebar__menu'>
            <li className='sidebar__menu-header'>Cars</li>
            <ul className='sidebar__menu-list'>
              <li className='sidebar__menu-item'>
                <NavLink
                  to='/dashboard/cars'
                  className={`sidebar__menu-link ${({
                    isActive,
                  }: {
                    isActive: any
                  }) => (isActive ? "active" : null)}`}
                >
                  List Cars
                </NavLink>
              </li>

              {currentUser.role === "Super Admin" && (
                <li className='sidebar__menu-item'>
                  <NavLink
                    to='/dashboard/users'
                    className={`sidebar__menu-link ${({
                      isActive,
                    }: {
                      isActive: any
                    }) => (isActive ? "active" : null)}`}
                  >
                    List Users
                  </NavLink>
                </li>
              )}
            </ul>
          </ul>
        </div>

        <div className='col g-0'>
          <div className='row g-0'>
            <div className='topbar col d-flex align-items-center justify-content-between'>
              <button
                type='button'
                className='sidebar__toggle'
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <FiMenu size={24} color='#151515' />
              </button>

              <div className='topbar__right d-flex align-items-center'>
                <div className='dropdown'>
                  <button
                    type='button'
                    className='topbar__user-dropdown dropdown-toggle topbar__user d-flex align-items-center'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    {currentUser.avatar ? (
                      <img
                        src={`${baseUrl}${currentUser.avatar}`}
                        className='topbar__user-avatar'
                        alt=''
                      />
                    ) : (
                      <img
                        src={`https://ui-avatars.com/api/?name=${currentUser.name}`}
                        className='topbar__user-avatar'
                        alt=''
                      />
                    )}
                    <span>{currentUser.name}</span>
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
              </div>
            </div>
          </div>

          <div className='row g-0 p-4'>{children}</div>
        </div>
      </div>
    </div>
  )
}
