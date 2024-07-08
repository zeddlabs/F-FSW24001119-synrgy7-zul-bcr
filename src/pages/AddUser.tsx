import DashboardLayout from "@/components/layouts/DashboardLayout"
import { UserContext, UserContextProps } from "@/contexts/userContext"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function AddUserPage() {
  const { addUser } = useContext(UserContext) as UserContextProps
  const navigate = useNavigate()

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [role, setRole] = useState<string>("Customer")
  const [avatar, setAvatar] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setAvatar(files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addUser({
      name,
      email,
      password,
      role,
      avatar,
    })

    navigate("/dashboard/users")
  }

  return (
    <DashboardLayout>
      <nav aria-label='breadcrumb' className='mb-3'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link
              to='/dashboard/users'
              className='fw-bold text-dark text-decoration-none'
            >
              Users
            </Link>
          </li>
          <li className='breadcrumb-item'>
            <Link
              to='/dashboard/users'
              className='fw-bold text-dark text-decoration-none'
            >
              List Users
            </Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Add New User
          </li>
        </ol>
      </nav>

      <div className='card'>
        <div className='card-body p-4'>
          <div className='row'>
            <div className='col-lg-6'>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className='row mb-3'>
                  <label className='col-sm-3 col-form-label'>
                    Nama <sup className='text-danger'>*</sup>
                  </label>
                  <div className='col-sm-9'>
                    <input
                      type='text'
                      className='form-control'
                      name='name'
                      placeholder='Nama user'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='row mb-3'>
                  <label className='col-sm-3 col-form-label'>
                    Email <sup className='text-danger'>*</sup>
                  </label>
                  <div className='col-sm-9'>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      placeholder='Email user'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='row mb-3'>
                  <label className='col-sm-3 col-form-label'>
                    Password <sup className='text-danger'>*</sup>
                  </label>
                  <div className='col-sm-9'>
                    <input
                      type='password'
                      className='form-control'
                      name='password'
                      placeholder='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='row mb-3'>
                  <label className='col-sm-3 col-form-label'>
                    Role <sup className='text-danger'>*</sup>
                  </label>
                  <div className='col-sm-9'>
                    <select
                      name='role'
                      className='form-select'
                      onChange={(e) => setRole(e.target.value)}
                      required
                    >
                      <option disabled>Pilih role</option>
                      <option value='Customer'>Customer</option>
                      <option value='Admin'>Admin</option>
                      <option value='Super Admin'>Super Admin</option>
                    </select>
                  </div>
                </div>
                <div className='row mb-3'>
                  <label className='col-sm-3 col-form-label'>Avatar</label>
                  <div className='col-sm-9'>
                    <input
                      type='file'
                      className='form-control'
                      name='avatar'
                      placeholder='Gambar mobil'
                      onChange={handleFileChange}
                    />
                    <div className='form-text'>File size max: 2MB</div>
                  </div>
                </div>

                <div>
                  <Link
                    to='/dashboard/users'
                    className='btn btn-outline-primary me-3'
                  >
                    Cancel
                  </Link>
                  <button type='submit' className='btn btn-primary'>
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
