import React from "react"
import serviceImage from "@/assets/images/img_service.png"
import { ServiceItem } from "../ui"

export default function Service() {
  return (
    <section className='service section container' id='our-services'>
      <div className='row align-items-center justify-content-center gap-4'>
        <div className='service__img col-lg text-center'>
          <img className='img-fluid' src={serviceImage} alt='' />
        </div>
        <div className='service__data col-lg'>
          <h2 className='service__title'>
            Best Car Rental for any kind of trip in Sumatera Utara!
          </h2>
          <p className='service__desc'>
            Sewa mobil di Sumatera Utara bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <ul className='service__list'>
            <ServiceItem text='Sewa Mobil Dengan Supir di Sumatera Utara 12 Jam' />
            <ServiceItem text='Sewa Mobil Lepas Kunci di Sumatera Utara 24 Jam' />
            <ServiceItem text='Sewa Mobil Jangka Panjang Bulanan' />
            <ServiceItem text='Gratis Antar - Jemput Mobil di Bandara' />
            <ServiceItem text='Layanan Airport Transfer / Drop In Out' />
          </ul>
        </div>
      </div>
    </section>
  )
}
