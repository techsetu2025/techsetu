import Navigation3D from "@/components/Navigation3D"
import ServicesSection from "@/components/ServicesSection"
import Footer from "@/components/Footer"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Code, Palette, Globe, Users, Smartphone, Database, Settings, CheckCircle, Star, Zap, Target, Clock, Award } from 'lucide-react'
import { useEffect, useState } from "react"

const Services = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const serviceCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development Services",
      description: "Custom software solutions built with cutting-edge technologies",
      services: ["Custom Software Development", "Web Applications", "API Development", "System Integration"],
      color: "from-primary to-primary-dark"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Services",
      description: "Creative design solutions that engage and convert users",
      services: ["UI/UX Design", "Brand Identity", "Graphic Design", "User Research"],
      color: "from-accent to-accent-dark"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Solutions",
      description: "Complete digital transformation for your business",
      services: ["Website Development", "E-commerce Solutions", "Digital Marketing", "SEO Optimization"],
      color: "from-nav-item-hover to-primary"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications",
      services: ["iOS Development", "Android Development", "React Native", "Flutter Apps"],
      color: "from-primary-dark to-accent"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution.",
      icon: <Palette className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodology with continuous testing and quality assurance.",
      icon: <Code className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support, maintenance, and optimization services.",
      icon: <Zap className="w-6 h-6" />
    }
  ]

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Figma", category: "Design" },
    { name: "Adobe Creative Suite", category: "Design" },
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "Next.js", category: "Frontend" }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic website or app",
        "Responsive design",
        "3 revisions included",
        "2 weeks delivery",
        "Basic SEO setup",
        "1 month support"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      price: "$7,999",
      description: "Ideal for growing businesses",
      features: [
        "Advanced web application",
        "Custom functionality",
        "5 revisions included",
        "4 weeks delivery",
        "Advanced SEO & Analytics",
        "3 months support",
        "API integrations",
        "Database design"
      ],
      popular: true,
      buttonText: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale projects",
      features: [
        "Complex system development",
        "Unlimited revisions",
        "Custom timeline",
        "Dedicated project manager",
        "Advanced security features",
        "1 year support",
        "Training & documentation",
        "Scalable architecture"
      ],
      popular: false,
      buttonText: "Contact Us"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      rating: 5,
      text: "Tech Setu delivered exactly what we needed. Their custom software solution increased our productivity by 40%.",
      service: "Custom Software Development"
    },
    {
      name: "Michael Chen",
      company: "InnovateCo",
      rating: 5,
      text: "The UI/UX design they created for our app is outstanding. User engagement increased by 60% after the redesign.",
      service: "UI/UX Design"
    },
    {
      name: "Emily Rodriguez",
      company: "HealthFirst",
      rating: 5,
      text: "Professional, reliable, and delivered on time. Our new website has generated 3x more leads than before.",
      service: "Web Development"
    }
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
              <Settings className="w-4 h-4 text-nav-item-hover" />
              <span className="text-sm font-medium text-foreground">OUR SERVICES</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From custom software development to stunning UI/UX design, we offer a complete range of digital services to transform your business and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => navigate("/contact")}
                className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate("/portfolio")}
                className="group px-8 py-4 bg-secondary/50 backdrop-blur-sm rounded-lg font-semibold text-foreground border border-border/20 shadow-3d-light hover:shadow-glow hover:bg-nav-item-hover/10 hover:text-nav-item-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">SERVICE CATEGORIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              What We{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Specialize In
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {serviceCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white shadow-3d-light group-hover:animate-float mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-nav-item-hover transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                  <div className="space-y-2">
                    {category.services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-nav-item-hover flex-shrink-0" />
                        <span className="text-sm text-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Process Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-background">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">OUR PROCESS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              How We{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven 4-step process ensures successful project delivery from concept to launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300 text-center h-full">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-button rounded-xl flex items-center justify-center text-primary-foreground mx-auto shadow-3d-light group-hover:animate-float">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-nav-item-hover rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-nav-item-hover transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Technologies We{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Master
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with the latest and most reliable technologies to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-xl p-4 shadow-3d-light border border-border/20 hover:shadow-glow transition-all duration-300 text-center">
                  <div className="font-bold text-foreground group-hover:text-nav-item-hover transition-colors duration-300 mb-1">
                    {tech.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">PRICING</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Transparent{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the package that best fits your needs. All packages include our quality guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ${
                  plan.popular ? 'scale-105' : ''
                }`}
              >
                <div className={`bg-card/80 backdrop-blur-lg rounded-2xl p-8 shadow-3d-medium border transition-all duration-300 h-full ${
                  plan.popular 
                    ? 'border-nav-item-hover/50 shadow-glow' 
                    : 'border-border/20 hover:shadow-glow'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-nav-item-hover text-white px-4 py-2 rounded-full text-sm font-bold shadow-3d-light">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-nav-item-hover mb-2">{plan.price}</div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-nav-item-hover flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate("/contact")}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-button text-primary-foreground shadow-3d-medium hover:shadow-glow'
                        : 'bg-secondary/50 backdrop-blur-sm text-foreground border border-border/20 shadow-3d-light hover:shadow-glow hover:bg-nav-item-hover/10 hover:text-nav-item-hover'
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
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
              <span className="text-sm font-medium text-nav-item-hover">CLIENT SUCCESS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Client{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Success Stories
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
                    <div className="text-xs text-muted-foreground mt-1">{testimonial.service}</div>
                  </div>
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
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Next Project?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => navigate("/contact")}
                className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate("/portfolio")}
                className="group px-8 py-4 bg-secondary/50 backdrop-blur-sm rounded-lg font-semibold text-foreground border border-border/20 shadow-3d-light hover:shadow-glow hover:bg-nav-item-hover/10 hover:text-nav-item-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>View Portfolio</span>
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

export default Services
