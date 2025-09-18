// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Contact Form Handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Basic validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all required fields.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    // Simulate form submission
    const submitBtn = this.querySelector(".submit-btn")
    const originalText = submitBtn.textContent
    submitBtn.textContent = "Sending..."
    submitBtn.disabled = true

    // Simulate API call
    setTimeout(() => {
      alert("Thank you for your message! We will get back to you soon.")
      this.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  })
}

// Navbar scroll effect for dark theme
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(15, 23, 42, 0.75)"
    navbar.style.backdropFilter = "blur(10px)"
    navbar.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.45)"
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.55)"
    navbar.style.backdropFilter = "blur(8px)"
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.35)"
  }
})

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".service-card, .contact-item, .value-item, .service-category, .hero-content, .hero-image, .intro-text, .intro-image, .contact-form, .contact-detail, .map-placeholder"
  )

  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(24px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Page load animation class
document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => document.body.classList.add("loaded"))
})

// Add loading animation for service cards
document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service-card")
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })
})

// Hamburger animation
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")

  hamburger.addEventListener("click", () => {
    const bars = hamburger.querySelectorAll(".bar")

    if (hamburger.classList.contains("active")) {
      bars[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      bars[1].style.opacity = "0"
      bars[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
    } else {
      bars[0].style.transform = "none"
      bars[1].style.opacity = "1"
      bars[2].style.transform = "none"
    }
  })
})

// Add hover effects for interactive elements
document.addEventListener("DOMContentLoaded", () => {
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll(".cta-button, .submit-btn")

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")

      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })
})

// Add CSS for ripple effect
const style = document.createElement("style")
style.textContent = `
    .cta-button, .submit-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// FAQ accordion
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq-item")
  items.forEach((item) => {
    const btn = item.querySelector(".faq-question")
    if (btn) {
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open")
        document.querySelectorAll(".faq-item.open").forEach((openItem) => openItem.classList.remove("open"))
        if (!isOpen) item.classList.add("open")
      })
    }
  })
})

// Extend intersection observer to new elements
document.addEventListener("DOMContentLoaded", () => {
  const animateLater = document.querySelectorAll(
    ".feature-card, .process-step, .testimonial, .partner-logo, .faq-item"
  )
  animateLater.forEach((el, index) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    el.style.transitionDelay = `${Math.min(index * 0.06, 0.6)}s`
    observer.observe(el)
  })
})
