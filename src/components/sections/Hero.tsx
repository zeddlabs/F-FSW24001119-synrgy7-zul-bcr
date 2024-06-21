import heroImage from "@/assets/images/img_car.png"

type HeroProps = {
  children?: React.ReactNode
}

export default function Hero({ children }: HeroProps) {
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
          {children}
        </div>
        <div className='hero__img col-lg'>
          <img className='img-fluid' src={heroImage} alt='' />
        </div>
      </div>
    </section>
  )
}
