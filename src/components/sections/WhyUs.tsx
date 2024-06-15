import React from "react"
import { FiAward, FiClock, FiTag, FiThumbsUp } from "react-icons/fi"

export default function WhyUs() {
  return (
    <section className='why section container' id='why-us'>
      <h2 className='why__title'>Why Us?</h2>
      <p className='why__desc'>Mengapa harus pilih Binar Car Rental?</p>
      <div className='row g-3'>
        <div className='col-sm-6 col-md-4 col-lg-3'>
          <div className='why__card card h-100'>
            <div className='card-body'>
              <div className='why__card-icon warning'>
                <FiThumbsUp color='#ffffff' size={20} />
              </div>
              <h3 className='why__card-title'>Mobil Lengkap</h3>
              <p className='card-text'>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-4 col-lg-3'>
          <div className='why__card card h-100'>
            <div className='card-body'>
              <div className='why__card-icon danger'>
                <FiTag color='#ffffff' size={20} />
              </div>
              <h3 className='why__card-title'>Harga Murah</h3>
              <p className='card-text'>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-4 col-lg-3'>
          <div className='why__card card h-100'>
            <div className='card-body'>
              <div className='why__card-icon primary'>
                <FiClock color='#ffffff' size={20} />
              </div>
              <h3 className='why__card-title'>Layanan 24 Jam</h3>
              <p className='card-text'>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-4 col-lg-3'>
          <div className='why__card card h-100'>
            <div className='card-body'>
              <div className='why__card-icon success'>
                <FiAward color='#ffffff' size={20} />
              </div>
              <h3 className='why__card-title'>Sopir Profesional</h3>
              <p className='card-text'>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
