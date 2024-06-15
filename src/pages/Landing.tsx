import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Main from "@/components/Main"
import {
  Hero,
  Service,
  WhyUs,
  Testimonial,
  CtaBanner,
  Faq,
} from "@/components/sections"
import React from "react"

export default function LandingPage() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Service />
        <WhyUs />
        <Testimonial />
        <CtaBanner />
        <Faq />
      </Main>
      <Footer />
    </>
  )
}
