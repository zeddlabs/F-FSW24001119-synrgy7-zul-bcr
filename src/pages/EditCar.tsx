import DashboardLayout from "@/components/layouts/DashboardLayout"
import { CarContext, CarContextProps } from "@/contexts/carContext"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function EditCarPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { cars, updateCar } = useContext(CarContext) as CarContextProps

  const car = cars.find((car) => car.id === Number(id))

  const [name, setName] = useState<string>(car ? car.name : "")
  const [rentPerDay, setRentPerDay] = useState<number>(
    car ? car.rent_per_day : 0
  )
  const [image, setImage] = useState<File | null>(null)
  const [sizeId, setSizeId] = useState<number>(car ? car.size.id : 1)
  const [startRent, setStartRent] = useState<string>("")
  const [finishRent, setFinishRent] = useState<string>("")

  useEffect(() => {
    if (!car) {
      navigate("/dashboard/cars")
    }
  }, [car, navigate])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setImage(files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    updateCar({
      id: Number(id),
      name,
      rent_per_day: rentPerDay,
      image,
      size_id: sizeId,
      start_rent: startRent,
      finish_rent: finishRent,
    })

    navigate("/dashboard/cars")
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
            Edit Car
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
                  <label className='col-sm-3 col-form-label'>Foto</label>
                  <div className='col-sm-9'>
                    <input
                      type='file'
                      className='form-control'
                      name='image'
                      placeholder='Gambar mobil'
                      onChange={handleFileChange}
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
                      defaultValue={sizeId}
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
                  <div className='col-sm-9'>
                    <input
                      type='date'
                      className='form-control'
                      name='start_rent'
                      placeholder='Start rent'
                      value={startRent}
                      onChange={(e) => setStartRent(e.target.value)}
                    />
                  </div>
                </div>
                <div className='row mb-3'>
                  <label className='col-sm-3 col-form-label'>Finish rent</label>
                  <div className='col-sm-9'>
                    <input
                      type='date'
                      className='form-control'
                      name='finish_rent'
                      placeholder='Finish rent'
                      value={finishRent}
                      onChange={(e) => setFinishRent(e.target.value)}
                    />
                  </div>
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
