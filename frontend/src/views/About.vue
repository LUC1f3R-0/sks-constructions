<template>
  <div class="about-page">
    <Header />
    
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <div class="construction-elements">
          <div class="element crane" data-aos="fade-left" data-aos-delay="200">
            <i class="fas fa-cog"></i>
          </div>
          <div class="element blueprint" data-aos="fade-right" data-aos-delay="400">
            <i class="fas fa-drafting-compass"></i>
          </div>
          <div class="element hammer" data-aos="fade-up" data-aos-delay="600">
            <i class="fas fa-hammer"></i>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-6">
            <div class="hero-content text-center text-md-left" data-aos="fade-right">
              <div class="hero-badge" data-aos="fade-down">
                <i class="fas fa-building"></i>
                <span>About Our Company</span>
              </div>
              <h1 class="hero-title">
                <span class="company-name">SKS DEVELOPERS</span>
                <span class="company-type">(PVT) LTD</span>
              </h1>
              <p class="hero-subtitle">Building Excellence Since {{ foundingYear }}</p>
              <div class="hero-description">
                <p>SKS Developers (Pvt) Ltd was established in {{ foundingYear }} and was incorporated as a Limited Liability Company. Our corporate office is located at 210/15, 'Green Terrace', Makola Road, Kiribathgoda, Sri Lanka and we are strengthening with an Experienced and Qualified set of Resource Personnel, Machinery and Equipment to in line with the Industry Standards.</p>
              </div>
              <div class="hero-stats" data-aos="fade-up" data-aos-delay="400">
                <div class="stat-item">
                  <div class="stat-content">
                    <div class="stat-number" :data-count="yearsOfExperience">0</div>
                    <div class="stat-label">Years of Excellence</div>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-content">
                    <div class="stat-number" data-count="500">0</div>
                    <div class="stat-label">Projects Completed</div>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-content">
                    <div class="stat-number" data-count="100">0</div>
                    <div class="stat-label">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image" data-aos="fade-left" data-aos-delay="200">
              <img src="/images/Construction.jpg" alt="SKS Developers Construction Site" />
              <div class="image-overlay">
                <div class="since-badge">
                  <div class="badge-content">
                    <span class="badge-year">{{ foundingYear }}</span>
                    <span class="badge-text">Since</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Information Section -->
    <section class="company-info-section section-padding">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center" data-aos="fade-up">
              <h2 class="section-title">Our Company</h2>
              <p class="section-subtitle">Committed to Excellence in Construction</p>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="company-details" data-aos="fade-right">
              <div class="company-info-card">
                <div class="info-header">
                  <div class="info-icon">
                    <i class="fas fa-building"></i>
                  </div>
                  <h3>Company Information</h3>
                </div>
                <div class="info-content">
                  <div class="info-item">
                    <div class="info-label">
                      <i class="fas fa-calendar-alt"></i>
                      <span>Established</span>
                    </div>
                    <div class="info-value">{{ foundingYear }}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">
                      <i class="fas fa-certificate"></i>
                      <span>Company Type</span>
                    </div>
                    <div class="info-value">Limited Liability Company</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">
                      <i class="fas fa-map-marker-alt"></i>
                      <span>Corporate Office</span>
                    </div>
                    <div class="info-value">210/15, 'Green Terrace', Makola Road, Kiribathgoda, Sri Lanka</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="company-image" data-aos="fade-left">
              <img src="/images/shutterstock_57862405-building-scaled.jpg" alt="SKS Developers Office" />
              <div class="image-badge">
                <div class="badge-icon">
                  <i class="fas fa-award"></i>
                </div>
                <div class="badge-text">
                  <h5>Industry Standards</h5>
                  <p>Qualified Resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Timeline -->
    <section class="timeline-section section-padding bg-light">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center" data-aos="fade-up">
              <h2 class="section-title">Our Journey</h2>
              <p class="section-subtitle">Building Excellence Through the Years</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="timeline" data-aos="fade-up" data-aos-delay="200">
              <div class="timeline-item" data-aos="fade-right" data-aos-delay="300">
                <div class="timeline-marker">
                  <div class="marker-icon">
                    <i class="fas fa-rocket"></i>
                  </div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-year">{{ foundingYear }}</div>
                  <h4>Company Establishment</h4>
                  <p>SKS Developers (Pvt) Ltd was established and incorporated as a Limited Liability Company, marking the beginning of our construction excellence journey.</p>
                </div>
              </div>
              <div class="timeline-item" data-aos="fade-left" data-aos-delay="400">
                <div class="timeline-marker">
                  <div class="marker-icon">
                    <i class="fas fa-building"></i>
                  </div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-year">2010-2015</div>
                  <h4>Growth & Expansion</h4>
                  <p>Expanded our team with experienced and qualified resource personnel, and invested in modern machinery and equipment to meet industry standards.</p>
                </div>
              </div>
              <div class="timeline-item" data-aos="fade-right" data-aos-delay="500">
                <div class="timeline-marker">
                  <div class="marker-icon">
                    <i class="fas fa-trophy"></i>
                  </div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-year">2016-2020</div>
                  <h4>Recognition & Excellence</h4>
                  <p>Gained industry recognition for our commitment to quality and innovation, completing numerous successful projects across Sri Lanka.</p>
                </div>
              </div>
              <div class="timeline-item" data-aos="fade-left" data-aos-delay="600">
                <div class="timeline-marker">
                  <div class="marker-icon">
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-year">2021-Present</div>
                  <h4>Industry Leadership</h4>
                  <p>Continuing to lead the construction industry with advanced techniques, sustainable practices, and unwavering commitment to client satisfaction.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </section>

    <!-- Values Section -->
    <section class="values-section section-padding">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center" data-aos="fade-up">
              <h2 class="section-title">Our Values</h2>
              <p class="section-subtitle">What Drives Us Forward</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h4>Quality</h4>
              <p>We maintain the highest standards in every project, ensuring durability and excellence in construction.</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h4>Integrity</h4>
              <p>We conduct business with honesty, transparency, and ethical practices in all our dealings.</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <h4>Innovation</h4>
              <p>We embrace new technologies and innovative construction methods to deliver cutting-edge solutions.</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-users"></i>
              </div>
              <h4>Teamwork</h4>
              <p>Our experienced and qualified team works together to achieve exceptional results for our clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section-padding">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="cta-content text-center" data-aos="fade-up">
              <h2>Ready to Start Your Project?</h2>
              <p>Let's discuss how we can bring your construction vision to life with our experienced team and industry-standard equipment.</p>
              <div class="cta-buttons">
                <router-link to="/contact" class="btn btn-primary construction-btn">
                  <i class="fas fa-phone"></i>
                  <span>Contact Us</span>
                </router-link>
                <router-link to="/projects" class="btn btn-outline construction-btn">
                  <i class="fas fa-eye"></i>
                  <span>View Our Work</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

