import React from "react"
import heroImage from "@/assets/images/img_car.png"

export default function Hero() {
  return (
    <section className='hero section container'>
      <div className='row align-items-center justify-content-between gap-5'>
        <div className='hero__data col-lg-6'>
          <h1 className='hero__title'>
            Sewa & Rental Mobil Terbaik di kawasan Sumatera Utara
          </h1>
          <p className='hero__desc'>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <a href='#' className='hero__cta btn btn-success'>
            Mulai Sewa Mobil
          </a>
        </div>
        <div className='hero__img col-lg'>
          <img className='img-fluid' src={heroImage} alt='' />
        </div>
      </div>
    </section>
  )
}
