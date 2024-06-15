import React from "react"
import serviceImage from "@/assets/images/img_service.png"
import { FiCheck } from "react-icons/fi"

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
            <li className='service__list-item'>
              <div className='service__list-icon'>
                <FiCheck color='#0D28A6' />
              </div>
              Sewa Mobil Dengan Supir di Sumatera Utara 12 Jam
            </li>
            <li className='service__list-item'>
              <div className='service__list-icon'>
                <FiCheck color='#0D28A6' />
              </div>
              Sewa Mobil Lepas Kunci di Sumatera Utara 24 Jam
            </li>
            <li className='service__list-item'>
              <div className='service__list-icon'>
                <FiCheck color='#0D28A6' />
              </div>
              Sewa Mobil Jangka Panjang Bulanan
            </li>
            <li className='service__list-item'>
              <div className='service__list-icon'>
                <FiCheck color='#0D28A6' />
              </div>
              Gratis Antar - Jemput Mobil di Bandara
            </li>
            <li className='service__list-item'>
              <div className='service__list-icon'>
                <FiCheck color='#0D28A6' />
              </div>
              Layanan Airport Transfer / Drop In Out
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