// Company founding year
const foundingYear = 2015

// Calculate years of experience dynamically
const yearsOfExperience = computed(() => {
  const currentYear = new Date().getFullYear()
  return currentYear - foundingYear
})

onMounted(() => {
  // Initialize counter animation
  const counters = document.querySelectorAll('.stat-number')
  
  const animateCounter = (counter: Element) => {
    const target = parseInt(counter.getAttribute('data-count') || '0')
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0
    
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      counter.textContent = Math.floor(current).toString()
    }, 16)
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        observer.unobserve(entry.target)
      }
    })
  })
  
  counters.forEach(counter => observer.observe(counter))
})
</script>

<style lang="scss" scoped>
.about-page {
  overflow-x: hidden;
  
  // Ensure proper mobile display
  @media (max-width: 768px) {
    .container-fluid {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  
  @media (max-width: 576px) {
    .container-fluid {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}

// Hero Section
.about-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--dark-blue-1) 100%);
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 80px 0 60px 0;
    display: block;
  }
  
  @media (max-width: 576px) {
    padding: 60px 0 40px 0;
  }
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(29, 78, 216, 0.9) 100%);
}

.construction-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.element {
  position: absolute;
  color: rgba(255, 255, 255, 0.1);
  font-size: 60px;
  animation: float 6s ease-in-out infinite;
  
  &.crane {
    top: 20%;
    right: 10%;
    animation-delay: 0s;
  }
  
  &.blueprint {
    bottom: 30%;
    left: 5%;
    animation-delay: 2s;
  }
  
  &.hammer {
    top: 60%;
    right: 20%;
    animation-delay: 4s;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(10deg);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  color: var(--white);
  padding-right: 50px;
  width: 100%;
  display: block;
  
  @media (max-width: 992px) {
    padding-right: 0;
    margin-bottom: 50px;
    text-align: center;
    width: 100%;
    display: block;
  }
  
  @media (max-width: 768px) {
    padding: 0 15px;
    text-align: center;
    width: 100%;
    display: block;
  }
  
  @media (max-width: 576px) {
    padding: 0 10px;
    text-align: center;
    width: 100%;
    display: block;
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--secondary-color);
  color: var(--white);
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  white-space: nowrap;
  flex-shrink: 0;
  
  @media (max-width: 992px) {
    margin: 0 auto 20px auto;
    display: flex;
  }
  
  @media (max-width: 768px) {
    padding: 6px 16px;
    font-size: 13px;
    margin: 0 auto 15px auto;
  }
  
  @media (max-width: 576px) {
    padding: 5px 14px;
    font-size: 12px;
    margin: 0 auto 15px auto;
  }
  
  @media (max-width: 480px) {
    padding: 4px 12px;
    font-size: 11px;
    margin: 0 auto 15px auto;
  }
  
  i {
    font-size: 16px;
    flex-shrink: 0;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    @media (max-width: 576px) {
      font-size: 13px;
    }
    
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
  
  span {
    white-space: nowrap;
    flex-shrink: 0;
  }
  
  // Ensure badge is always visible on mobile
  @media (max-width: 768px) {
    visibility: visible !important;
    opacity: 1 !important;
    display: flex !important;
    position: relative;
    z-index: 10;
    width: auto;
    height: auto;
    overflow: visible;
  }
}

// Additional mobile-specific styling to ensure badge visibility
@media (max-width: 768px) {
  .hero-badge {
    visibility: visible !important;
    opacity: 1 !important;
    display: flex !important;
    position: relative !important;
    z-index: 10 !important;
    background: var(--secondary-color) !important;
    color: var(--white) !important;
    margin: 0 auto 15px auto !important;
  }
}

.hero-title {
  font-family: var(--font-secondary);
  font-size: 80px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
  
  .company-name {
    display: block;
    color: var(--white);
    word-break: keep-all;
    white-space: nowrap;
  }
  
  .company-type {
    display: block;
    color: var(--secondary-color);
    font-size: 60px;
    word-break: keep-all;
    white-space: nowrap;
  }
  
  @media (max-width: 1200px) {
    font-size: 70px;
    
    .company-type {
      font-size: 50px;
    }
  }
  
  @media (max-width: 992px) {
    font-size: 60px;
    
    .company-type {
      font-size: 45px;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 50px;
    
    .company-type {
      font-size: 40px;
    }
  }
  
  @media (max-width: 576px) {
    font-size: 40px;
    
    .company-type {
      font-size: 32px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 35px;
    
    .company-type {
      font-size: 28px;
    }
  }
  
  @media (max-width: 360px) {
    font-size: 30px;
    
    .company-type {
      font-size: 24px;
    }
  }
}

.hero-subtitle {
  font-size: 24px;
  color: var(--secondary-color);
  margin-bottom: 30px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
}

.hero-description {
  margin-bottom: 40px;
  width: 100%;
  
  p {
    font-size: 18px;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
    word-break: break-word;
    margin: 0;
    
    @media (max-width: 992px) {
      font-size: 17px;
    }
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
    
    @media (max-width: 576px) {
      font-size: 15px;
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
}

.hero-stats {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 992px) {
    gap: 25px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
  
  @media (max-width: 576px) {
    gap: 15px;
    margin-bottom: 30px;
  }
}

.stat-item {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  .stat-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: center;
    
    .stat-number {
      font-family: var(--font-secondary);
      font-size: 32px;
      font-weight: 700;
      color: var(--secondary-color);
      line-height: 1;
      
      @media (max-width: 768px) {
        font-size: 28px;
      }
      
      @media (max-width: 576px) {
        font-size: 24px;
      }
    }
    
    .stat-label {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;
      
      @media (max-width: 768px) {
        font-size: 11px;
        letter-spacing: 0.5px;
      }
      
      @media (max-width: 576px) {
        font-size: 10px;
        letter-spacing: 0.3px;
      }
    }
  }
}

.hero-image {
  position: relative;
  z-index: 2;
  width: 100%;
  
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    display: block;
    
    @media (max-width: 992px) {
      height: 450px;
    }
    
    @media (max-width: 768px) {
      height: 400px;
    }
    
    @media (max-width: 576px) {
      height: 350px;
    }
    
    @media (max-width: 480px) {
      height: 300px;
    }
  }
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(29, 78, 216, 0.1) 100%);
  border-radius: 20px;
}

.since-badge {
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-green) 100%);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    bottom: 20px;
    right: 20px;
  }
}

