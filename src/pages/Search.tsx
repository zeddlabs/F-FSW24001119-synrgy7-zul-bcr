import { Footer, Header, Main } from "@/components"
import { Hero } from "@/components/sections"
import { FilterForm } from "@/components/ui"
import { Car } from "@/types/car"
import { getRandomInt } from "@/utils/random"
import { useEffect, useState } from "react"
import { FiCalendar, FiSettings, FiUsers } from "react-icons/fi"

export default function SearchPage() {
  const [cars, setCars] = useState<Car[]>([])
  const [filteredCars, setFilteredCars] = useState<Car[]>([])

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const updatedCars = data.map((car: Car) => {
          const isPositive = getRandomInt(0, 1) === 1
          const timeAt = new Date()
          const mutator = getRandomInt(1000000, 100000000)
          const availableAt = new Date(
            timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
          )

          const driverType = isPositive
            ? "Dengan Sopir"
            : "Tanpa Sopir (Lepas Kunci)"

          return {
            ...car,
            availableAt,
            driverType,
          }
        })

        setCars(updatedCars)
        setFilteredCars(updatedCars)
      })
  }, [])

  return (
    <>
      <Header />
      <Main>
        <Hero />
        <FilterForm cars={cars} setCars={setFilteredCars} />
        <section className='result container'>
          <div className='row gy-4' id='carContainer'>
            {filteredCars.map((car, index) => (
              <div className='col-md-6 col-lg-4' key={index}>
                <div className='card'>
                  <img
                    src={car.image}
                    className='card-img-top result__car-image'
                    alt=''
                  />
                  <div className='card-body result__card-body'>
                    <p className='result__car-name'>
                      {car.manufacture + " " + car.model}
                    </p>
                    <p className='result__car-price'>
                      {car.rentPerDay.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}{" "}
                      / hari
                    </p>
                    <p className='result__car-desc'>{car.description}</p>
                    <ul className='result__car-features'>
                      <li className='result__car-feature'>
                        <FiUsers size={20} color='#8A8A8A' /> {car.capacity}{" "}
                        Orang
                      </li>
                      <li className='result__car-feature'>
                        <FiSettings size={20} color='#8A8A8A' />{" "}
                        {car.transmission}
                      </li>
                      <li className='result__car-feature'>
                        <FiCalendar size={20} color='#8A8A8A' />
                        Tahun {car.year}
                      </li>
                      <li className='result__car-feature'>
                        <FiUsers size={20} color='#8A8A8A' />
                        {car.driverType}
                      </li>
                    </ul>
                    <button className='btn btn-success w-100 choose-car__btn'>
                      Pilih Mobil
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Main>
      <Footer />
    </>
  )
}
