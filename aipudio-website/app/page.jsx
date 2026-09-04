'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Workflow from '@/components/Workflow'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07090E] text-slate-100">
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Portfolio />
      <Workflow />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
