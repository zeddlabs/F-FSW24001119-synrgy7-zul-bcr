import {
  CtaBanner,
  Faq,
  Hero,
  Service,
  Testimonial,
  WhyUs,
} from "@/components/sections"
import { HeroCta } from "@/components/ui"

export default function LandingPage() {
  return (
    <>
      <Hero>
        <HeroCta />
      </Hero>
      <Service />
      <WhyUs />
      <Testimonial />
      <CtaBanner />
      <Faq />
    </>
  )
}
