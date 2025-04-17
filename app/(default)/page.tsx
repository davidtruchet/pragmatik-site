export const metadata = {
  title: 'Pragmatik',
  description: 'The platform where everyone can become an entrepreneur',
}

import Hero from '@/components/hero'
import Features01 from '@/components/features-01'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import PricingTabs from '@/components/pricing-tabs'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Features03 />
      <Features02 />
      <Features01 />
      <PricingTabs />
      <Testimonials />
      <Cta />
    </>
  )
}
