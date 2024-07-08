import DashboardLayout from "@/components/layouts/DashboardLayout"
import { CarContext, CarContextProps } from "@/contexts/carContext"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function AddCarPage() {
  const { addCar } = useContext(CarContext) as CarContextProps
  const navigate = useNavigate()

  const [name, setName] = useState<string>("")
  const [rentPerDay, setRentPerDay] = useState<number>(0)
  const [image, setImage] = useState<File | null>(null)
  const [sizeId, setSizeId] = useState<number>(1)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setImage(files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (image) {
      addCar({
        name,
        rent_per_day: rentPerDay,
        image,
        size_id: sizeId,
      })

      navigate("/dashboard/cars")
    }
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
          <li className='breadcrumb-item'>
            <Link
              to='/dashboard/cars'
              className='fw-bold text-dark text-decoration-none'
            >
              List Cars
            </Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Add New Car
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
                      placeholder='Nama mobil'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='row mb-3'>
                  <label className='col-sm-3 col-form-label'>
                    Harga <sup className='text-danger'>*</sup>
                  </label>
                  <div className='col-sm-9'>
                    <input
                      type='number'
                      className='form-control'
                      name='rent_per_day'
                      placeholder='Harga sewa per hari'
                      value={rentPerDay}
                      onChange={(e) => setRentPerDay(Number(e.target.value))}
                      required
                    />
                  </div>
                </div>
                <div className='row mb-3'>
                  <label className='col-sm-3 col-form-label'>
                    Foto <sup className='text-danger'>*</sup>
                  </label>
                  <div className='col-sm-9'>
                    <input
                      type='file'
                      className='form-control'
                      name='image'
                      placeholder='Gambar mobil'
                      onChange={handleFileChange}
                      required
                    />
                    <div className='form-text'>File size max: 2MB</div>
                  </div>
                </div>
                <div className='row mb-3'>
                  <label className='col-sm-3 col-form-label'>
                    Ukuran <sup className='text-danger'>*</sup>
                  </label>
                  <div className='col-sm-9'>
                    <select
                      name='size'
                      className='form-select'
                      onChange={(e) => setSizeId(Number(e.target.value))}
                      required
                    >
                      <option disabled>Pilih ukuran</option>
                      <option value='1'>Small</option>
                      <option value='2'>Medium</option>
                      <option value='3'>Large</option>
                    </select>
                  </div>
                </div>
                <div className='row mb-3'>
                  <label className='col-sm-3 col-form-label'>Start rent</label>
                  <div className='col-sm-9'>-</div>
                </div>
                <div className='row mb-3'>
                  <label className='col-sm-3 col-form-label'>Finish rent</label>
                  <div className='col-sm-9'>-</div>
                </div>
                <div className='row mb-3'>
                  <label className='col-sm-3 col-form-label'>Created at</label>
                  <div className='col-sm-9'>-</div>
                </div>
                <div className='row mb-3'>
                  <label className='col-sm-3 col-form-label'>Updated at</label>
                  <div className='col-sm-9'>-</div>
                </div>

                <div>
                  <Link
                    to='/dashboard/cars'
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
