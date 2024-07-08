import DashboardLayout from "@/components/layouts/DashboardLayout"
import { Car, CarContext, CarContextProps } from "@/contexts/carContext"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import { useContext } from "react"
import { FiClock, FiEdit, FiKey, FiPlus, FiTrash } from "react-icons/fi"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import deleteImg from "@/assets/images/img-BeepBeep.png"
import { baseUrl } from "@/constants"

export default function DashboardPage() {
  const { cars, deleteCar } = useContext(CarContext) as CarContextProps

  const handleDeleteCar = (id: number) => {
    Swal.fire({
      title: "Menghapus Data Mobil",
      text: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
      iconHtml: `<img src=${deleteImg} alt='delete' />`,
      showCancelButton: true,
      confirmButtonColor: "#0D28A6",
      cancelButtonColor: "#FA2C5A",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCar(id)
      }
    })
  }

  return (
    <DashboardLayout>
      <nav aria-label='breadcrumb' className='mb-3'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link
              to='/dashboard/cars'
              className='fw-bold text-dark text-decoration-none'
            >
              Cars
            </Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            List Cars
          </li>
        </ol>
      </nav>

      <div className='d-flex align-items-center justify-content-between mb-4'>
        <h1 className='fs-3 fw-bold'>List Cars</h1>
        <Link to='/dashboard/cars/add' className='btn btn-primary'>
          <FiPlus color='#ffffff' /> Add Car
        </Link>
      </div>

      <div className='row px-0'>
        {cars.map((car: Car) => (
          <div className='col-xl-4 col-lg-6 mb-3' key={car.id}>
            <div className='card'>
              <img
                src={`${baseUrl}${car.image}`}
                className='card-img-top'
                alt='...'
              />
              <div className='card-body result__card-body'>
                <p className='result__car-name'>{car.name}</p>
                <p className='result__car-price'>
                  {car.rent_per_day.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}{" "}
                  / hari
                </p>
                <ul className='result__car-features'>
                  <li className='result__car-feature'>
                    <FiKey size={20} color='#8A8A8A' />{" "}
                    {car.start_rent
                      ? format(new Date(car.start_rent), "dd MMM yyyy", {
                          locale: id,
                        })
                      : "Start rent"}{" "}
                    -{" "}
                    {car.finish_rent
                      ? format(new Date(car.finish_rent), "dd MMM yyyy", {
                          locale: id,
                        })
                      : "Finish rent"}
                  </li>
                  <li className='result__car-feature'>
                    <FiClock size={20} color='#8A8A8A' /> Updated at{" "}
                    {format(new Date(car.updated_at), "dd MMM yyyy, HH:mm", {
                      locale: id,
                    })}
                  </li>
                </ul>

                <div className='row'>
                  <div className='col'>
                    <button
                      type='button'
                      className='btn btn-outline-danger w-100'
                      onClick={() => handleDeleteCar(car.id)}
                    >
                      <FiTrash color='#FA2C5A' /> Delete
                    </button>
                  </div>
                  <div className='col'>
                    <Link
                      to={`/dashboard/cars/edit/${car.id}`}
                      className='btn btn-success w-100'
                    >
                      <FiEdit color='#ffffff' /> Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
