export const metadata = {
  title: 'Pragmatik',
  description: 'The platform where everyone can become an entrepreneur',
}

import Hero from '@/components/hero'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import PricingTabs from '@/components/pricing-tabs'
import Cta from '@/components/cta'
import FAQ from '@/components/faq'

export default function Home() {
  return (
    <>
      <Hero />
      <Features03 />
      <Features02 />
      <PricingTabs />
      <FAQ/>
      <Cta />
    </>
  )
}
