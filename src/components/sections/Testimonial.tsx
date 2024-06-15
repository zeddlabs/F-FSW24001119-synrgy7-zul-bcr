import React, { useCallback, useRef } from "react"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import img1 from "@/assets/images/img_photo_1.png"
import img2 from "@/assets/images/img_photo_2.png"
import { FiStar } from "react-icons/fi"

export default function Testimonial() {
  const swiperRef = useRef<SwiperRef>(null)

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return
    swiperRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return
    swiperRef.current.swiper.slideNext()
  }, [])

  return (
    <section className='testimonial section container-fluid' id='testimonial'>
      <h2 className='testimonial__title'>Testimonial</h2>
      <p className='testimonial__desc'>
        Berbagai review positif dari para pelanggan kami
      </p>
      <div className='testimonial__swiper'>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides
          loop
          spaceBetween={32}
          ref={swiperRef}
        >
          <SwiperSlide>
            <div className='testimonial__card card h-100'>
              <div className='card-body'>
                <div className='testimonial__photo'>
                  <img className='img-fluid' src={img1} alt='' />
                </div>
                <div className='testimonial__data'>
                  <div className='testimonial__rating'>
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                  </div>
                  <p className='testimonial__text card-text'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className='testimonial__info mb-0'>John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='testimonial__card card h-100'>
              <div className='card-body'>
                <div className='testimonial__photo'>
                  <img className='img-fluid' src={img2} alt='' />
                </div>
                <div className='testimonial__data'>
                  <div className='testimonial__rating'>
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                  </div>
                  <p className='testimonial__text card-text'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className='testimonial__info mb-0'>John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='testimonial__card card h-100'>
              <div className='card-body'>
                <div className='testimonial__photo'>
                  <img className='img-fluid' src={img2} alt='' />
                </div>
                <div className='testimonial__data'>
                  <div className='testimonial__rating'>
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                  </div>
                  <p className='testimonial__text card-text'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className='testimonial__info mb-0'>John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='testimonial__card card h-100'>
              <div className='card-body'>
                <div className='testimonial__photo'>
                  <img className='img-fluid' src={img1} alt='' />
                </div>
                <div className='testimonial__data'>
                  <div className='testimonial__rating'>
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                    <FiStar fill='#F9CC00' strokeWidth={0} />
                  </div>
                  <p className='testimonial__text card-text'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className='testimonial__info mb-0'>John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='testimonial__navigation'>
          <div className='swiper-button-prev' onClick={handlePrev}>
            <svg
              className='testimonial__navigation-icon'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 18L9 12L15 6'
                stroke='#222222'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
          <div className='swiper-button-next' onClick={handleNext}>
            <svg
              className='testimonial__navigation-icon'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 18L15 12L9 6'
                stroke='#222222'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
      {/* <div className='testimonial__swiper'>
        <div className='swiper'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className='testimonial__card card h-100'>
                <div className='card-body'>
                  <div className='testimonial__photo'>
                    <img
                      className='img-fluid'
                      src='assets/images/img_photo_1.png'
                      alt=''
                    />
                  </div>
                  <div className='testimonial__data'>
                    <div className='testimonial__rating'>
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                    </div>
                    <p className='testimonial__text card-text'>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className='testimonial__info mb-0'>John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='testimonial__card card h-100'>
                <div className='card-body'>
                  <div className='testimonial__photo'>
                    <img
                      className='img-fluid'
                      src='assets/images/img_photo_2.png'
                      alt=''
                    />
                  </div>
                  <div className='testimonial__data'>
                    <div className='testimonial__rating'>
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                    </div>
                    <p className='testimonial__text card-text'>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className='testimonial__info mb-0'>John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='testimonial__card card h-100'>
                <div className='card-body'>
                  <div className='testimonial__photo'>
                    <img
                      className='img-fluid'
                      src='assets/images/img_photo_1.png'
                      alt=''
                    />
                  </div>
                  <div className='testimonial__data'>
                    <div className='testimonial__rating'>
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                    </div>
                    <p className='testimonial__text card-text'>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className='testimonial__info mb-0'>John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='testimonial__card card h-100'>
                <div className='card-body'>
                  <div className='testimonial__photo'>
                    <img
                      className='img-fluid'
                      src='assets/images/img_photo_2.png'
                      alt=''
                    />
                  </div>
                  <div className='testimonial__data'>
                    <div className='testimonial__rating'>
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                    </div>
                    <p className='testimonial__text card-text'>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className='testimonial__info mb-0'>John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='testimonial__card card h-100'>
                <div className='card-body'>
                  <div className='testimonial__photo'>
                    <img
                      className='img-fluid'
                      src='assets/images/img_photo_1.png'
                      alt=''
                    />
                  </div>
                  <div className='testimonial__data'>
                    <div className='testimonial__rating'>
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                      <img src='assets/icons/fi_star.svg' alt='' />
                    </div>
                    <p className='testimonial__text card-text'>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className='testimonial__info mb-0'>John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div> */}
    </section>
  )
}
