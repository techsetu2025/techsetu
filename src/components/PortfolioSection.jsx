"use client"

import { useEffect, useRef, useState } from "react"
import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  Code,
  ArrowRight,
  Calendar,
  DollarSign,
  Users,
  Star,
  ArrowLeft,
} from "lucide-react"

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState([])
  const [flippedCards, setFlippedCards] = useState(new Set())
  const sectionRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with advanced features including real-time inventory, payment integration, and analytics dashboard.",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/projects/ecommerce.jpg", // Updated image path
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      // Detailed information for back of card
      detailedDescription:
        "A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory management, secure payment processing, advanced analytics dashboard, and mobile-responsive design. The platform handles thousands of transactions daily with 99.9% uptime.",
      features: [
        "Real-time inventory tracking",
        "Secure payment integration",
        "Advanced analytics dashboard",
        "Mobile-responsive design",
        "Multi-vendor support",
        "SEO optimization",
      ],
      timeline: "3 months",
      budget: "$25,000 - $35,000",
      teamSize: "5 developers",
      rating: 4.9,
      client: "TechCorp Solutions",
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      description:
        "User-friendly mobile application for healthcare management with appointment booking and telemedicine features.",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "Node.js"],
      image: "/projects/healthcare-app.jpeg", // Updated image path
      demoUrl: "#",
      featured: true,
      detailedDescription:
        "A revolutionary healthcare mobile application that connects patients with healthcare providers through seamless appointment booking, telemedicine consultations, and comprehensive health record management. The app serves over 10,000 active users.",
      features: [
        "Appointment scheduling",
        "Video consultations",
        "Health record management",
        "Prescription tracking",
        "Emergency contacts",
        "Insurance integration",
      ],
      timeline: "4 months",
      budget: "$30,000 - $45,000",
      teamSize: "6 developers",
      rating: 4.8,
      client: "HealthFirst Medical",
    },
    {
      id: 3,
      title: "Brand Identity Design",
      description:
        "Complete brand identity package including logo design, color palette, typography, and brand guidelines.",
      category: "Design",
      technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy"],
      image: "/projects/brand-identity.jpg", // Updated image path
      featured: false,
      detailedDescription:
        "A comprehensive brand identity project that transformed a startup's visual presence. The project included extensive market research, competitor analysis, and the creation of a cohesive brand system that increased brand recognition by 300%.",
      features: [
        "Logo design & variations",
        "Color palette & guidelines",
        "Typography system",
        "Brand voice & messaging",
        "Marketing materials",
        "Digital asset library",
      ],
      timeline: "2 months",
      budget: "$15,000 - $20,000",
      teamSize: "3 designers",
      rating: 5.0,
      client: "InnovateCo Startup",
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      description:
        "Comprehensive analytics dashboard for SaaS applications with real-time data visualization and reporting.",
      category: "Web Development",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      image: "/projects/saas-dashboard.jpg", // Updated image path
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      detailedDescription:
        "An advanced SaaS analytics dashboard that processes millions of data points daily, providing real-time insights and customizable reporting for enterprise clients. The platform improved decision-making speed by 60% for client companies.",
      features: [
        "Real-time data visualization",
        "Custom report builder",
        "Advanced filtering system",
        "Export capabilities",
        "User role management",
        "API integrations",
      ],
      timeline: "5 months",
      budget: "$40,000 - $55,000",
      teamSize: "7 developers",
      rating: 4.9,
      client: "DataFlow Enterprise",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Creative portfolio website with interactive 3D elements and smooth animations for a digital artist.",
      category: "Web Development",
      technologies: ["React", "Three.js", "GSAP", "CSS3"],
      image: "/projects/portfolio-website.jpg", // Updated image path
      demoUrl: "#",
      featured: false,
      detailedDescription:
        "An immersive portfolio website featuring cutting-edge 3D animations and interactive elements. The site showcases the artist's work through innovative web technologies, resulting in a 400% increase in client inquiries.",
      features: [
        "3D interactive galleries",
        "Smooth scroll animations",
        "Dynamic content loading",
        "Mobile optimization",
        "Contact form integration",
        "Social media integration",
      ],
      timeline: "2.5 months",
      budget: "$18,000 - $25,000",
      teamSize: "4 developers",
      rating: 4.7,
      client: "Creative Artist Studio",
    },
    {
      id: 6,
      title: "Restaurant App Design",
      description:
        "Modern UI/UX design for a restaurant mobile app with online ordering and table reservation features.",
      category: "Design",
      technologies: ["Figma", "Prototyping", "User Research"],
      image: "/projects/restaurant-app.jpg", // Updated image path
      demoUrl: "#",
      featured: false,
      detailedDescription:
        "A user-centered design project for a restaurant chain's mobile app, featuring intuitive navigation, seamless ordering flow, and table reservation system. The app increased online orders by 250% and improved customer satisfaction scores.",
      features: [
        "Intuitive menu browsing",
        "One-tap ordering system",
        "Table reservation flow",
        "Loyalty program integration",
        "Push notifications",
        "Payment gateway design",
      ],
      timeline: "1.5 months",
      budget: "$12,000 - $18,000",
      teamSize: "3 designers",
      rating: 4.8,
      client: "Gourmet Restaurant Chain",
    },
  ]

  const categories = ["All", "Web Development", "Mobile Development", "Design"]

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

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter))
    }
  }, [activeFilter])

  const handleCardFlip = (projectId) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(projectId)) {
        newSet.delete(projectId)
      } else {
        newSet.add(projectId)
      }
      return newSet
    })
  }

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
            <span className="text-sm font-medium text-nav-item-hover">OUR WORK</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in delivering innovative digital
            solutions across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? "bg-gradient-button text-primary-foreground shadow-3d-medium"
                  : "bg-secondary/50 text-foreground border border-border/20 hover:bg-nav-item-hover/10 hover:text-nav-item-hover shadow-3d-light"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative perspective-1000 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0 rotate-x-0" : "opacity-0 translate-y-10 rotate-x-12"
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              {/* 3D Flip Card Container */}
              <div className="relative h-[600px] transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-4">
                {/* Card Inner Container for Flip Effect */}
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flippedCards.has(project.id) ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Side of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="relative bg-card/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-500 h-full">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"} // Updated to use the new path
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 right-4 bg-gradient-button text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-3d-light">
                            Featured
                          </div>
                        )}

                        {/* Hover Actions */}
                        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          {project.demoUrl && (
                            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200 transform hover:scale-110">
                              <ExternalLink className="w-5 h-5" />
                            </button>
                          )}
                          {project.githubUrl && (
                            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200 transform hover:scale-110">
                              <Github className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6 space-y-4 flex flex-col h-[calc(100%-12rem)]">
                        <div className="space-y-2 flex-grow">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-nav-item-hover bg-nav-item-hover/10 px-2 py-1 rounded-full">
                              {project.category}
                            </span>
                            <div className="flex items-center space-x-1">
                              {project.category === "Web Development" && (
                                <Globe className="w-4 h-4 text-muted-foreground" />
                              )}
                              {project.category === "Mobile Development" && (
                                <Smartphone className="w-4 h-4 text-muted-foreground" />
                              )}
                              {project.category === "Design" && <Code className="w-4 h-4 text-muted-foreground" />}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-foreground group-hover:text-nav-item-hover transition-colors duration-300">
                            {project.title}
                          </h3>

                          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-background/50 text-foreground px-2 py-1 rounded border border-border/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* View Project Button */}
                        <button
                          onClick={() => handleCardFlip(project.id)}
                          className="group/btn w-full flex items-center justify-center space-x-2 px-4 py-3 bg-secondary/50 backdrop-blur-sm rounded-lg font-medium text-foreground border border-border/20 hover:bg-nav-item-hover/10 hover:text-nav-item-hover hover:border-nav-item-hover/30 transition-all duration-300 shadow-3d-light hover:shadow-glow"
                        >
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Back Side of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="relative bg-card/90 backdrop-blur-lg rounded-2xl overflow-hidden shadow-3d-heavy border border-border/20 h-full">
                      {/* Header with gradient */}
                      <div className="relative h-24 bg-gradient-to-r from-primary/20 via-nav-item-hover/20 to-accent/20 flex items-center justify-between p-6">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.client}</p>
                        </div>
                        <div className="flex items-center space-x-1 bg-background/20 px-2 py-1 rounded-full">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-foreground">{project.rating}</span>
                        </div>
                      </div>

                      {/* Detailed Content */}
                      <div className="p-6 space-y-6 h-[calc(100%-6rem)] overflow-y-auto">
                        {/* Project Overview */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-foreground">Project Overview</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{project.detailedDescription}</p>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-foreground">Key Features</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {project.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-nav-item-hover rounded-full"></div>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Project Stats */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-nav-item-hover" />
                              <span className="text-sm font-medium text-foreground">Timeline</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{project.timeline}</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <DollarSign className="w-4 h-4 text-nav-item-hover" />
                              <span className="text-sm font-medium text-foreground">Budget</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{project.budget}</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4 text-nav-item-hover" />
                              <span className="text-sm font-medium text-foreground">Team</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{project.teamSize}</p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 pt-4">
                          {project.demoUrl && (
                            <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-button rounded-lg font-medium text-primary-foreground shadow-3d-light hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                              <ExternalLink className="w-4 h-4" />
                              <span>Live Demo</span>
                            </button>
                          )}
                          {project.githubUrl && (
                            <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-lg font-medium text-foreground border border-border/20 hover:bg-nav-item-hover/10 hover:text-nav-item-hover transition-all duration-300">
                              <Github className="w-4 h-4" />
                              <span>Code</span>
                            </button>
                          )}
                        </div>

                        {/* Back Button */}
                        <button
                          onClick={() => handleCardFlip(project.id)}
                          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-background/20 backdrop-blur-sm rounded-lg font-medium text-foreground border border-border/20 hover:bg-nav-item-hover/10 hover:text-nav-item-hover transition-all duration-300 mt-4"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back to Overview</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3D Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 rounded-2xl transform translate-y-3 translate-x-3 -z-10 group-hover:translate-y-6 group-hover:translate-x-6 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center space-y-6 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-2xl font-bold text-foreground">Have a Project in Mind?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and innovative approach.
          </p>
          <button className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2 mx-auto">
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
