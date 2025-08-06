"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, ArrowRight, PhoneCall, MessageSquare } from 'lucide-react'
import emailjs from "@emailjs/browser"
import Modal from "@/components/ui/Modal"

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    project_type: "",
    budget_range: "",
    message: "",
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [showScheduleCallModal, setShowScheduleCallModal] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const sectionRef = useRef(null)
  const formRef = useRef(null)

  // EmailJS service IDs (replace with your actual IDs from environment variables in a real app)
  const SERVICE_ID = "service_emu2xai" // From image 2
  const TEMPLATE_ID = "template_kg970bi" // From image 3
  const PUBLIC_KEY = "SVKz-D0cD8hn6RRgw" // From image 1
  const WHATSAPP_NUMBER = "+918511231514" // Updated with +91
  const PHONE_NUMBER = "+918347991132" // Updated with +91

  const projectTypes = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "UI/UX Design",
    "E-commerce Website",
    "Brand Identity Design",
    "Digital Marketing",
    "System Integration",
    "Consulting Services",
    "Other"
  ]

  const budgetRanges = [
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹2,50,000",
    "₹2,50,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "₹10,00,000+",
    "Let's Discuss"
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Effect for managing body blur and popup auto-hide
  useEffect(() => {
    let timer
    if (showSuccessModal || showErrorModal) {
      timer = setTimeout(() => {
        setShowSuccessModal(false)
        setShowErrorModal(false)
      }, 5000) // Popups disappear after 5 seconds
    }

    return () => clearTimeout(timer)
  }, [showSuccessModal, showErrorModal])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    setShowErrorModal(false) // Hide any previous error popup

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setShowSuccessModal(true)
      setFormData({
        user_name: "",
        user_email: "",
        user_subject: "",
        project_type: "",
        budget_range: "",
        message: "",
      })
    } catch (error) {
      console.error("Failed to send email:", error)
      console.error("EmailJS Response Status:", error.status, "Text:", error.text) // Log detailed error
      setShowErrorModal(true) // Show error popup
    } finally {
      setIsSending(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "techsetu2025@gmail.com",
      description: "Send us an email anytime!",
      action: "mailto:techsetu2025@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+91 8347991132",
      description: "Mon-Fri from 9am to 6pm",
      action: "tel:+918347991132"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Tech Hub, Innovation District",
      description: "Bangalore, Karnataka, India",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      content: "Mon - Fri: 9AM - 6PM IST",
      description: "Always available for urgent matters",
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-background"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
            <span className="text-sm font-medium text-nav-item-hover">GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Let's Start Your{" "}
            <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
              Digital Journey
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us today and let's discuss how we can help you
            achieve your digital goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h3>

              <p className="text-muted-foreground leading-relaxed">
                We're here to help you bring your digital vision to life. Whether you have a specific project in mind or
                just want to explore possibilities, we'd love to hear from you.
              </p>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="group relative transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-card/80 backdrop-blur-lg rounded-xl p-6 shadow-3d-light border border-border/20 hover:shadow-glow transition-all duration-300 h-full">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-button rounded-lg flex items-center justify-center text-primary-foreground group-hover:animate-float">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-foreground group-hover:text-nav-item-hover transition-colors duration-300">
                            {info.title}
                          </h4>
                          {info.action ? (
                            <a 
                              href={info.action}
                              className="text-foreground font-medium hover:text-nav-item-hover transition-colors duration-300"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.content}</p>
                          )}
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-border/20 shadow-3d-medium">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-foreground">Ready to Get Started?</h4>
                <p className="text-muted-foreground">
                  Let's schedule a consultation to discuss your project requirements and how we can help you succeed.
                </p>
                <button
                  onClick={() => setShowScheduleCallModal(true)}
                  className="group relative px-6 py-3 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Schedule a Call</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-8 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Send us a Message</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-nav-item-hover focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-nav-item-hover focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="user_subject"
                      value={formData.user_subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-nav-item-hover focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="project_type" className="text-sm font-medium text-foreground">
                        Project Type *
                      </label>
                      <select
                        id="project_type"
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-nav-item-hover focus:border-transparent transition-all duration-300 text-foreground"
                        required
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-background text-foreground">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="budget_range" className="text-sm font-medium text-foreground">
                        Budget Range *
                      </label>
                      <select
                        id="budget_range"
                        name="budget_range"
                        value={formData.budget_range}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-nav-item-hover focus:border-transparent transition-all duration-300 text-foreground"
                        required
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-background text-foreground">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-nav-item-hover focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2"
                    disabled={isSending}
                  >
                    {isSending ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-primary-foreground"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* 3D Shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 rounded-2xl transform translate-y-3 translate-x-3 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} className="border-green-500/50">
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="64" height="64">
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
              />
              <path
                className="checkmark__check"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="48"
                strokeDashoffset="48"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                style={{
                  animation: "checkmark-stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards",
                }}
              />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
          <p className="text-muted-foreground">Your message has been successfully sent. We'll get back to you within 24 hours!</p>
        </div>
      </Modal>

      {/* Error Modal */}
      <Modal isOpen={showErrorModal} onClose={() => setShowErrorModal(false)} className="border-destructive/50">
        <div className="text-center space-y-4">
          <svg
            className="w-16 h-16 text-destructive mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h3 className="text-2xl font-bold text-foreground">Failed to Send!</h3>
          <p className="text-muted-foreground">
            There was an issue sending your message. Please try calling us directly at <a href="tel:+918347991132" className="text-nav-item-hover hover:underline">+91 8347991132</a> or try again later.
          </p>
        </div>
      </Modal>

      {/* Schedule Call Modal */}
      <Modal
        isOpen={showScheduleCallModal}
        onClose={() => setShowScheduleCallModal(false)}
        className="border-primary/50"
      >
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">How would you like to connect?</h3>
          <p className="text-muted-foreground">Choose your preferred method to schedule a consultation.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group flex flex-col items-center justify-center p-6 bg-secondary/50 rounded-xl border border-border/20 shadow-3d-light hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 space-y-2"
              onClick={() => setShowScheduleCallModal(false)}
            >
              <PhoneCall className="w-10 h-10 text-primary group-hover:text-nav-item-hover transition-colors" />
              <span className="text-lg font-semibold text-foreground group-hover:text-nav-item-hover">Via Call</span>
              <span className="text-sm text-muted-foreground">{PHONE_NUMBER}</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 bg-secondary/50 rounded-xl border border-border/20 shadow-3d-light hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 space-y-2"
              onClick={() => setShowScheduleCallModal(false)}
            >
              <MessageSquare className="w-10 h-10 text-green-500 group-hover:text-green-400 transition-colors" />
              <span className="text-lg font-semibold text-foreground group-hover:text-nav-item-hover">
                Message on WhatsApp
              </span>
              <span className="text-sm text-muted-foreground">{WHATSAPP_NUMBER}</span>
            </a>
          </div>
        </div>
      </Modal>
    </section>
  )
}

export default ContactSection
