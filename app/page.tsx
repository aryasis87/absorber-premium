import Hero from '@/components/Hero'
import Standards from '@/components/Standards'
import Method from '@/components/Method'
import Testimonials from '@/components/Testimonial'

/* Alur etalase: pernyataan → tiga standar mutu → cara kerja & kepatuhan →
   catatan pemakai, tanya jawab, dan ajakan. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Standards />
      <Method />
      <Testimonials />
    </>
  )
}
