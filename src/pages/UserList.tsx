import DashboardLayout from "@/components/layouts/DashboardLayout"
import { useContext } from "react"
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { User, UserContext, UserContextProps } from "@/contexts/userContext"
import { baseUrl } from "@/constants"

export default function UserListPage() {
  const { users, deleteUser } = useContext(UserContext) as UserContextProps

  const handleDeleteUser = (id: number) => {
    Swal.fire({
      title: "Menghapus Data User",
      text: "Setelah dihapus, data user tidak dapat dikembalikan. Yakin ingin menghapus?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0D28A6",
      cancelButtonColor: "#FA2C5A",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id)
      }
    })
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
          <li className='breadcrumb-item active' aria-current='page'>
            List Users
          </li>
        </ol>
      </nav>

      <div className='d-flex align-items-center justify-content-between mb-4'>
        <h1 className='fs-3 fw-bold'>List Users</h1>
        <Link to='/dashboard/users/add' className='btn btn-primary'>
          <FiPlus color='#ffffff' /> Add User
        </Link>
      </div>

      <div className='row px-0'>
        <div className='card'>
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Avatar</th>
                  <th scope='col'>Nama</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Role</th>
                  <th scope='col'>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: User, index: number) => (
                  <tr key={user.id}>
                    <th scope='row' style={{ verticalAlign: "middle" }}>
                      {index + 1}
                    </th>
                    <td>
                      {user.avatar ? (
                        <img
                          src={`${baseUrl}${user.avatar}`}
                          className='topbar__user-avatar'
                          style={{ width: 80, height: 80 }}
                          alt=''
                        />
                      ) : (
                        <img
                          src={`https://ui-avatars.com/api/?name=${user.name}`}
                          className='topbar__user-avatar'
                          style={{ width: 80, height: 80 }}
                          alt=''
                        />
                      )}
                    </td>
                    <td style={{ verticalAlign: "middle" }}>{user.name}</td>
                    <td style={{ verticalAlign: "middle" }}>{user.email}</td>
                    <td style={{ verticalAlign: "middle" }}>{user.role}</td>
                    <td style={{ verticalAlign: "middle" }}>
                      <Link
                        to={`/dashboard/users/edit/${user.id}`}
                        className='btn btn-warning me-2'
                      >
                        <FiEdit />
                      </Link>
                      <button
                        className='btn btn-danger'
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <FiTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
