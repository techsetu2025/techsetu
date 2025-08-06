import Navigation3D from "@/components/Navigation3D"
import ServicesSection from "@/components/ServicesSection"
import Footer from "@/components/Footer"

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation3D />
      <div className="pt-16">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  )
}

export default Services
