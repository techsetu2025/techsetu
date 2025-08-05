"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Palette, Globe, Users, ArrowRight, X, CheckCircle, Clock, Target, Mail } from "lucide-react"

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedService(null)
    setIsModalOpen(false)
    // Restore body scroll
    document.body.style.overflow = "unset"
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isModalOpen])

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software",
      description: "Tailored software solutions built to meet your specific business requirements",
      features: ["Enterprise Applications", "API Development", "System Integration", "Cloud Solutions"],
      color: "from-primary to-primary-dark",
      detailedDescription:
        "Our custom software development services are designed to transform your unique business challenges into powerful digital solutions. We work closely with your team to understand your specific requirements and deliver software that not only meets your current needs but scales with your business growth.",
      benefits: [
        "Increased operational efficiency by up to 40%",
        "Seamless integration with existing systems",
        "Scalable architecture for future growth",
        "24/7 technical support and maintenance",
        "Custom reporting and analytics dashboards",
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"],
      timeline: "8-16 weeks",
      pricing: "Starting from $15,000",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern UI/UX Design",
      description: "User-centered design that creates engaging and intuitive digital experiences",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-accent to-accent-dark",
      detailedDescription:
        "We create stunning, user-centered designs that not only look beautiful but also provide exceptional user experiences. Our design process is rooted in research, testing, and iteration to ensure your users love interacting with your product.",
      benefits: [
        "Improved user engagement by up to 60%",
        "Reduced user acquisition costs",
        "Higher conversion rates",
        "Enhanced brand perception",
        "Mobile-first responsive design",
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle"],
      timeline: "4-8 weeks",
      pricing: "Starting from $8,000",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Website",
      description: "Responsive websites that perfectly represent your brand and drive results",
      features: ["Responsive Design", "SEO Optimization", "Performance", "CMS Integration"],
      color: "from-nav-item-hover to-primary",
      detailedDescription:
        "Build a powerful online presence with our custom website development services. We create fast, secure, and SEO-optimized websites that convert visitors into customers and grow with your business.",
      benefits: [
        "Lightning-fast loading speeds",
        "Search engine optimization included",
        "Mobile-responsive design",
        "Content management system",
        "Analytics and performance tracking",
      ],
      technologies: ["React", "Next.js", "WordPress", "Shopify", "Webflow"],
      timeline: "6-12 weeks",
      pricing: "Starting from $5,000",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Visual identity and brand materials that make lasting impressions",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Digital Assets"],
      color: "from-accent-dark to-nav-item-hover",
      detailedDescription:
        "Create a memorable brand identity that stands out in the market. Our graphic design services cover everything from logo design to complete brand guidelines, ensuring consistency across all your marketing materials.",
      benefits: [
        "Professional brand identity",
        "Consistent visual messaging",
        "Print and digital ready assets",
        "Brand guidelines documentation",
        "Unlimited revisions included",
      ],
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "After Effects"],
      timeline: "2-6 weeks",
      pricing: "Starting from $3,000",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Custom Portfolio",
      description: "Professional portfolios that showcase your work and attract opportunities",
      features: ["Personal Branding", "Showcase Design", "Interactive Elements", "Performance"],
      color: "from-primary-dark to-accent",
      detailedDescription:
        "Stand out from the competition with a custom portfolio that showcases your work in the best light. We create interactive, performance-optimized portfolios that tell your story and attract the right opportunities.",
      benefits: [
        "Professional online presence",
        "Interactive project showcases",
        "SEO optimized for visibility",
        "Fast loading performance",
        "Easy content management",
      ],
      technologies: ["React", "Three.js", "GSAP", "Next.js", "Framer Motion"],
      timeline: "3-6 weeks",
      pricing: "Starting from $4,000",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[cardIndex] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = document.querySelectorAll(".service-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
            <span className="text-sm font-medium text-nav-item-hover">OUR EXPERTISE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Digital{" "}
            <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to transform your ideas into powerful, user-friendly applications
            that drive business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-index={index}
              className={`service-card group relative perspective-1000 transition-all duration-1000 ${
                visibleCards[index] ? "opacity-100 translate-y-0 rotate-x-0" : "opacity-0 translate-y-10 rotate-x-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* 3D Card Container */}
              <div className="relative transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-y-6">
                {/* Main Card */}
                <div className="relative bg-card/80 backdrop-blur-lg rounded-2xl p-8 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-500 overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white shadow-3d-light group-hover:animate-float`}
                    >
                      {service.icon}
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-nav-item-hover transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-3 p-2 rounded-lg bg-background/20 border border-border/10 group-hover:bg-background/30 transition-all duration-300"
                          style={{ transitionDelay: `${featureIndex * 50}ms` }}
                        >
                          <div className="w-2 h-2 bg-nav-item-hover rounded-full animate-pulse" />
                          <span className="text-sm text-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <button
                      onClick={() => openModal(service)}
                      className="group/btn w-full flex items-center justify-center space-x-2 px-4 py-3 bg-secondary/50 backdrop-blur-sm rounded-lg font-medium text-foreground border border-border/20 hover:bg-nav-item-hover/10 hover:text-nav-item-hover hover:border-nav-item-hover/30 transition-all duration-300 shadow-3d-light hover:shadow-glow"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-primary/10 rounded-lg rotate-45 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* 3D Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 rounded-2xl transform translate-y-2 translate-x-2 -z-10 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Ready to Transform Your Digital Presence?</h3>
          <button className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2 mx-auto">
            <span>Start Your Project Today</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={closeModal} />

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-lg rounded-2xl shadow-3d-heavy border border-border/20 animate-slide-down">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-secondary/50 hover:bg-destructive/20 rounded-lg transition-all duration-200 group"
            >
              <X className="w-5 h-5 text-muted-foreground group-hover:text-destructive" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-0">
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${selectedService.color} rounded-xl flex items-center justify-center text-white shadow-3d-light`}
                >
                  {selectedService.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">{selectedService.title}</h2>
                  <p className="text-muted-foreground">{selectedService.description}</p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8">
              {/* Detailed Description */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedService.detailedDescription}</p>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedService.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-background/20 rounded-lg border border-border/10"
                    >
                      <CheckCircle className="w-5 h-5 text-nav-item-hover flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-nav-item-hover/10 text-nav-item-hover rounded-full text-sm font-medium border border-nav-item-hover/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-background/20 rounded-lg border border-border/10">
                  <h4 className="font-bold text-foreground mb-2 flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-nav-item-hover" />
                    <span>Timeline</span>
                  </h4>
                  <p className="text-muted-foreground">{selectedService.timeline}</p>
                </div>
                <div className="p-4 bg-background/20 rounded-lg border border-border/10">
                  <h4 className="font-bold text-foreground mb-2 flex items-center space-x-2">
                    <Target className="w-4 h-4 text-nav-item-hover" />
                    <span>Investment</span>
                  </h4>
                  <p className="text-muted-foreground">{selectedService.pricing}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border/20">
                <button className="flex-1 group relative px-6 py-3 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button className="flex-1 px-6 py-3 bg-secondary/50 backdrop-blur-sm rounded-lg font-semibold text-foreground border border-border/20 hover:bg-nav-item-hover/10 hover:text-nav-item-hover transition-all duration-300 flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Get Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ServicesSection
