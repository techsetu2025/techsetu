import Navigation3D from "@/components/Navigation3D"
import AboutSection from "@/components/AboutSection"
import Footer from "@/components/Footer"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Users, Target, Award, Lightbulb, Heart, Shield, Zap, CheckCircle, Star, Calendar, MapPin, Mail, Phone } from 'lucide-react'
import { useEffect, useState } from "react"

const About = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 8 years of experience in software development and business strategy, Rajesh leads Tech Setu with a vision to transform digital landscapes.",
      skills: ["Strategic Planning", "Business Development", "Team Leadership"]
    },
    {
      name: "Priya Sharma",
      role: "Lead Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Priya brings creativity and user-centered design thinking to every project, ensuring beautiful and functional digital experiences.",
      skills: ["UI/UX Design", "Brand Identity", "User Research"]
    },
    {
      name: "Amit Patel",
      role: "Senior Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Amit is our technical backbone, specializing in full-stack development and system architecture for scalable solutions.",
      skills: ["Full-Stack Development", "System Architecture", "DevOps"]
    },
    {
      name: "Sneha Gupta",
      role: "Project Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sneha ensures smooth project delivery and client satisfaction through effective communication and agile methodologies.",
      skills: ["Project Management", "Client Relations", "Agile Methodology"]
    }
  ]

  const companyValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations and set new industry standards.",
      color: "from-primary to-primary-dark"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-First",
      description: "Your success is our priority. We build lasting relationships through trust, transparency, and exceptional service.",
      color: "from-accent to-accent-dark"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges and drive digital transformation.",
      color: "from-nav-item-hover to-primary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliability",
      description: "Consistent delivery, robust solutions, and unwavering support - you can count on us to be there when you need us most.",
      color: "from-primary-dark to-accent"
    }
  ]

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Tech Setu was established with a vision to bridge the gap between ideas and digital reality."
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Successfully delivered our first enterprise-level project, setting the foundation for future growth."
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew our team to 10+ professionals, expanding our capabilities across design and development."
    },
    {
      year: "2022",
      title: "50+ Projects",
      description: "Reached the milestone of 50 completed projects with 100% client satisfaction rate."
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple awards for excellence in web development and client service."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Extended our services internationally, serving clients across multiple countries."
    }
  ]

  const achievements = [
    { number: "100+", label: "Projects Delivered", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Calendar className="w-6 h-6" /> },
    { number: "15+", label: "Team Members", icon: <Award className="w-6 h-6" /> }
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
              <Users className="w-4 h-4 text-nav-item-hover" />
              <span className="text-sm font-medium text-foreground">ABOUT TECH SETU</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transforming Ideas Into{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Founded in 2019, Tech Setu has been at the forefront of digital innovation, helping businesses transform their ideas into powerful digital solutions. We combine technical expertise with creative vision to deliver exceptional results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => navigate("/contact")}
                className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Work With Us</span>
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

      {/* Achievements Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className={`group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-button rounded-lg flex items-center justify-center text-primary-foreground mx-auto group-hover:animate-float mb-4">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Company Values */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-background">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">OUR VALUES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              What Drives{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Our Success
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={value.title}
                className="group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300 text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-white shadow-3d-light group-hover:animate-float mx-auto mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-nav-item-hover transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">OUR TEAM</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Meet The{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Experts
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of talented professionals brings together years of experience and passion for creating exceptional digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-nav-item-hover font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-nav-item-hover/10 text-nav-item-hover px-2 py-1 rounded-full border border-nav-item-hover/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
              <span className="text-sm font-medium text-nav-item-hover">OUR JOURNEY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Our Growth{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Story
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-nav-item-hover to-accent rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300 group hover:scale-105">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-button rounded-lg flex items-center justify-center text-primary-foreground font-bold shadow-3d-light group-hover:animate-float">
                          {milestone.year.slice(-2)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-nav-item-hover transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-nav-item-hover font-medium">{milestone.year}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-nav-item-hover rounded-full border-4 border-background shadow-3d-light"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-card/80 to-secondary/40 backdrop-blur-lg rounded-2xl p-12 shadow-3d-heavy border border-border/20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Ready to Work{" "}
              <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
                Together?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how our experienced team can help bring your digital vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => navigate("/contact")}
                className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Get In Touch</span>
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

      <Footer />
    </div>
  )
}

export default About
