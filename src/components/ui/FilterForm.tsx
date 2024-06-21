import { FormEvent, useEffect, useState } from "react"
import { FiChevronDown, FiClock, FiUsers } from "react-icons/fi"
import Select from "./Select"
import DatePicker from "./DatePicker"
import { Car } from "@/types/car"

type FilterFormProps = {
  cars: Car[]
  setCars: (cars: Car[]) => void
}

export default function FilterForm({ cars, setCars }: FilterFormProps) {
  const [driverType, setDriverType] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [time, setTime] = useState<string>("")
  const [passengerCount, setPassengerCount] = useState("")
  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    if (driverType && date && time) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [driverType, date, time])

  const updateFilteredCars = (e: FormEvent) => {
    e.preventDefault()
    const filteredCars = cars.filter((car) => {
      const isDriverTypeMatch = car.driverType === driverType
      const isDateMatch = car.availableAt >= new Date(date + "T" + time)
      const isPassengerMatch = car.capacity >= parseInt(passengerCount)

      if (passengerCount) {
        return isDriverTypeMatch && isDateMatch && isPassengerMatch
      }

      return isDriverTypeMatch && isDateMatch
    })

    setCars(filteredCars)
  }

  return (
    <>
      <form id='filterForm' onSubmit={(e) => updateFilteredCars(e)}>
        <div className='filter__panel container mb-5'>
          <div className='row g-3 ms-0'>
            <div className='col-12 col-md-6 col-lg-3'>
              <Select
                label='Tipe Driver'
                placeholder='Pilih Tipe Driver'
                icon={
                  <FiChevronDown size={18} color='#8A8A8A' className='icon' />
                }
                options={["Dengan Sopir", "Tanpa Sopir (Lepas Kunci)"]}
                value={driverType}
                setValue={setDriverType}
              />
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <DatePicker setDate={setDate} />
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <Select
                label='Pilih Waktu'
                placeholder='Pilih Waktu'
                icon={<FiClock size={18} color='#8A8A8A' className='icon' />}
                options={["08:00", "09:00", "10:00", "11:00", "12:00"]}
                value={time}
                setValue={setTime}
              />
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className='filter__form-group'>
                <label className='filter__label'>
                  Jumlah Penumpang (opsional)
                </label>
                <div className='filter__input-box' id='passenger'>
                  <input
                    type='number'
                    placeholder='Jumlah Penumpang'
                    min='1'
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(e.target.value)}
                  />
                  <FiUsers size={18} color='#8A8A8A' className='icon' />
                </div>
              </div>
            </div>
          </div>
          <button
            className='filter__btn btn btn-success g-3'
            type='submit'
            disabled={disabled}
          >
            Cari Mobil
          </button>
        </div>
      </form>
      <div className='filter__backdrop'></div>
    </>
  )
}
