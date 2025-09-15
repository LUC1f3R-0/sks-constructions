<template>
  <section class="contact-cta-section">
    <div class="cta-background">
      <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Construction Background" />
      <div class="cta-overlay"></div>
      
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
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-8 col-md-10 col-sm-12">
          <div class="cta-content text-center text-md-left" data-aos="fade-up">
            <div class="cta-badge" data-aos="fade-down" data-aos-delay="200">
              <i class="fas fa-phone"></i>
              <span>Ready to Start?</span>
            </div>
            <h2 class="cta-title">Let's Build Your Vision Together</h2>
            <p class="cta-description">
              Ready to start your next construction project? Get in touch with our expert team today. 
              We're here to discuss your vision and bring it to life with our advanced construction solutions.
            </p>
            
            <!-- Contact Features -->
            <div class="contact-features" data-aos="fade-up" data-aos-delay="400">
              <div class="feature-item">
                <div class="feature-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="feature-text">
                  <h5>24/7 Support</h5>
                  <p>Round the clock assistance</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <div class="feature-text">
                  <h5>Quality Guarantee</h5>
                  <p>100% satisfaction assured</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <i class="fas fa-dollar-sign"></i>
                </div>
                <div class="feature-text">
                  <h5>Free Consultation</h5>
                  <p>No cost initial meeting</p>
                </div>
              </div>
            </div>
            
            <div class="cta-buttons" data-aos="fade-up" data-aos-delay="600">
              <router-link to="/contact" class="btn btn-primary construction-btn">
                <i class="fas fa-phone"></i>
                <span>Get Free Quote</span>
              </router-link>
              <router-link to="/projects" class="btn btn-outline construction-btn">
                <i class="fas fa-eye"></i>
                <span>View Projects</span>
              </router-link>
            </div>
            
            <!-- Contact Info -->
            <div class="contact-info" data-aos="fade-up" data-aos-delay="800">
              <div class="info-item">
                <i class="fas fa-phone"></i>
                <span>(+94) 717-640-039</span>
              </div>
              <div class="info-item">
                <i class="fas fa-envelope"></i>
                <span>info@sksdevelopers.lk</span>
              </div>
              <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Kiribathgoda, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- CTA Form -->
        <div class="col-lg-4 col-md-6">
          <div class="cta-form-container" data-aos="fade-left" data-aos-delay="400">
            <div class="cta-form">
              <h3 class="form-title">Get Your Free Quote</h3>
              <p class="form-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
              
              <form @submit.prevent="submitForm">
                <div class="form-group">
                  <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Your Name"
                    v-model="formData.name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input 
                    type="email" 
                    class="form-control" 
                    placeholder="Your Email"
                    v-model="formData.email"
                    required
                  />
                </div>
                <div class="form-group">
                  <input 
                    type="tel" 
                    class="form-control" 
                    placeholder="Your Phone"
                    v-model="formData.phone"
                    required
                  />
                </div>
                <div class="form-group">
                  <select class="form-control" v-model="formData.service" required>
                    <option value="">Select Service</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="residential">Residential Construction</option>
                    <option value="renovation">Renovation</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                <div class="form-group">
                  <textarea 
                    class="form-control" 
                    placeholder="Project Details"
                    v-model="formData.message"
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary submit-btn">
                  <i class="fas fa-paper-plane"></i>
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', formData.value)
  // You can add actual API call here
  alert('Thank you for your message! We will get back to you soon.')
  
  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  }
}
</script>

<style lang="scss" scoped>
.contact-cta-section {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
}

.cta-background {
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

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(2, 26, 71, 0.95) 0%, rgba(37, 99, 235, 0.8) 100%);
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

.cta-content {
  position: relative;
  z-index: 2;
  color: var(--white);
}

.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.95);
  color: var(--primary-color);
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  i {
    font-size: 16px;
  }
}

.cta-title {
  font-family: var(--font-secondary);
  font-size: 70px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 30px;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 50px;
  }
  
  @media (max-width: 576px) {
    font-size: 40px;
  }
}

.cta-description {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 40px;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.contact-features {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 15px;
  
  .feature-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    
    i {
      color: var(--white);
      font-size: 20px;
    }
  }
  
  .feature-text {
    h5 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 5px;
      color: var(--white);
    }
    
    p {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
    }
  }
}

.cta-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 15px;
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

.contact-info {
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
  
  .info-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    
    i {
      color: var(--primary-color);
      font-size: 16px;
    }
  }
}

.cta-form-container {
  position: relative;
  z-index: 2;
}

.cta-form {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 40px;
  color: var(--white);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  .form-title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--white);
  }
  
  .form-subtitle {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
  }
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: var(--white);
  font-size: 14px;
  transition: var(--transition-default);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
  
  option {
    background: var(--dark-blue-1);
    color: var(--white);
  }
}

.submit-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 10px;
  font-weight: 600;
  transition: var(--transition-default);
  
  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
  }
  
  i {
    font-size: 16px;
  }
}
</style>
