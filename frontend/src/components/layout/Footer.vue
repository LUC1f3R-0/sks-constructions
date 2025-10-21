<template>
  <footer class="footer">
    <!-- Arrow Animation at Top -->
    <div class="footer-arrow" @click="scrollToTop">
      <div class="arrow-container">
        <i class="fas fa-chevron-up"></i>
      </div>
    </div>

    <div class="footer-content">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <!-- Company Info -->
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="footer-widget text-center text-md-left" data-aos="fade-up">
              <div class="footer-logo">
                <div class="logo-container d-flex justify-content-center justify-content-md-start">
                  <div class="logo-icon">
                    <img src="/company_logo.svg" alt="SKS DEVELOPERS (PVT) LTD Logo" class="logo-image">
                  </div>
                  <div class="logo-text">
                    <span class="logo-title">SKS</span>
                    <span class="logo-subtitle">DEVELOPERS</span>
                  </div>
                </div>
              </div>
              <p class="footer-description">
                SKS DEVELOPERS (PVT) LTD is a leading construction company specializing in advanced engineering techniques and innovative building solutions. We deliver excellence in every project with over 25 years of experience.
              </p>
              <div class="footer-social">
                <a href="https://facebook.com/sksdevelopers" target="_blank" class="social-link" title="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-link" title="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-link" title="LinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-link" title="Instagram">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="social-link" title="YouTube">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="footer-widget text-center text-md-left" data-aos="fade-up" data-aos-delay="100">
              <h4 class="footer-title d-flex justify-content-center justify-content-md-start">
                <i class="fas fa-link"></i>
                Quick Links
              </h4>
              <ul class="footer-links">
                <li><router-link to="/about"><i class="fas fa-chevron-right"></i>About Us</router-link></li>
                <li><router-link to="/services"><i class="fas fa-chevron-right"></i>Our Services</router-link></li>
                <li><router-link to="/service-portfolio"><i class="fas fa-chevron-right"></i>Service Portfolio</router-link></li>
                <li><router-link to="/projects"><i class="fas fa-chevron-right"></i>Projects</router-link></li>
                <li><router-link to="/testimonials"><i class="fas fa-chevron-right"></i>Testimonials</router-link></li>
                <li><router-link to="/project-updates"><i class="fas fa-chevron-right"></i>Project Updates</router-link></li>
                <li><router-link to="/why-choose-us"><i class="fas fa-chevron-right"></i>Why Choose Us</router-link></li>
                <li><router-link to="/contact"><i class="fas fa-chevron-right"></i>Contact Us</router-link></li>
              </ul>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="footer-widget text-center text-md-left" data-aos="fade-up" data-aos-delay="200">
              <h4 class="footer-title d-flex justify-content-center justify-content-md-start">
                <i class="fas fa-phone"></i>
                Contact Info
              </h4>
              <div class="contact-info">
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="contact-details">
                    <h5>Address</h5>
                    <p>210/15, Green Terrace,<br>Makola Road,<br>Kiribathgoda, Sri Lanka</p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="contact-details">
                    <h5>Phone</h5>
                    <p>(+94) 717-640-039</p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-details">
                    <h5>Email</h5>
                    <p>info@sksdevelopers.lk</p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="contact-details">
                    <h5>Working Hours</h5>
                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Newsletter -->
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="footer-widget text-center text-md-left" data-aos="fade-up" data-aos-delay="300">
              <h4 class="footer-title d-flex justify-content-center justify-content-md-start">
                <i class="fas fa-newspaper"></i>
                Newsletter
              </h4>
              <p class="newsletter-description">
                Subscribe to our newsletter for the latest construction news, project updates, and industry insights.
              </p>
              <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
                <div class="form-group">
                  <input 
                    type="email" 
                    class="form-control" 
                    placeholder="Enter your email"
                    v-model="email"
                    :class="{ 'error': emailError }"
                    @input="clearError"
                  />
                  <button type="submit" class="btn btn-primary">
                    <i class="fas fa-paper-plane"></i>
                    <span>Subscribe</span>
                  </button>
                </div>
                <div v-if="emailError" class="error-message">
                  {{ emailError }}
                </div>
              </form>
              
              <!-- Construction Stats -->
              <div class="construction-stats d-flex justify-content-center justify-content-md-start">
                <div class="stat-item">
                  <div class="stat-number">500+</div>
                  <div class="stat-label">Projects</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">25+</div>
                  <div class="stat-label">Years</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">100+</div>
                  <div class="stat-label">Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="copyright text-center text-md-left">
              © {{ currentYear }} SKS DEVELOPERS (PVT) LTD. All rights reserved. Made with 
              <i class="fas fa-heart text-primary"></i> 
              by SKS Team
            </p>
          </div>
          <div class="col-md-6">
            <div class="footer-bottom-links d-flex justify-content-center justify-content-md-end">
              <router-link to="/privacy">Privacy Policy</router-link>
              <router-link to="/terms">Terms of Service</router-link>
              <router-link to="/sitemap">Sitemap</router-link>
              <router-link to="/careers">Careers</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const email = ref('')
