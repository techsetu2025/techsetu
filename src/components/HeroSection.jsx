import { ArrowRight, Sparkles, Zap, Code } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-nav-item-hover/10 rounded-full blur-2xl animate-glow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20 shadow-3d-light animate-fade-in">
            <Sparkles className="w-4 h-4 text-nav-item-hover" />
            <span className="text-sm font-medium text-foreground">Modern 3D Navigation</span>
          </div>

          {/* Heading */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Experience the
              <span className="block bg-gradient-to-r from-primary via-nav-item-hover to-accent bg-clip-text text-transparent animate-glow">
                Future of Navigation
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our cutting-edge 3D navigation system featuring smooth animations, responsive design, and
              stunning visual effects that elevate user experience.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in"
            style={{ animationDelay: "400ms", animationFillMode: "both" }}
          >
            <button className="group relative px-8 py-4 bg-gradient-button rounded-lg font-semibold text-primary-foreground shadow-3d-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="group px-8 py-4 bg-secondary/50 backdrop-blur-sm rounded-lg font-semibold text-foreground border border-border/20 shadow-3d-light hover:shadow-glow hover:bg-nav-item-hover/10 hover:text-nav-item-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2">
              <Code className="w-5 h-5" />
              <span>View Demo</span>
            </button>
          </div>

          {/* Features Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in"
            style={{ animationDelay: "600ms", animationFillMode: "both" }}
          >
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "3D Visual Effects",
                description: "Stunning depth and shadow effects that bring your navigation to life",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Smooth Animations",
                description: "Buttery smooth transitions and hover effects for premium UX",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Responsive Design",
                description: "Perfect experience across all devices and screen sizes",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/20 shadow-3d-light hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${800 + index * 100}ms`, animationFillMode: "both" }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-gradient-button rounded-lg text-primary-foreground group-hover:animate-float">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