.badge-content {
  text-align: center;
  color: var(--white);
  
  .badge-year {
    display: block;
    font-family: var(--font-secondary);
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  
  .badge-text {
    display: block;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 5px;
    
    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
}

// Company Info Section
.company-info-section {
  background: var(--white);
}

.section-header {
  margin-bottom: 80px;
}

.section-title {
  font-family: var(--font-secondary);
  font-size: 60px;
  font-weight: 700;
  color: var(--text-black);
  margin-bottom: 20px;
  word-break: keep-all;
  white-space: nowrap;
  
  @media (max-width: 1200px) {
    font-size: 55px;
  }
  
  @media (max-width: 992px) {
    font-size: 50px;
  }
  
  @media (max-width: 768px) {
    font-size: 40px;
    white-space: normal;
    word-break: break-word;
  }
  
  @media (max-width: 576px) {
    font-size: 35px;
  }
  
  @media (max-width: 480px) {
    font-size: 30px;
  }
  
  @media (max-width: 360px) {
    font-size: 26px;
  }
}

.section-subtitle {
  font-size: 18px;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
}

.company-info-card {
  background: linear-gradient(135deg, var(--white) 0%, var(--light-gray-2) 100%);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.1);
  transition: var(--transition-default);
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 992px) {
    padding: 35px;
  }
  
  @media (max-width: 768px) {
    padding: 30px;
  }
  
  @media (max-width: 576px) {
    padding: 25px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
  }
}