const emailError = ref('')
const currentYear = computed(() => new Date().getFullYear())

const subscribeNewsletter = () => {
  // Clear previous errors
  emailError.value = ''
  
  // Validate email
  if (!email.value) {
    emailError.value = 'Please enter your email address'
    return
  }
  
  if (!isValidEmail(email.value)) {
    emailError.value = 'Please enter a valid email address'
    return
  }
  
  // Handle newsletter subscription
  console.log('Newsletter subscription:', email.value)
  email.value = ''
  // You can add actual API call here
}

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const clearError = () => {
  emailError.value = ''
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(135deg, var(--dark-blue-3) 0%, var(--dark-blue-1) 100%);
  color: var(--white);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ff5f13" opacity="0.03"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
  }
}

.footer-arrow {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.arrow-container {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-default);
  animation: float 2s ease-in-out infinite;
  box-shadow: 0 5px 20px rgba(37, 99, 235, 0.3);
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.5);
  }
  
  i {
    color: var(--white);
    font-size: 16px;
  }
}

.footer-content {
  padding: 130px 0 100px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 80px 0 60px;
  }
}

.footer-widget {
  margin-bottom: 40px;
}

.footer-logo {
  margin-bottom: 25px;
  
  .logo-container {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .logo-icon {
    width: 70px;
    height: 70px;
    background: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    animation: pulse 2s infinite;
    
    
    .logo-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    
    @keyframes pulse {
      0% {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(37, 99, 235, 0.7);
      }
      70% {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 0 0 0 10px rgba(37, 99, 235, 0);
      }
      100% {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(37, 99, 235, 0);
      }
    }
  }
  
  .logo-text {
    display: flex;
    flex-direction: column;
    
    .logo-title {
      font-family: var(--font-secondary);
      font-size: 28px;
      font-weight: 700;
      color: var(--primary-color);
      line-height: 1;
    }
    
    .logo-subtitle {
      font-size: 10px;
      font-weight: 600;
      color: var(--white);
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
}

.footer-description {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 25px;
}

.footer-social {
  display: flex;
  gap: 15px;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.15);
  color: var(--white);
  border-radius: 50%;
  transition: var(--transition-default);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: var(--primary-color);
    transform: translateY(-3px) rotate(360deg);
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.4);
    border-color: var(--primary-color);
  }
  
  i {
    font-size: 16px;
    font-weight: 500;
  }
}

.footer-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 25px;
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 10px;
  
  i {
    color: var(--primary-color);
    font-size: 18px;
  }
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 12px;
    
    a {
      color: rgba(255, 255, 255, 0.85);
      text-decoration: none;
      transition: var(--transition-default);
      display: flex;
      align-items: center;
      gap: 8px;
      
      i {
        font-size: 10px;
        color: var(--primary-color);
        transition: var(--transition-default);
      }
      
      &:hover {
        color: var(--primary-color);
        transform: translateX(5px);
        
        i {
          transform: translateX(3px);
        }
      }
    }
  }
}

