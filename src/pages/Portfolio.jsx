import Navigation3D from "@/components/Navigation3D"
import PortfolioSection from "@/components/PortfolioSection"
import Footer from "@/components/Footer"

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation3D />
      <div className="pt-16">
        <PortfolioSection />
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