.info-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(37, 99, 235, 0.1);
  width: 100%;
  flex-wrap: wrap;
  
  .info-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--dark-blue-1) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    i {
      color: var(--white);
      font-size: 24px;
    }
    
    @media (max-width: 576px) {
      width: 50px;
      height: 50px;
      
      i {
        font-size: 20px;
      }
    }
  }
  
  h3 {
    font-size: 28px;
    font-weight: 700;
    color: var(--text-black);
    margin: 0;
    flex: 1;
    min-width: 0;
    word-break: break-word;
    
    @media (max-width: 992px) {
      font-size: 26px;
    }
    
    @media (max-width: 768px) {
      font-size: 24px;
    }
    
    @media (max-width: 576px) {
      font-size: 22px;
    }
    
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
  
  @media (max-width: 576px) {
    gap: 15px;
    margin-bottom: 25px;
    padding-bottom: 15px;
  }
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  
  .info-label {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 140px;
    flex-shrink: 0;
    
    i {
      color: var(--primary-color);
      font-size: 18px;
      flex-shrink: 0;
    }
    
    span {
      font-size: 16px;
      font-weight: 600;
      color: var(--text-black);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      white-space: nowrap;
    }
    
    @media (max-width: 576px) {
      min-width: 120px;
      
      i {
        font-size: 16px;
      }
      
      span {
        font-size: 14px;
      }
    }
  }
  
  .info-value {
    font-size: 16px;
    color: var(--text-gray);
    line-height: 1.6;
    flex: 1;
    word-break: break-word;
    
    @media (max-width: 576px) {
      font-size: 15px;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    
    .info-label {
      min-width: auto;
      
      span {
        white-space: normal;
      }
    }
  }
  
  @media (max-width: 576px) {
    gap: 8px;
  }
}

.company-image {
  position: relative;
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 768px) {
      height: 300px;
    }
  }
}

