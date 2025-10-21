<template>
  <section class="about-section section-padding">
    <div class="container-fluid">
      <div class="row align-items-center">
        <!-- Content Column -->
        <div class="col-lg-6 col-md-12">
          <div class="about-content text-center text-md-left" data-aos="fade-right">
            <div class="about-badge" data-aos="fade-down">
              <i class="fas fa-info-circle"></i>
              <span>About Our Company</span>
            </div>
            <h2 class="about-title">Building Excellence Since 2007</h2>
            <div class="about-description">
              <p class="description-main">
                SKS DEVELOPERS (PVT) LTD stands apart from competitors through our unique combination of advanced
                engineering expertise, innovative construction techniques, and unwavering commitment to client
                satisfaction. We don't just build structures – we create lasting legacies.
              </p>
              <p class="description-secondary">
                What sets us apart is our integrated approach: from initial design consultation to final project
                delivery, we provide comprehensive solutions that exceed expectations. Our experienced team combines
                traditional craftsmanship with cutting-edge technology, ensuring every project reflects our commitment
                to excellence and innovation.
              </p>
            </div>

            <!-- Company Stats - Desktop/Tablet -->
            <div class="company-stats d-none d-md-flex" data-aos="fade-up" data-aos-delay="200">
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
              <div class="stat-item">
                <div class="stat-content">
                  <div class="stat-number" data-count="50">0</div>
                  <div class="stat-label">Awards Won</div>
                </div>
              </div>
            </div>

            <!-- Company Stats - Mobile -->
            <div class="mobile-company-stats d-md-none" data-aos="fade-up" data-aos-delay="200">
              <div class="mobile-stat-item">
                <div class="mobile-stat-content">
                  <div class="mobile-stat-number" data-count="500">0</div>
                  <div class="mobile-stat-label">Projects Completed</div>
                </div>
              </div>
              <div class="mobile-stat-item">
                <div class="mobile-stat-content">
                  <div class="mobile-stat-number" data-count="100">0</div>
                  <div class="mobile-stat-label">Team Members</div>
                </div>
              </div>
              <div class="mobile-stat-item">
                <div class="mobile-stat-content">
                  <div class="mobile-stat-number" data-count="50">0</div>
                  <div class="mobile-stat-label">Awards Won</div>
                </div>
              </div>
            </div>

            <div class="about-features" data-aos="fade-up" data-aos-delay="400">
              <div class="feature-item">
                <div class="feature-icon">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div class="feature-text">
                  <h5>30+ Years of Experience</h5>
                  <p>Decades of construction expertise</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <div class="feature-text">
                  <h5>100% Customer Satisfaction</h5>
                  <p>Exceeding expectations every time</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <i class="fas fa-trophy"></i>
                </div>
                <div class="feature-text">
                  <h5>Award-Winning Excellence</h5>
                  <p>Industry recognition and accolades</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="feature-text">
                  <h5>On-Time Delivery</h5>
                  <p>Meeting deadlines consistently</p>
                </div>
              </div>
            </div>

            <div class="about-actions d-flex flex-wrap justify-content-center justify-content-md-start"
              data-aos="fade-up" data-aos-delay="600">
              <router-link to="/about" class="btn btn-primary construction-btn">
                <i class="fas fa-arrow-right"></i>
                <span>Learn More</span>
              </router-link>
              <router-link to="/contact" class="btn btn-outline construction-btn">
                <i class="fas fa-phone"></i>
                <span>Contact Us</span>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Image Column -->
        <div class="col-lg-6 col-md-12">
          <div class="about-image-wrapper" data-aos="fade-left">
            <div class="about-image">
              <img src="/images/The-Benefits-of-Hiring-a-Professional-Construction-Company-in-Sri-Lanka.png"
                alt="SKS DEVELOPERS (PVT) LTD Team" />
              <div class="image-overlay">
                <div class="since-badge">
                  <div class="badge-content">
                    <span class="badge-year">2007</span>
                    <span class="badge-text">Since</span>
                  </div>
                </div>
              </div>

              <!-- Construction Elements -->
              <div class="construction-elements">
                <div class="element crane" data-aos="fade-left" data-aos-delay="800">
                  <i class="fas fa-cog"></i>
                </div>
                <div class="element blueprint" data-aos="fade-right" data-aos-delay="1000">
                  <i class="fas fa-drafting-compass"></i>
                </div>
                <div class="element hammer" data-aos="fade-up" data-aos-delay="1200">
                  <i class="fas fa-hammer"></i>
                </div>
              </div>
            </div>

            <div class="experience-counter">
              <div class="counter-item">
                <div class="counter-icon">
                  <i class="fas fa-star"></i>
                </div>
                <div class="counter-content">
                  <div class="counter-number" data-count="17">0</div>
                  <div class="counter-label">Years of Excellence</div>
                </div>
              </div>
            </div>

            <!-- Quality Badge -->
            <div class="quality-badge" data-aos="fade-up" data-aos-delay="1400">
              <div class="badge-icon">
                <i class="fas fa-certificate"></i>
              </div>
              <div class="badge-text">
                <h5>ISO Certified</h5>
                <p>Quality Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Initialize counter animation
  const counters = document.querySelectorAll('.counter-number, .stat-number, .mobile-stat-number')

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
.about-section {
  background: linear-gradient(135deg, var(--white) 0%, var(--light-gray-2) 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ff5f13" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
  }
}

