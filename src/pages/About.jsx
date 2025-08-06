import Navigation3D from "@/components/Navigation3D"
import AboutSection from "@/components/AboutSection"
import Footer from "@/components/Footer"

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation3D />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </div>
  )
}

export default About
