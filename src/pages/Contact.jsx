import Navigation3D from "@/components/Navigation3D"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, Calendar, Users, CheckCircle, Star, Globe } from 'lucide-react'
import { useEffect, useState } from "react"

const Contact = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "8347991132",
      action: "tel:8347991132",
      available: "Mon-Fri 9AM-6PM IST",
      color: "from-primary to-primary-dark"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      description: "Send us your project details",
      contact: "techsetu2025@gmail.com",
      action: "mailto:techsetu2025@gmail.com",
      available: "24/7 Response",
      color: "from-accent to-accent-dark"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Quick chat for instant support",
      contact: "8511231514",
      action: "https://wa.me/8511231514",
      available: "Instant Response",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Meeting",
      description: "Book a consultation call",
      contact: "Free 30-min consultation",
      action: "tel:8347991132",
      available: "Flexible Timing",
      color: "from-nav-item-hover to-primary"
    }
  ]

  const officeInfo = [
    {
      title: "Headquarters",
      address: "Tech Hub, Innovation District",
      city: "Bangalore, Karnataka",
      country: "India",
      hours: "Mon-Fri: 9AM-6PM IST"
    }
  ]

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 8-16 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive support packages including maintenance, updates, and technical support. Our basic support is included for the first month, with extended packages available."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Node.js, Python, MongoDB, PostgreSQL, AWS, and mobile technologies like React Native and Flutter."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We can integrate with your existing team, provide consulting services, or work as an extended development team based on your needs."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, timeline, and complexity."
    },
    {
      question: "Do you sign NDAs for confidential projects?",
      answer: "Yes, we take confidentiality seriously and are happy to sign NDAs before discussing your project details. Your intellectual property is always protected."
    }
  ]

  const reasons = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "5+ years of experience with 50+ successful projects"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "98% of our projects are delivered on or before deadline"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Client Satisfaction",
      description: "100% client satisfaction rate with ongoing relationships"
    }
  ]

  const serviceAreas = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "UI/UX Design Services",
    "E-commerce Solutions",
    "Digital Marketing",
    "Brand Identity Design",
    "System Integration",
    "Cloud Solutions",
    "Maintenance & Support"
  ]

  return (
    <div className="min-h-screen bg-background">
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
              <Mail className="w-4 h-4 text-nav-item-hover" />
              <span className="text-sm font-medium text-foreground">GET IN TOUCH</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Let's Bring Your{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Ideas to Life
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to start your digital transformation journey? We're here to help you every step of the way. Get in touch with our expert team today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:8347991132"
                className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/8511231514"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-secondary/50 backdrop-blur-sm rounded-lg font-semibold text-foreground border border-border/20 shadow-3d-light hover:shadow-glow hover:bg-nav-item-hover/10 hover:text-nav-item-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">CONTACT METHODS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Multiple Ways to{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Reach Us
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the communication method that works best for you. We're available across multiple channels to ensure you can reach us easily.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className={`group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300 text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-white shadow-3d-light group-hover:animate-float mx-auto mb-4`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-nav-item-hover transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">{method.description}</p>
                  <p className="text-foreground font-medium mb-2">{method.contact}</p>
                  <p className="text-sm text-nav-item-hover mb-4">{method.available}</p>
                  <a
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-lg font-medium text-foreground border border-border/20 hover:bg-nav-item-hover/10 hover:text-nav-item-hover transition-all duration-300"
                  >
                    <span>Contact</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-background">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Why Work With{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Tech Setu?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300 text-center h-full">
                  <div className="w-12 h-12 bg-gradient-button rounded-lg flex items-center justify-center text-primary-foreground mx-auto group-hover:animate-float mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-nav-item-hover transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Service Areas */}
          <div className="bg-gradient-to-br from-card/80 to-secondary/40 backdrop-blur-lg rounded-2xl p-8 shadow-3d-heavy border border-border/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Service Areas</h3>
              <p className="text-muted-foreground">We provide comprehensive digital solutions across multiple domains</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((service, index) => (
                <div
                  key={service}
                  className="flex items-center space-x-2 p-3 bg-background/20 rounded-lg border border-border/10 hover:bg-nav-item-hover/10 hover:border-nav-item-hover/30 transition-all duration-300"
                >
                  <CheckCircle className="w-4 h-4 text-nav-item-hover flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Office Information */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">OFFICE LOCATION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Visit Our{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Office
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {officeInfo.map((office, index) => (
                <div
                  key={office.title}
                  className="group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-8 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-button rounded-lg flex items-center justify-center text-primary-foreground group-hover:animate-float">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-nav-item-hover transition-colors duration-300 mb-2">
                          {office.title}
                        </h3>
                        <div className="space-y-2 text-muted-foreground">
                          <p>{office.address}</p>
                          <p>{office.city}</p>
                          <p>{office.country}</p>
                          <div className="flex items-center space-x-2 pt-2">
                            <Clock className="w-4 h-4 text-nav-item-hover" />
                            <span className="text-foreground font-medium">{office.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Quick Contact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:8347991132"
                    className="flex items-center space-x-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/20 hover:bg-nav-item-hover/10 hover:border-nav-item-hover/30 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 text-nav-item-hover" />
                    <div>
                      <div className="font-medium text-foreground">Call Us</div>
                      <div className="text-sm text-muted-foreground">8347991132</div>
                    </div>
                  </a>
                  <a
                    href="mailto:techsetu2025@gmail.com"
                    className="flex items-center space-x-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/20 hover:bg-nav-item-hover/10 hover:border-nav-item-hover/30 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 text-nav-item-hover" />
                    <div>
                      <div className="font-medium text-foreground">Email Us</div>
                      <div className="text-sm text-muted-foreground">techsetu2025@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-card/80 to-secondary/40 backdrop-blur-lg rounded-2xl p-8 shadow-3d-heavy border border-border/20">
                <div className="aspect-video bg-background/20 rounded-xl flex items-center justify-center border border-border/10">
                  <div className="text-center space-y-4">
                    <Globe className="w-16 h-16 text-nav-item-hover mx-auto" />
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">Interactive Map</h4>
                      <p className="text-muted-foreground">
                        Located in the heart of Bangalore's tech district, easily accessible by public transport.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">FAQ</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-nav-item-hover transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Still have questions? We're here to help!</p>
            <button
              onClick={() => navigate("/contact")}
              className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2 mx-auto"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
