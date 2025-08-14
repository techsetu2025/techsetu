"use client"

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Home,
  User,
  Briefcase,
  FolderOpen,
  MessageCircle,
  Code,
  Palette,
  Globe,
  Smartphone,
  Users,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  const quickLinks = [
    { label: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { label: "About Us", href: "/about", icon: <User className="w-4 h-4" /> },
    { label: "Services", href: "/services", icon: <Briefcase className="w-4 h-4" /> },
    { label: "Portfolio", href: "/portfolio", icon: <FolderOpen className="w-4 h-4" /> },
    { label: "Contact", href: "/contact", icon: <MessageCircle className="w-4 h-4" /> },
  ]

  const services = [
    { label: "Custom Software", href: "/services", icon: <Code className="w-4 h-4" /> },
    { label: "UI/UX Design", href: "/services", icon: <Palette className="w-4 h-4" /> },
    { label: "Web Development", href: "/services", icon: <Globe className="w-4 h-4" /> },
    { label: "Mobile Apps", href: "/services", icon: <Smartphone className="w-4 h-4" /> },
    { label: "Consulting", href: "/services", icon: <Users className="w-4 h-4" /> },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background to-nav-bg border-t border-border/20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
                <div className="w-12 h-12 rounded-lg bg-white/95 backdrop-blur-sm shadow-3d-light flex items-center justify-center p-1.5">
                  <img src="/tech-setu-logo.png" alt="Tech Setu Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-foreground">TECH SETU</span>
                  <span className="text-sm text-muted-foreground -mt-1">IT COMPANY</span>
                </div>
              </div>

              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                We are launched to bring your digital ideas to life. Let us bridge the gap between your vision and
                reality with reliable, fast delivery, and professional solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:techsetu2025@gmail.com"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-nav-item-hover transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-base">techsetu2025@gmail.com</span>
                </a>
                <a
                  href="tel:+918347991132"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-nav-item-hover transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-base">+91 8347991132</span>
                </a>
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-nav-item-hover transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-base">Tech Hub, Innovation District, Bangalore</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-secondary/50 backdrop-blur-sm rounded-lg text-muted-foreground hover:text-nav-item-hover hover:bg-nav-item-hover/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-3d-light hover:shadow-glow"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => navigate(link.href)}
                    className="group flex items-center text-muted-foreground hover:text-nav-item-hover transition-all duration-300 text-base text-left relative w-full"
                  >
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-nav-item-hover transition-all duration-300 group-hover:w-4 opacity-0 group-hover:opacity-100"></span>
                    <div className="flex items-center space-x-3 transition-transform duration-300 group-hover:translate-x-6 ml-0">
                      {link.icon}
                      <span>{link.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Our Services</h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.label}
                    onClick={() => navigate(service.href)}
                    className="group flex items-center text-muted-foreground hover:text-nav-item-hover transition-all duration-300 text-base text-left relative w-full"
                  >
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-nav-item-hover transition-all duration-300 group-hover:w-4 opacity-0 group-hover:opacity-100"></span>
                    <div className="flex items-center space-x-3 transition-transform duration-300 group-hover:translate-x-6 ml-0">
                      {service.icon}
                      <span>{service.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-base text-muted-foreground">
              © {currentYear} Tech Setu IT Company. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-base text-muted-foreground">
              <a href="#" className="hover:text-nav-item-hover transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-nav-item-hover transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-nav-item-hover transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
