import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ]

  const services = [
    { label: "Custom Software", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "Consulting", href: "#services" },
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
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-button rounded-lg shadow-3d-light flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">TS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-foreground">TECH SETU</span>
                  <span className="text-sm text-muted-foreground -mt-1">IT COMPANY</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                We are launched to bring your digital ideas to life. Let us bridge the gap between your vision and
                reality with reliable, fast delivery, and professional solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-nav-item-hover transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">techsetu2025@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-nav-item-hover transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">8347991132</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-nav-item-hover transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Tech Hub, Innovation District</span>
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
              <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-muted-foreground hover:text-nav-item-hover transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground">Our Services</h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    className="block text-muted-foreground hover:text-nav-item-hover transition-colors duration-300 text-sm"
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Tech Setu IT Company. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
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