.about-content {
  padding-right: 50px;
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    padding-right: 0;
    margin-bottom: 50px;
    text-align: center;
  }
}

.about-badge {
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

  @media (max-width: 992px) {
    margin: 0 auto 20px auto;
  }

  i {
    font-size: 16px;
  }
}

.about-title {
  font-family: var(--font-secondary);
  font-size: 80px;
  font-weight: 700;
  color: var(--text-black);
  margin-bottom: 30px;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 576px) {
    font-size: 40px;
  }
}

.about-description {
  margin-bottom: 40px;
}

.description-main {
  font-size: 18px;
  color: var(--text-black);
  line-height: 1.8;
  margin-bottom: 20px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.description-secondary {
  font-size: 16px;
  color: var(--text-gray);
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 15px;
  }
}

.company-stats {
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
      color: var(--text-black);
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
      color: var(--text-gray);
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

.about-features {
  margin-bottom: 40px;
}

@media (max-width: 768px) {
  .about-features {
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;

  .feature-icon {
    width: 40px;
    height: 40px;
    background: rgba(132, 204, 22, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    i {
      color: var(--secondary-color);
      font-size: 16px;
    }
  }

  .feature-text {
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

.about-actions {
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 15px;
    justify-content: center;
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

.about-image-wrapper {
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    text-align: center;
  }
}

.about-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    transition: var(--transition-slow);

    @media (max-width: 768px) {
      height: 400px;
    }
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(29, 78, 216, 0.1) 100%);
}

// Construction Elements
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
  color: var(--primary-color);
  font-size: 24px;
  opacity: 0.1;
  animation: float 4s ease-in-out infinite;

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

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

.since-badge {
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(135deg, var(--dark-blue-2) 0%, var(--dark-blue-1) 100%);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

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

.experience-counter {
  position: absolute;
  top: -30px;
  left: -30px;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-green) 100%);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(132, 204, 22, 0.3);

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    margin-top: 30px;
    padding: 20px;
  }
}

.counter-item {
  display: flex;
  align-items: center;
  gap: 15px;
  color: var(--white);

  .counter-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 20px;
    }
  }

  .counter-content {
    .counter-number {
      font-family: var(--font-secondary);
      font-size: 36px;
      font-weight: 700;
      line-height: 1;
      margin-bottom: 5px;

      @media (max-width: 768px) {
        font-size: 28px;
      }
    }

    .counter-label {
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      opacity: 0.9;

      @media (max-width: 768px) {
        font-size: 10px;
      }
    }
  }
}

.quality-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--white);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
    width: 40px;
    height: 40px;
    background: var(--secondary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      color: var(--white);
      font-size: 16px;
    }
  }

  .badge-text {
    h5 {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-black);
      margin-bottom: 2px;
    }

    p {
      font-size: 12px;
      color: var(--text-gray);
      margin: 0;
    }
  }
}

// Mobile Company Stats Layout
.mobile-company-stats {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  align-items: center;

  @media (max-width: 576px) {
    gap: 15px;
    margin-bottom: 30px;
  }
}

.mobile-stat-item {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.mobile-stat-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
}

.mobile-stat-number {
  font-family: var(--font-secondary);
  font-size: 32px;
  font-weight: 700;
  color: var(--text-black);
  line-height: 1;

  @media (max-width: 576px) {
    font-size: 28px;
  }
}

.mobile-stat-label {
  font-size: 12px;
  color: var(--text-gray);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 11px;
    letter-spacing: 0.5px;
  }
}
</style>
