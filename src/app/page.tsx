
import Footer from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import SpecialPackage from '@/components/sections/special-package'
import TopDestination from '@/components/sections/top-destinations'
import { TrustSection } from '@/components/sections/trust-section'
import WhyChooseUs from '@/components/sections/why-choose-us'


export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustSection />
        <WhyChooseUs />
        <TopDestination />
        <SpecialPackage />
      </main>
      <Footer />
    </>
  )
}