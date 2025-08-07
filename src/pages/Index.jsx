import Navigation3D from "@/components/Navigation3D"
import TechSetuHero from "@/components/TechSetuHero"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Code, Palette, Globe, Users, Target, Clock, CheckCircle, Star, Zap } from 'lucide-react'
import { useEffect, useState } from "react"
import Footer from "@/components/Footer"

const Index = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored solutions built specifically for your business needs",
      color: "from-primary to-primary-dark"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Beautiful, user-centered designs that engage and convert",
      color: "from-accent to-accent-dark"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Presence",
      description: "Complete online solutions to establish your brand",
      color: "from-nav-item-hover to-primary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your success",
      color: "from-primary-dark to-accent"
    }
  ]

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "30+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Zap className="w-6 h-6" /> }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      rating: 5,
      text: "Tech Setu transformed our digital presence completely. Their attention to detail and professional approach exceeded our expectations."
    },
    {
      name: "Michael Chen",
      company: "InnovateCo Startup",
      rating: 5,
      text: "Working with Tech Setu was a game-changer for our business. They delivered exactly what we needed, on time and within budget."
    },
    {
      name: "Emily Rodriguez",
      company: "HealthFirst Medical",
      rating: 5,
      text: "The team's expertise in both design and development is remarkable. They created a solution that our users absolutely love."
    }
  ]

  const whyChooseUs = [
    "Proven track record with 50+ successful projects",
    "Expert team with 5+ years of industry experience",
    "24/7 support and maintenance services",
    "Agile development methodology for faster delivery",
    "Competitive pricing with transparent billing",
    "100% client satisfaction guarantee"
  ]

  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation3D />
      <TechSetuHero />
      
      {/* Features Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              What Makes Us{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Different
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with creative vision to deliver solutions that not only meet your requirements but exceed your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300 text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white shadow-3d-light group-hover:animate-float mx-auto mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-nav-item-hover transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${600 + index * 100}ms`, animationFillMode: "both" }}
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

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-card/80 to-secondary/40 backdrop-blur-lg rounded-2xl p-8 shadow-3d-heavy border border-border/20 mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Why Choose Tech Setu?</h3>
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-nav-item-hover flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-background/20 rounded-xl p-6 border border-border/10">
                  <h4 className="text-xl font-bold text-foreground mb-3">Our Promise</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We're committed to delivering exceptional results that drive your business forward. Every project is treated with the utmost care and attention to detail.
                  </p>
                </div>
                <button
                  onClick={() => navigate("/about")}
                  className="group w-full px-6 py-3 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">CLIENT TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              What Our{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-nav-item-hover">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-background">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Digital Vision?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve your digital goals with our expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => navigate("/contact")}
                className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate("/portfolio")}
                className="group px-8 py-4 bg-secondary/50 backdrop-blur-sm rounded-lg font-semibold text-foreground border border-border/20 shadow-3d-light hover:shadow-glow hover:bg-nav-item-hover/10 hover:text-nav-item-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>View Our Portfolio</span>
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

export default Index
