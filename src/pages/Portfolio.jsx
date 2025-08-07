import Navigation3D from "@/components/Navigation3D"
import PortfolioSection from "@/components/PortfolioSection"
import Footer from "@/components/Footer"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Code, Palette, Globe, Users, Target, Star, Calendar, ExternalLink, Github, Filter, Search } from 'lucide-react'
import { useEffect, useState } from "react"

const Portfolio = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const portfolioStats = [
    { number: "100+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Calendar className="w-6 h-6" /> }
  ]

  const industries = [
    {
      name: "Healthcare",
      projects: 15,
      description: "Medical apps, patient management systems, telemedicine platforms",
      icon: "🏥"
    },
    {
      name: "E-commerce",
      projects: 20,
      description: "Online stores, marketplace platforms, payment integrations",
      icon: "🛒"
    },
    {
      name: "Education",
      projects: 12,
      description: "Learning management systems, educational apps, online courses",
      icon: "📚"
    },
    {
      name: "Finance",
      projects: 8,
      description: "Banking apps, investment platforms, financial dashboards",
      icon: "💰"
    },
    {
      name: "Real Estate",
      projects: 10,
      description: "Property management, listing platforms, virtual tours",
      icon: "🏠"
    },
    {
      name: "Technology",
      projects: 25,
      description: "SaaS platforms, enterprise software, tech startups",
      icon: "💻"
    }
  ]

  const clientTestimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      project: "Enterprise Dashboard",
      rating: 5,
      text: "Tech Setu delivered an exceptional dashboard that transformed how we visualize our data. The attention to detail and user experience is outstanding.",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      name: "Michael Chen",
      company: "InnovateCo Startup",
      project: "Brand Identity & Website",
      rating: 5,
      text: "From concept to launch, Tech Setu exceeded our expectations. Our new brand identity perfectly captures our vision and the website is beautiful.",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      name: "Emily Rodriguez",
      company: "HealthFirst Medical",
      project: "Healthcare Mobile App",
      rating: 5,
      text: "The mobile app they developed has revolutionized how our patients interact with our services. User engagement increased by 300%.",
      image: "/placeholder.svg?height=60&width=60"
    }
  ]

  const achievements = [
    {
      title: "Best Web Development Agency 2023",
      organization: "Digital Excellence Awards",
      year: "2023"
    },
    {
      title: "Top UI/UX Design Company",
      organization: "Design Recognition Awards",
      year: "2023"
    },
    {
      title: "Client Satisfaction Excellence",
      organization: "Business Excellence Awards",
      year: "2022"
    },
    {
      title: "Innovation in Technology",
      organization: "Tech Innovation Awards",
      year: "2022"
    }
  ]

  const technologies = [
    { name: "React", category: "Frontend", projects: 45 },
    { name: "Node.js", category: "Backend", projects: 38 },
    { name: "Python", category: "Backend", projects: 25 },
    { name: "React Native", category: "Mobile", projects: 20 },
    { name: "MongoDB", category: "Database", projects: 30 },
    { name: "PostgreSQL", category: "Database", projects: 28 },
    { name: "AWS", category: "Cloud", projects: 35 },
    { name: "Figma", category: "Design", projects: 50 }
  ]

  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation3D />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <Code className="w-4 h-4 text-nav-item-hover" />
              <span className="text-sm font-medium text-foreground">OUR PORTFOLIO</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Showcasing Our{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Best Work
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore our diverse portfolio of successful projects across various industries. Each project represents our commitment to excellence, innovation, and client satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => navigate("/contact")}
                className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate("/services")}
                className="group px-8 py-4 bg-secondary/50 backdrop-blur-sm rounded-lg font-semibold text-foreground border border-border/20 shadow-3d-light hover:shadow-glow hover:bg-nav-item-hover/10 hover:text-nav-item-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {portfolioStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-button rounded-lg flex items-center justify-center text-primary-foreground mx-auto group-hover:animate-float mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-background">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">INDUSTRIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Industries We{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions for diverse business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300 h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{industry.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-nav-item-hover transition-colors duration-300">
                        {industry.name}
                      </h3>
                      <p className="text-nav-item-hover font-medium">{industry.projects} Projects</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Portfolio Section */}
      <PortfolioSection />

      {/* Technologies Used */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">TECHNOLOGIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Technologies in{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-xl p-4 shadow-3d-light border border-border/20 hover:shadow-glow transition-all duration-300 text-center">
                  <div className="font-bold text-foreground group-hover:text-nav-item-hover transition-colors duration-300 mb-1">
                    {tech.name}
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">{tech.category}</div>
                  <div className="text-sm text-nav-item-hover font-medium">{tech.projects} projects</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">CLIENT FEEDBACK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              What Clients Say About{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Our Work
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300 h-full">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-nav-item-hover">{testimonial.company}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.project}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">RECOGNITION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Awards &{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Recognition
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300 text-center h-full">
                  <div className="w-12 h-12 bg-gradient-button rounded-lg flex items-center justify-center text-primary-foreground mx-auto group-hover:animate-float mb-4">
                    <Star className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-nav-item-hover transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">{achievement.organization}</p>
                  <p className="text-nav-item-hover font-medium">{achievement.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-card/80 to-secondary/40 backdrop-blur-lg rounded-2xl p-12 shadow-3d-heavy border border-border/20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Ready to Create Your{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Success Story?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients. Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => navigate("/contact")}
                className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate("/services")}
                className="group px-8 py-4 bg-secondary/50 backdrop-blur-sm rounded-lg font-semibold text-foreground border border-border/20 shadow-3d-light hover:shadow-glow hover:bg-nav-item-hover/10 hover:text-nav-item-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>View Services</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Portfolio
