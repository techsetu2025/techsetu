import Navigation3D from "@/components/Navigation3D"
import TechSetuHero from "@/components/TechSetuHero"
import ServicesSection from "@/components/ServicesSection"
import AboutSection from "@/components/AboutSection"
import PortfolioSection from "@/components/PortfolioSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation3D />
      <TechSetuHero />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Index
