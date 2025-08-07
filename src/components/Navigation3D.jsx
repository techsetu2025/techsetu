"use client"

import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { ChevronDown, Home, Settings, Users, Mail, Smartphone, Globe, Database } from 'lucide-react'

const Navigation3D = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    checkMobile()
    handleScroll()
    window.addEventListener("resize", checkMobile)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="w-4 h-4" />,
    },
    {
      label: "Services",
      href: "/services",
      icon: <Settings className="w-4 h-4" />,
      dropdown: [
        { label: "Custom Software", href: "/services", icon: <Globe className="w-4 h-4" /> },
        { label: "UI/UX Design", href: "/services", icon: <Smartphone className="w-4 h-4" /> },
        { label: "Custom Website", href: "/services", icon: <Database className="w-4 h-4" /> },
        { label: "Graphic Design", href: "/services", icon: <Users className="w-4 h-4" /> },
        { label: "Custom Portfolio", href: "/services", icon: <Settings className="w-4 h-4" /> },
      ],
    },
    {
      label: "About Us",
      href: "/about",
      icon: <Users className="w-4 h-4" />,
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      icon: <Database className="w-4 h-4" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <Mail className="w-4 h-4" />,
    },
  ]

  const handleDropdownToggle = (label) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === label ? null : label)
    }
  }

  const handleMouseEnter = (label) => {
    if (!isMobile) {
      setActiveDropdown(label)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null)
    }
  }

  const handleNavigation = (href) => {
    navigate(href)
    setMobileMenuOpen(false)
    setActiveDropdown(null)
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isActive = (href) => {
    return location.pathname === href
  }

  return (
    <nav className="relative z-50">
      {/* Main Navigation Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-nav-bg/80 backdrop-blur-md border-b border-border/30 shadow-3d-medium" 
            : "bg-nav-bg/60 backdrop-blur-sm border-b border-border/20 shadow-3d-light"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigation("/")}>
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-button rounded-lg shadow-3d-light flex items-center justify-center animate-glow transform hover:scale-110 transition-transform duration-300">
                    <span className="text-primary-foreground font-bold text-xl">TS</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-foreground">TECH SETU</span>
                  <span className="text-xs text-muted-foreground -mt-1">IT COMPANY</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-3">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`
                        group relative px-5 py-2 rounded-lg font-medium text-sm
                        transition-all duration-300 ease-in-out
                        flex items-center space-x-2
                        transform hover:scale-105 hover:-translate-y-0.5
                        ${
                          isActive(item.href) || activeDropdown === item.label
                            ? "bg-nav-item-hover text-primary-foreground shadow-3d-medium"
                            : `text-foreground hover:bg-nav-item-hover/20 hover:text-nav-item-hover ${
                              scrolled ? 'hover:backdrop-blur-sm' : ''
                            }`
                        }
                        before:absolute before:inset-0 before:rounded-lg before:bg-gradient-hover
                        before:opacity-0 before:transition-opacity before:duration-300
                        hover:before:opacity-20
                        shadow-3d-light hover:shadow-glow
                      `}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {item.dropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {item.dropdown && activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-56 animate-slide-down">
                        <div className="bg-dropdown-bg backdrop-blur-lg rounded-lg shadow-dropdown border border-border/20 overflow-hidden">
                          <div className="py-2">
                            {item.dropdown.map((subItem, index) => (
                              <button
                                key={subItem.label}
                                onClick={() => handleNavigation(subItem.href)}
                                className={`
                                  block w-full text-left px-4 py-3 text-sm text-foreground
                                  hover:bg-nav-item-hover/10 hover:text-nav-item-hover
                                  transition-all duration-200
                                  flex items-center space-x-3
                                  transform hover:scale-[1.02] hover:translate-x-1
                                  animate-fade-in
                                `}
                                style={{
                                  animationDelay: `${index * 50}ms`,
                                  animationFillMode: "both",
                                }}
                              >
                                <div className="flex-shrink-0 text-nav-item-hover">{subItem.icon}</div>
                                <span>{subItem.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-foreground hover:bg-nav-item-hover/10 hover:text-nav-item-hover transition-all duration-200 shadow-3d-light hover:shadow-glow"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                  />
                  <div
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
                  />
                  <div
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-nav-bg/95 backdrop-blur-lg border-t border-border/20 animate-slide-down">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between" onClick={() => handleDropdownToggle(item.label)}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 flex-grow ${
                        isActive(item.href)
                          ? "bg-nav-item-hover/20 text-nav-item-hover"
                          : "text-foreground hover:bg-nav-item-hover/10 hover:text-nav-item-hover"
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </button>
                    {item.dropdown && (
                      <button className="p-2 text-foreground">
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="ml-4 mt-2 space-y-1 animate-slide-down">
                      {item.dropdown.map((subItem, index) => (
                        <button
                          key={subItem.label}
                          onClick={() => handleNavigation(subItem.href)}
                          className={`
                            w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-muted-foreground
                            hover:bg-nav-item-hover/10 hover:text-nav-item-hover
                            transition-all duration-200
                            animate-fade-in
                          `}
                          style={{
                            animationDelay: `${index * 50}ms`,
                            animationFillMode: "both",
                          }}
                        >
                          <div className="text-nav-item-hover">{subItem.icon}</div>
                          <span>{subItem.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation3D
