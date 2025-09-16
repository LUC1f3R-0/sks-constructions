<template>
  <section class="hero-slider">
    <!-- Construction Particles Background -->
    <div class="construction-particles">
      <div class="particle" v-for="i in 15" :key="i" :style="getParticleStyle(i)"></div>
    </div>
    
    <div class="hero-slides">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="hero-slide"
        :class="{ 'active': currentSlide === index }"
        :style="{ backgroundImage: `url(${slide.background})` }"
      >
        <div class="slide-overlay"></div>
        <div class="hero-content-wrapper">
          <div class="container-fluid">
            <div class="row align-items-center justify-content-center">
              <div class="col-lg-8 col-md-10 col-sm-12">
                <div class="hero-content text-center text-md-left" data-aos="fade-up" data-aos-delay="300">
                <div class="hero-badge" data-aos="fade-down" data-aos-delay="200">
                  <i class="fas fa-hard-hat"></i>
                  <span>Professional Construction Services</span>
                </div>
                <h1 class="hero-title">
                  <span class="title-main">SKS</span>
                  <div class="animated-text-container">
                    <span class="animated-text-stroke">DEVELOPERS</span>
                    <span class="animated-text-fill">DEVELOPERS</span>
                  </div>
                </h1>
                <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="500">
                  {{ slide.subtitle }}
                </p>
                <div class="hero-stats d-flex flex-wrap justify-content-center justify-content-md-start" data-aos="fade-up" data-aos-delay="600">
                  <div class="stat-item">
                    <div class="stat-number" data-count="500">0</div>
                    <div class="stat-label">Projects Completed</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number" data-count="25">0</div>
                    <div class="stat-label">Years Experience</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number" data-count="100">0</div>
                    <div class="stat-label">Team Members</div>
                  </div>
                </div>
                <div class="hero-buttons d-flex flex-wrap justify-content-center justify-content-md-start" data-aos="fade-up" data-aos-delay="800">
                  <router-link to="/services" class="btn btn-primary construction-btn">
                    <i class="fas fa-tools"></i>
                    Our Services
                  </router-link>
                  <router-link to="/contact" class="btn btn-outline construction-btn">
                    <i class="fas fa-phone"></i>
                    Get Quote
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Construction Elements -->
        <div class="construction-elements">
          <div class="element crane" data-aos="fade-left" data-aos-delay="1000">
            <i class="fas fa-cog"></i>
          </div>
          <div class="element blueprint" data-aos="fade-right" data-aos-delay="1200">
            <i class="fas fa-drafting-compass"></i>
          </div>
          <div class="element hammer" data-aos="fade-up" data-aos-delay="1400">
            <i class="fas fa-hammer"></i>
          </div>
        </div>
      </div>
    </div>
    </div>

    <!-- Bottom Controls Container -->
    <div class="bottom-controls" v-show="slides.length > 1">
      <!-- Scroll Indicator -->
      <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="1500" @click="scrollToNextSection">
        <div class="scroll-text">Scroll Down</div>
        <div class="scroll-arrow">
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      
      <!-- Slider Dots -->
      <div class="slider-dots">
        <button 
          v-for="(_slide, index) in slides" 
          :key="index"
          class="dot"
          :class="{ 'active': currentSlide === index }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
let autoplayInterval: number | null = null

// Import local images
import image01 from '@/assets/images/01.png'
import image02 from '@/assets/images/02.jpg'
import image03 from '@/assets/images/03.png'

// Updated slides with high-quality completed project images
const slides = [
  {
    background: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    subtitle: 'Building Sri Lanka\'s future with advanced engineering techniques & innovative construction solutions'
  },
  {
    background: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    subtitle: 'Professional construction services with excellence in every project we undertake across Sri Lanka'
  },
  {
    background: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    subtitle: 'Transforming Sri Lankan infrastructure with cutting-edge technology and unmatched expertise'
  }
]

const getParticleStyle = (_index: number) => {
  const delay = Math.random() * 5
  const duration = 3 + Math.random() * 4
  const size = 2 + Math.random() * 4
  const left = Math.random() * 100
  
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    width: `${size}px`,
    height: `${size}px`
  }
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}


const goToSlide = (index: number) => {
  currentSlide.value = index
}

const scrollToNextSection = () => {
  // Find the next section after the hero slider
  const nextSection = document.querySelector('.section-padding, .about-section, .services-section, .projects-section')
  if (nextSection) {
    nextSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  } else {
    // Fallback: scroll down by viewport height
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }
}

const startAutoplay = () => {
  autoplayInterval = window.setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const animateNumbers = () => {
  const statNumbers = document.querySelectorAll('.stat-number')
  statNumbers.forEach((element) => {
    const target = parseInt(element.getAttribute('data-count') || '0')
    const duration = 2000
    const increment = target / (duration / 16)
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      element.textContent = Math.floor(current).toString()
    }, 16)
  })
}