.contact-info {
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
    justify-content: flex-start;
    
    .contact-icon {
      width: 40px;
      height: 40px;
      background: rgba(37, 99, 235, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      
      i {
        color: var(--primary-color);
        font-size: 16px;
      }
    }
    
    .contact-details {
      flex: 1;
      text-align: left;
      
      h5 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 5px;
        color: var(--white);
      }
      
      p {
        color: rgba(255, 255, 255, 0.85);
        margin: 0;
        line-height: 1.4;
        font-size: 14px;
      }
    }
    
    @media (max-width: 768px) {
      .contact-item {
        margin-bottom: 15px;
      }
      
      .contact-icon {
        width: 35px;
        height: 35px;
        
        i {
          font-size: 14px;
        }
      }
      
      .contact-details {
        h5 {
          font-size: 14px;
        }
        
        p {
          font-size: 13px;
        }
      }
    }
  }
}

.newsletter-description {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  line-height: 1.6;
}

.newsletter-form {
  margin-bottom: 30px;
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    @media (min-width: 576px) {
      flex-direction: row;
      gap: 0;
      border-radius: 30px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.15);
      border: 2px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
    }
    
    .form-control {
      flex: 1;
      padding: 18px 20px;
      background: rgba(255, 255, 255, 0.15);
      border: 2px solid rgba(255, 255, 255, 0.3);
      color: var(--white);
      border-radius: 25px;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.5;
      height: 50px;
      box-sizing: border-box;
      transition: all 0.3s ease;
      
      @media (min-width: 576px) {
        border: none;
        border-radius: 0;
        background: transparent;
        padding: 18px 20px;
        height: 50px;
      }
      
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.5;
        position: relative;
        top: 1px;
      }
      
      &.error {
        border-color: #ef4444;
        background: rgba(239, 68, 68, 0.1);
        
        @media (min-width: 576px) {
          background: rgba(239, 68, 68, 0.05);
        }
      }
      
      &:focus {
        outline: none;
        border-color: var(--primary-color);
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
        
        @media (min-width: 576px) {
          border: none;
          box-shadow: none;
          background: transparent;
        }
      }
    }
    
    .btn {
      padding: 15px 25px;
      font-size: 14px;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: var(--primary-color);
      color: var(--white);
      border: 2px solid var(--primary-color);
      font-weight: 600;
      transition: all 0.3s ease;
      white-space: nowrap;
      min-width: 140px;
      
      @media (min-width: 576px) {
        border: none;
        border-radius: 0;
        padding: 15px 25px;
        min-width: 140px;
      }
      
      &:hover {
        background: #1d4ed8;
        border-color: #1d4ed8;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
        
        @media (min-width: 576px) {
          border: none;
        }
      }
      
      i {
        font-size: 12px;
      }
    }
  }
}

.error-message {
  color: #ef4444;
  font-size: 12px;
  margin-top: 8px;
  text-align: center;
  
  @media (min-width: 576px) {
    text-align: left;
  }
}

.construction-stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 15px;
  }
  
  .stat-item {
    text-align: center;
    flex: 1;
    min-width: 80px;
    
    .stat-number {
      font-family: var(--font-secondary);
      font-size: 24px;
      font-weight: 700;
      color: var(--primary-color);
      line-height: 1;
      margin-bottom: 5px;
      display: block;
    }
    
    .stat-label {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.85);
      text-transform: uppercase;
      letter-spacing: 1px;
      display: block;
    }
  }
}

.footer-bottom {
  background: rgba(0, 0, 0, 0.3);
  padding: 30px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 2;
}

.copyright {
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  
  .fa-heart {
    color: var(--primary-color);
    animation: heartbeat 1s ease-in-out infinite;
  }
}

.footer-bottom-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  
  @media (min-width: 768px) {
    justify-content: flex-end;
    gap: 20px;
    flex-wrap: nowrap;
  }
  
  @media (max-width: 768px) {
    margin-top: 15px;
  }
  
  a {
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    font-size: 14px;
    transition: var(--transition-default);
    white-space: nowrap;
    padding: 5px 0;
    
    &:hover {
      color: var(--primary-color);
      transform: translateY(-1px);
    }
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>