.image-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--white);
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    position: relative;
    bottom: 0;
    right: 0;
    margin-top: 20px;
    justify-content: center;
  }
  
  .badge-icon {
    width: 50px;
    height: 50px;
    background: var(--secondary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    i {
      color: var(--white);
      font-size: 20px;
    }
  }
  
  .badge-text {
    h5 {
      font-size: 16px;
      font-weight: 600;
      color: var(--text-black);
      margin-bottom: 5px;
    }
    
    p {
      font-size: 14px;
      color: var(--text-gray);
      margin: 0;
    }
  }
}

// Timeline Section
.timeline-section {
  background: var(--light-gray-2);
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  
  &:nth-child(odd) {
    flex-direction: row;
    
    .timeline-content {
      margin-left: 60px;
      text-align: left;
    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      
      .timeline-content {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    .timeline-content {
      margin-right: 60px;
      text-align: right;
    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      
      .timeline-content {
        margin-right: 0;
        margin-top: 20px;
        text-align: left;
      }
    }
  }
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 30px;
  }
  
  .marker-icon {
    width: 60px;
    height: 60px;
    margin-top: -20px;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--dark-blue-1) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
    
    i {
      color: var(--white);
      font-size: 24px;
    }
  }
}

.timeline-content {
  background: var(--white);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 300px;
  
  .timeline-year {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  
  h4 {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-black);
    margin-bottom: 15px;
  }
  
  p {
    font-size: 15px;
    color: var(--text-gray);
    line-height: 1.6;
    margin: 0;
  }
}

// Values Section
.values-section {
  background: var(--white);
}

.value-card {
  text-align: center;
  padding: 40px 30px;
  border-radius: 20px;
  background: var(--white);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: var(--transition-default);
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }
  
  .value-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-green) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 25px;
    
    i {
      color: var(--white);
      font-size: 32px;
    }
  }
  
  h4 {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-black);
    margin-bottom: 15px;
  }
  
  p {
    font-size: 15px;
    color: var(--text-gray);
    line-height: 1.6;
    margin: 0;
  }
}

// CTA Section
.cta-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--dark-blue-1) 100%);
  color: var(--white);
}

.cta-content {
  h2 {
    font-family: var(--font-secondary);
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 35px;
    }
  }
  
  p {
    font-size: 18px;
    margin-bottom: 40px;
    opacity: 0.9;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
}

.construction-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition-default);
  
  i {
    font-size: 16px;
  }
  
  &:hover {
    transform: scale(1.05);
  }
}

.btn-primary {
  background: var(--secondary-color);
  color: var(--white);
  border: 2px solid var(--secondary-color);
  
  &:hover {
    background: transparent;
    color: var(--secondary-color);
  }
}

.btn-outline {
  background: transparent;
  color: var(--white);
  border: 2px solid var(--white);
  
  &:hover {
    background: var(--white);
    color: var(--primary-color);
  }
}

// Utility Classes
.bg-light {
  background: var(--light-gray-2);
}

.section-padding {
  padding: 100px 0;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
}
</style>