onMounted(() => {
  startAutoplay()
  
  // Animate numbers when component mounts
  setTimeout(() => {
    animateNumbers()
  }, 1000)
  
  // Re-animate numbers on slide change
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          animateNumbers()
        }, 500)
      }
    })
  })
  
  const heroContent = document.querySelector('.hero-content')
  if (heroContent) {
    observer.observe(heroContent)
  }
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style lang="scss" scoped>
.hero-slider {
  position: relative;
  height: 100vh;
  min-height: 900px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: 100vh;
    min-height: 600px;
  }
  
  @media (max-width: 576px) {
    min-height: 500px;
  }
}

// Construction Particles
.construction-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  opacity: 0.3;
  animation: floatParticle linear infinite;
  will-change: transform;
  
  @keyframes floatParticle {
    0% {
      transform: translateY(100vh) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 0.3;
    }
    90% {
      opacity: 0.3;
    }
    100% {
      transform: translateY(-100px) rotate(360deg);
      opacity: 0;
    }
  }
}

.hero-slides {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.active {
    opacity: 1;
  }
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(2, 26, 71, 0.85) 0%, rgba(0, 35, 91, 0.75) 50%, rgba(37, 99, 235, 0.3) 100%);
}

.hero-content-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    top: 45%; // Move content higher up
    min-height: 100vh;
    padding-top: 60px; // Reduced padding to prevent cutoff
  }
  
  @media (max-width: 576px) {
    top: 47%; // Move content higher up for smaller screens
    padding-top: 70px; // Reduced padding to prevent cutoff
  }
  
  @media (max-width: 480px) {
    top: 48%; // Move content higher up for very small screens
    padding-top: 80px; // Reduced padding to prevent cutoff
  }
}

.hero-content {
  position: relative;
  z-index: 3;
  color: var(--white);
  animation: fadeInUp 1s ease-out;
  max-width: 100%;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
  
  @media (max-width: 768px) {
    text-align: center;
    padding: 0 15px 40px 15px; // Add bottom padding to prevent cutoff
  }
  
  @media (max-width: 576px) {
    padding: 0 10px 50px 10px; // Add more bottom padding for smaller screens
  }
  
  @media (max-width: 480px) {
    padding: 0 10px 60px 10px; // Add even more bottom padding for very small screens
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(132, 204, 22, 0.9);
  color: var(--white);
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    margin: 0 auto 30px auto;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(132, 204, 22, 0.3);
  }
  
  i {
    font-size: 16px;
  }
}

