export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          dark: "hsl(var(--accent-dark))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        nav: {
          bg: "hsl(var(--nav-bg))",
          "gradient-start": "hsl(var(--nav-gradient-start))",
          "gradient-end": "hsl(var(--nav-gradient-end))",
          "item-hover": "hsl(var(--nav-item-hover))",
          "item-active": "hsl(var(--nav-item-active))",
          "shadow-light": "hsl(var(--nav-shadow-light))",
          "shadow-dark": "hsl(var(--nav-shadow-dark))",
        },
        dropdown: {
          bg: "hsl(var(--dropdown-bg))",
          shadow: "hsl(var(--dropdown-shadow))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "slide-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-10px) scale(0.95)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        glow: {
          "0%": {
            boxShadow: "var(--shadow-3d-light)",
          },
          "50%": {
            boxShadow: "var(--shadow-glow)",
          },
          "100%": {
            boxShadow: "var(--shadow-3d-light)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-3px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-down": "slide-down 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up": "slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in": "fade-in 0.3s ease-out",
        glow: "glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      boxShadow: {
        "3d-light": "var(--shadow-3d-light)",
        "3d-medium": "var(--shadow-3d-medium)",
        "3d-heavy": "var(--shadow-3d-heavy)",
        dropdown: "var(--shadow-dropdown)",
        glow: "var(--shadow-glow)",
      },
      backgroundImage: {
        "gradient-nav": "var(--gradient-nav)",
        "gradient-button": "var(--gradient-button)",
        "gradient-hover": "var(--gradient-hover)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
