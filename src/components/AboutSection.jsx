"use client"

import { useEffect, useRef } from "react"
import { Target, Users, Award, Zap, ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"

// Custom hook for animated counting
const useCountUp = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!shouldStart || hasStarted) return

    setHasStarted(true)
    let startTime = null
    const startValue = 0

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, shouldStart, hasStarted])

  return count
}

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldStartCounting, setShouldStartCounting] = useState(false)
  const sectionRef = useRef(null)
  const statsRef = useRef(null)

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
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldStartCounting) {
          setShouldStartCounting(true)
        }
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      statsObserver.observe(statsRef.current)
    }

    return () => statsObserver.disconnect()
  }, [shouldStartCounting])

  const stats = [
    { number: 50, label: "Projects Completed", icon: <Target className="w-6 h-6" />, suffix: "+" },
    { number: 30, label: "Happy Clients", icon: <Users className="w-6 h-6" />, suffix: "+" },
    { number: 5, label: "Years Experience", icon: <Award className="w-6 h-6" />, suffix: "+" },
    { number: 24, label: "Support", icon: <Zap className="w-6 h-6" />, suffix: "/7" },
  ]

  const values = [
    {
      title: "Innovation First",
      description:
        "We leverage cutting-edge technologies to deliver solutions that set you apart from the competition.",
    },
    {
      title: "Client-Centric Approach",
      description: "Your success is our priority. We work closely with you to understand and exceed your expectations.",
    },
    {
      title: "Quality Assurance",
      description:
        "Every project undergoes rigorous testing to ensure reliability, performance, and user satisfaction.",
    },
    {
      title: "Timely Delivery",
      description: "We respect your deadlines and deliver projects on time without compromising on quality.",
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-background"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light">
            <span className="text-sm font-medium text-nav-item-hover">ABOUT TECH SETU</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Bridging{" "}
            <span className="bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent">
              Vision & Reality
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Tech Setu, we are passionate about transforming digital ideas into powerful, user-centric solutions that
            drive business growth and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Our Mission: Digital Transformation Excellence</h3>

              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of technology to transform businesses and lives. Our team of experienced
                developers, designers, and strategists work together to create solutions that not only meet your current
                needs but also prepare you for future opportunities.
              </p>

              <div className="space-y-4">
                {[
                  "Custom software development tailored to your business",
                  "Modern UI/UX design that engages your users",
                  "Scalable web solutions built for growth",
                  "Ongoing support and maintenance services",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-nav-item-hover flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2">
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Content - Animated Stats Cards */}
          <div
            ref={statsRef}
            className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {stats.map((stat, index) => {
              const animatedCount = useCountUp(stat.number, 2000 + index * 200, shouldStartCounting)

              return (
                <div
                  key={stat.label}
                  className="group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-6 shadow-3d-medium border border-border/20 hover:shadow-glow transition-all duration-300 text-center">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-gradient-button rounded-lg flex items-center justify-center text-primary-foreground mx-auto group-hover:animate-float">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground mb-1 tabular-nums">
                          {animatedCount}
                          {stat.suffix}
                        </div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </div>

                  {/* 3D Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 rounded-2xl transform translate-y-2 translate-x-2 -z-10 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-300" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Values Section */}
        <div
          className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape the way we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-card/50 backdrop-blur-lg rounded-xl p-6 shadow-3d-light border border-border/20 hover:shadow-glow transition-all duration-300 h-full">
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-foreground group-hover:text-nav-item-hover transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