.hero-title {
  margin-bottom: 30px;
  
  .title-main {
    display: block;
    font-family: var(--font-secondary);
    font-size: 140px;
    font-weight: 700;
    color: var(--secondary-color);
    line-height: 1;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    animation: slideInLeft 1.2s ease-out 0.3s both;
    
    @media (max-width: 768px) {
      font-size: 70px; // Slightly smaller to ensure full visibility
      margin-bottom: 15px;
    }
    
    @media (max-width: 576px) {
      font-size: 50px; // Smaller on mobile to prevent cutoff
      margin-bottom: 10px;
    }
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animated-text-container {
  position: relative;
  display: inline-block;
  margin-left: 70px;
  animation: slideInRight 1.2s ease-out 0.6s both;
  
  @media (max-width: 768px) {
    margin-left: 30px; // Reduce spacing on mobile
  }
  
  @media (max-width: 576px) {
    margin-left: 15px; // Further reduce spacing on smaller screens
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animated-text-stroke,
.animated-text-fill {
  font-family: var(--font-secondary);
  font-size: 140px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 70px; // Match the SKS size for consistency
  }
  
  @media (max-width: 576px) {
    font-size: 50px; // Match the SKS size for consistency
  }
}

.animated-text-stroke {
  position: absolute;
  top: 0;
  left: 0;
  color: transparent;
  -webkit-text-stroke: 2px var(--white);
  animation: clipPathAnimation 4s infinite;
}

.animated-text-fill {
  color: var(--secondary-color);
  animation: clipPathAnimation 4s infinite reverse;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

@keyframes clipPathAnimation {
  0%, 100% {
    clip-path: inset(0 0 0 0);
  }
  50% {
    clip-path: inset(0 0 0 100%);
  }
}

.hero-subtitle {
  font-size: 18px;
  color: var(--white);
  margin-bottom: 40px;
  max-width: 600px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  animation: fadeIn 1s ease-out 0.9s both;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin-bottom: 15px; // Further reduced margin to bring buttons closer
  animation: fadeInUp 1s ease-out 1.2s both;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 20px;
    justify-content: center;
    margin-bottom: 12px; // Further reduced margin on mobile
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    margin-bottom: 10px; // Further reduced margin on smaller screens
  }
}

.stat-item {
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .stat-number {
    font-family: var(--font-secondary);
    font-size: 48px;
    font-weight: 700;
    color: var(--secondary-color);
    line-height: 1;
    margin-bottom: 5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  
  .stat-label {
    font-size: 14px;
    color: var(--white);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

.hero-buttons {
  display: flex;
  gap: 20px;
  animation: fadeInUp 1s ease-out 1.5s both;
  align-items: center;
  margin-top: 5px; // Minimal margin to bring buttons closer to stats
  
  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 8px; // Minimal margin on mobile
    gap: 15px; // Reduce gap for mobile
  }
  
  @media (max-width: 576px) {
    flex-direction: row; // Keep buttons side by side on mobile
    gap: 12px; // Smaller gap for smaller screens
    justify-content: center;
    margin-top: 10px; // Minimal margin on smaller screens
  }
  
  @media (max-width: 480px) {
    gap: 10px; // Even smaller gap for very small screens
    margin-top: 12px; // Minimal margin for very small screens
  }
}

.construction-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  min-height: 50px; // Ensure minimum height for touch targets
  padding: 15px 30px; // Ensure adequate padding
  
  @media (max-width: 768px) {
    min-height: 55px; // Increase touch target on mobile
    padding: 18px 35px; // Increase padding for better mobile experience
    font-size: 15px; // Slightly larger text on mobile
  }
  
  @media (max-width: 576px) {
    min-height: 50px; // Adjusted height for side-by-side layout
    padding: 15px 20px; // Reduced padding to fit side by side
    font-size: 14px; // Slightly smaller text to fit better
    flex: 1; // Equal width buttons
    justify-content: center; // Center content
    max-width: 48%; // Ensure buttons don't get too wide
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  i {
    font-size: 16px;
    transition: transform 0.3s ease;
    
    @media (max-width: 768px) {
      font-size: 18px; // Larger icons on mobile
    }
    
    @media (max-width: 576px) {
      font-size: 16px; // Adjusted icon size for side-by-side layout
    }
  }
  
  &:hover i {
    transform: scale(1.1);
  }
}

// Construction Elements
.construction-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.element {
  position: absolute;
  color: var(--primary-color);
  font-size: 24px;
  opacity: 0.1;
  animation: float 3s ease-in-out infinite;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.2;
    transform: scale(1.1);
  }
  
  &.crane {
    top: 20%;
    right: 10%;
    animation-delay: 0s;
  }
  
  &.blueprint {
    bottom: 30%;
    left: 5%;
    animation-delay: 1s;
  }
  
  &.hammer {
    top: 60%;
    right: 20%;
    animation-delay: 2s;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

// Bottom Controls Container
.bottom-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 140px;
  z-index: 1001; // Higher than header to prevent overlap
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
  
  @media (max-width: 768px) {
    height: 120px;
    padding-bottom: 15px;
    // Ensure bottom controls don't overlap with header on mobile
    bottom: 0;
  }
  
  @media (max-width: 576px) {
    height: 100px;
    padding-bottom: 10px;
  }
  
  @media (max-width: 480px) {
    height: 90px;
    padding-bottom: 8px;
  }
}

.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 3;
  pointer-events: none;
  
  @media (max-width: 768px) {
    display: none;
  }
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: rgba(132, 204, 22, 0.9);
  border: none;
  color: var(--white);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: var(--secondary-color);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 10px 30px rgba(132, 204, 22, 0.3);
  }
  
  &.prev-btn {
    left: 30px;
  }
  
  &.next-btn {
    right: 30px;
  }
  
  i {
    font-size: 18px;
    transition: transform 0.3s ease;
  }
  
  &:hover i {
    transform: scale(1.2);
  }
}

.slider-dots {
  position: relative;
  display: flex;
  gap: 12px;
  z-index: 1002; // Higher z-index to ensure visibility
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none; // Hide slider dots on mobile
  }
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: var(--white);
    transform: scale(1.3);
    border-color: var(--white);
  }
  
  &.active {
    background-color: var(--secondary-color);
    transform: scale(1.3);
    border-color: var(--secondary-color);
    box-shadow: 0 0 25px rgba(132, 204, 22, 0.6);
  }
}

// Scroll Indicator
.scroll-indicator {
  position: relative;
  text-align: center;
  color: var(--white);
  z-index: 1003; // Highest z-index to ensure it's always visible
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    display: none; // Hide scroll indicator on mobile
  }
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .scroll-text {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
    opacity: 0.8;
    text-align: center;
    white-space: nowrap;
    
    @media (max-width: 576px) {
      font-size: 10px;
      letter-spacing: 1px;
    }
    
    @media (max-width: 480px) {
      font-size: 9px;
      letter-spacing: 0.5px;
    }
  }
  
  .scroll-arrow {
    animation: bounce 2s infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    
    i {
      font-size: 20px;
      color: var(--secondary-color);
      
      @media (max-width: 576px) {
        font-size: 16px;
      }
      
      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>