import { lazy, Suspense } from "react"

// Lazy load components for better performance
const Navigation3D = lazy(() => import("@/components/Navigation3D"))
const TechSetuHero = lazy(() => import("@/components/TechSetuHero"))
const ServicesSection = lazy(() => import("@/components/ServicesSection"))
const AboutSection = lazy(() => import("@/components/AboutSection"))
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"))
const ContactSection = lazy(() => import("@/components/ContactSection"))
const Footer = lazy(() => import("@/components/Footer"))

// Loading component for sections
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
)

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<SectionLoader />}>
        <Navigation3D />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TechSetuHero />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <PortfolioSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default Index
