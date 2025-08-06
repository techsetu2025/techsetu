import Navigation3D from "@/components/Navigation3D"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation3D />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
