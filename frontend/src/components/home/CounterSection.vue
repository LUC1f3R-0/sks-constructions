<template>
  <section class="counter-section">
    <div class="counter-background">
      <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Construction Counter Background" />
      <div class="counter-overlay"></div>
      
      <!-- Construction Elements -->
      <div class="construction-elements">
        <div class="element crane" data-aos="fade-left" data-aos-delay="500">
          <i class="fas fa-cog"></i>
        </div>
        <div class="element blueprint" data-aos="fade-right" data-aos-delay="700">
          <i class="fas fa-drafting-compass"></i>
        </div>
        <div class="element hammer" data-aos="fade-up" data-aos-delay="900">
          <i class="fas fa-hammer"></i>
        </div>
        <div class="element tools" data-aos="fade-down" data-aos-delay="1100">
          <i class="fas fa-tools"></i>
        </div>
      </div>
    </div>
    
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="counter-header text-center" data-aos="fade-up">
            <h3 class="counter-title">Our Achievements</h3>
            <p class="counter-subtitle">Building excellence through years of dedicated service</p>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div 
          v-for="(counter, index) in counters" 
          :key="index"
          class="col-lg-3 col-md-6 col-sm-12"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        >
          <div class="counter-item">
            <div class="counter-icon">
              <i :class="counter.icon"></i>
            </div>
            <div class="counter-content">
              <div class="counter-number" :data-count="counter.number">0</div>
              <div class="counter-symbol">{{ counter.symbol }}</div>
            </div>
            <div class="counter-label">{{ counter.label }}</div>
            <div class="counter-description">{{ counter.description }}</div>
          </div>
        </div>
      </div>
      
      <!-- Achievement Badge -->
      <div class="row mt-5">
        <div class="col-12">
          <div class="achievement-badge text-center" data-aos="fade-up">
            <div class="badge-icon">
              <i class="fas fa-trophy"></i>
            </div>
            <h4>Award-Winning Construction Company</h4>
            <p>Recognized for excellence in construction and innovation</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const counters = [
  { 
    number: 500, 
    label: 'Projects Completed', 
    symbol: '+',
    icon: 'fas fa-building',
    description: 'Successfully delivered projects across various sectors'
  },
  { 
    number: 25, 
    label: 'Years Experience', 
    symbol: '+',
    icon: 'fas fa-clock',
    description: 'Decades of expertise in construction industry'
  },
  { 
    number: 100, 
    label: 'Team Members', 
    symbol: '+',
    icon: 'fas fa-users',
    description: 'Skilled professionals and experts'
  },
  { 
    number: 50, 
    label: 'Awards Won', 
    symbol: '+',
    icon: 'fas fa-trophy',
    description: 'Industry recognition and excellence awards'
  }
]

onMounted(() => {
  // Initialize counter animation
  const counterElements = document.querySelectorAll('.counter-number')
  
  const animateCounter = (element: Element) => {
    const target = parseInt(element.getAttribute('data-count') || '0')
    const duration = 3000
    const step = target / (duration / 16)
    let current = 0
    
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      element.textContent = Math.floor(current).toString()
    }, 16)
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })
  
  counterElements.forEach(element => observer.observe(element))
})
</script>

<style lang="scss" scoped>
.counter-section {
  position: relative;
  padding: 120px 0;
  margin-top: -50px;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 100px 0;
    margin-top: -30px;
  }
}

.counter-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.counter-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(2, 26, 71, 0.95) 0%, rgba(255, 95, 19, 0.8) 100%);
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
  animation: float 4s ease-in-out infinite;
  
  &.crane {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &.blueprint {
    bottom: 30%;
    right: 5%;
    animation-delay: 1s;
  }
  
  &.hammer {
    top: 60%;
    left: 20%;
    animation-delay: 2s;
  }
  
  &.tools {
    bottom: 20%;
    left: 15%;
    animation-delay: 3s;
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

.counter-header {
  margin-bottom: 80px;
  color: var(--white);
  
  .counter-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  
  .counter-subtitle {
    font-size: 18px;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
}

.counter-item {
  text-align: center;
  color: var(--white);
  padding: 40px 20px;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: var(--primary-color);
    opacity: 0;
    transition: var(--transition-default);
  }
  
  &:hover::before {
    opacity: 1;
    width: 120px;
  }
  
  @media (max-width: 768px) {
    padding: 30px 15px;
  }
}

.counter-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  transition: var(--transition-default);
  backdrop-filter: blur(10px);
  
  i {
    font-size: 32px;
    color: var(--primary-color);
    transition: var(--transition-default);
  }
  
  &:hover {
    background: var(--primary-color);
    transform: scale(1.1);
    
    i {
      color: var(--white);
    }
  }
}

.counter-content {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
  margin-bottom: 15px;
}

.counter-number {
  font-family: var(--font-secondary);
  font-size: 72px;
  font-weight: 700;
  line-height: 1;
  color: var(--primary-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 56px;
  }
  
  @media (max-width: 576px) {
    font-size: 48px;
  }
}

.counter-symbol {
  font-family: var(--font-secondary);
  font-size: 36px;
  font-weight: 700;
  color: var(--primary-color);
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
  
  @media (max-width: 576px) {
    font-size: 24px;
  }
}

.counter-label {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--white);
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.counter-description {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
}

.achievement-badge {
  background: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--white);
  
  .badge-icon {
    width: 80px;
    height: 80px;
    background: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    
    i {
      font-size: 32px;
      color: var(--white);
    }
  }
  
  h4 {
    font-size: 24px;
    margin-bottom: 10px;
    
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  
  p {
    font-size: 16px;
    opacity: 0.9;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
}
</style>
