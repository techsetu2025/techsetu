"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Sparkles, Zap, Code, Target, Users, Clock } from 'lucide-react'

const TechSetuHero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-nav-item-hover/10 rounded-full blur-2xl animate-glow" />

        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 right-20 w-16 h-16 border-2 border-primary/30 rotate-45 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-16 w-12 h-12 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Sparkles className="w-4 h-4 text-nav-item-hover" />
              <span className="text-sm font-medium text-foreground">Launched to Transform Digital Ideas</span>
            </div>

            {/* Main Heading */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                WE ARE LAUNCHED TO
                <span className="block bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent animate-glow">
                  BRING YOUR DIGITAL IDEAS
                </span>
                <span className="block text-foreground">TO LIFE</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Let us bridge the gap between your vision and reality with reliable, fast delivery and professional
                solutions.
              </p>
            </div>

            {/* Value Props */}
            <div
              className={`flex flex-wrap gap-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {[
                { icon: <Target className="w-5 h-5" />, text: "Reliable" },
                { icon: <Clock className="w-5 h-5" />, text: "Fast Delivery" },
                { icon: <Users className="w-5 h-5" />, text: "Professional Solution" },
              ].map((item, index) => (
                <div
                  key={item.text}
                  className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/20 shadow-3d-light"
                >
                  <div className="text-nav-item-hover">{item.icon}</div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <button 
                onClick={() => navigate("/contact")}
                className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button 
                onClick={() => navigate("/portfolio")}
                className="group px-8 py-4 bg-secondary/50 backdrop-blur-sm rounded-lg font-semibold text-foreground border border-border/20 shadow-3d-light hover:shadow-glow hover:bg-nav-item-hover/10 hover:text-nav-item-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2"
              >
                <Code className="w-5 h-5" />
                <span>View Our Work</span>
              </button>
            </div>
          </div>

          {/* Right Content - 3D Cards */}
          <div
            className={`relative transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative perspective-1000">
              {/* Main 3D Card */}
              <div className="relative transform rotate-y-12 hover:rotate-y-6 transition-transform duration-500">
                <div className="bg-gradient-to-br from-card/80 to-secondary/40 backdrop-blur-lg rounded-2xl p-8 shadow-3d-heavy border border-border/20 hover:shadow-glow transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-button rounded-lg flex items-center justify-center shadow-3d-light">
                        <Code className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Digital Solutions</h3>
                        <p className="text-muted-foreground">Transform Ideas to Reality</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {["Custom Software", "UI/UX Design", "Web Development"].map((service, index) => (
                        <div
                          key={service}
                          className="flex items-center space-x-3 p-3 bg-background/20 rounded-lg border border-border/10"
                        >
                          <div
                            className="w-2 h-2 bg-nav-item-hover rounded-full animate-pulse"
                            style={{ animationDelay: `${index * 200}ms` }}
                          />
                          <span className="text-foreground font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" />
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-lg rotate-45 blur-lg animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-nav-item-hover rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default TechSetuHero
