<template>
  <div class="contact-page">
    <Header />
    
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="page-title" data-aos="fade-up">Contact Us</h1>
            <p class="page-subtitle" data-aos="fade-up" data-aos-delay="100">
              Get in touch with us for your construction needs
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section section-padding">
      <div class="container">
        <div class="row">
          <!-- Contact Form -->
          <div class="col-lg-8 col-md-12">
            <div class="contact-form-wrapper" data-aos="fade-right">
              <h3 class="section-title">Send us a Message</h3>
              <p class="section-description">
                Ready to start your next construction project? Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form class="contact-form" @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="firstName">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        v-model="form.firstName" 
                        class="form-control"
                        required
                      >
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="lastName">Last Name *</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        v-model="form.lastName" 
                        class="form-control"
                        required
                      >
                    </div>
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        v-model="form.email" 
                        class="form-control"
                        required
                      >
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        v-model="form.phone" 
                        class="form-control"
                      >
                    </div>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="subject">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    v-model="form.subject" 
                    class="form-control"
                    required
                  >
                </div>
                
                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea 
                    id="message" 
                    v-model="form.message" 
                    class="form-control" 
                    rows="6"
                    required
                  ></textarea>
                </div>
                
                <div class="form-group">
                  <button type="submit" class="btn btn-primary construction-btn" :disabled="isSubmitting">
                    <i class="fas fa-paper-plane" v-if="!isSubmitting"></i>
                    <i class="fas fa-spinner fa-spin" v-if="isSubmitting"></i>
                    <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <!-- Contact Information -->
          <div class="col-lg-4 col-md-12">
            <div class="contact-info-wrapper" data-aos="fade-left">
              <h3 class="section-title">Get in Touch</h3>
              <p class="section-description">
                We're here to help with all your construction needs. Reach out to us through any of the following methods.
              </p>
              
              <div class="contact-info">
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="contact-details">
                    <h5>Our Address</h5>
                    <p>210/15, Green Terrace,<br>Makola Road,<br>Kiribathgoda, Sri Lanka</p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="contact-details">
                    <h5>Phone Number</h5>
                    <p><a href="tel:+94717640039">(+94) 717-640-039</a></p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-details">
                    <h5>Email Address</h5>
                    <p><a href="mailto:info@sksdevelopers.lk">info@sksdevelopers.lk</a></p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="contact-details">
                    <h5>Working Hours</h5>
                    <p>Mon - Fri: 8:00 AM - 6:00 PM<br>Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              
              <!-- Social Media -->
              <div class="social-links">
                <h5>Follow Us</h5>
                <div class="social-icons">
                  <a href="#" class="social-icon" title="Facebook">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-icon" title="Twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="social-icon" title="LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" class="social-icon" title="Instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clients Section -->
    <section class="clients-preview section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center">
              <h3 class="section-title">Trusted by Industry Leaders</h3>
              <p class="section-subtitle">Join our growing list of satisfied clients</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div 
            v-for="(client, index) in clients" 
            :key="index"
            class="col-lg-2 col-md-3 col-sm-4 col-6"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="client-logo-simple">
              <img 
                :src="client.logo" 
                :alt="client.name" 
                class="client-logo-img"
                @error="handleImageError"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container-fluid">
      <div class="row">
        <div class="col-12">
            <div class="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.5!2d79.9!3d7.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDAnMDAuMCJOIDc5wrA1NCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

// Form data
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

// Client data for the preview section
const clients = ref([
  {
    name: 'TechCorp Solutions',
    logo: '/clients/1-1.png'
  },
  {
    name: 'Global Industries',
    logo: '/clients/4-1.png'
  },
  {
    name: 'Prime Enterprises',
    logo: '/clients/5.png'
  },
  {
    name: 'Innovation Hub',
    logo: '/clients/6.jpg'
  },
  {
    name: 'Future Builders',
    logo: '/clients/download (1).png'
  },
  {
    name: 'Elite Partners',
    logo: '/clients/download.png'
  }
])

// Handle image loading errors
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04NSA0MEgxMTVWNTBIODVWNDBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik04NSA1NUgxMTVWNjVIODVWNTVaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik04NSA3MEgxMTVWODBIODVWNzBaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iOTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2xpZW50IExvZ288L3RleHQ+Cjwvc3ZnPgo='
}

// Form submission
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    Object.keys(form).forEach(key => {
      (form as any)[key] = ''
    })
    
    alert('Thank you for your message! We will get back to you within 24 hours.')
  } catch (error) {
    alert('Sorry, there was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 120px 0 80px;
  color: white;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 0;
}

.contact-section {
  padding: 80px 0;
}

.contact-form-wrapper,
.contact-info-wrapper {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--dark-color);
}

.section-description {
  color: var(--text-color);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-form {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--dark-color);
}

.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.construction-btn {
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.construction-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.contact-info {
  margin-top: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 2rem;
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon i {
  color: var(--primary-color);
  font-size: 20px;
}

.contact-details h5 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark-color);
}

.contact-details p {
  color: var(--text-color);
  margin: 0;
  line-height: 1.5;
}

.contact-details a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-details a:hover {
  color: var(--secondary-color);
}

.social-links {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e9ecef;
}

.social-links h5 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--dark-color);
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
}

.map-section {
  padding: 0;
}

.map-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 0;
  overflow: hidden;
}

.map-wrapper iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Clients Preview Section */
.clients-preview {
  background: linear-gradient(135deg, var(--white) 0%, var(--light-gray-2) 100%);
  padding: 60px 0;
}

.clients-preview .section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-black);
  margin-bottom: 1rem;
}

.clients-preview .section-subtitle {
  font-size: 1.1rem;
  color: var(--text-gray);
  margin-bottom: 2rem;
}

.client-logo-simple {
  background: var(--white);
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.15);
  }
}

.client-logo-img {
  max-width: 100%;
  max-height: 80px;
  object-fit: contain;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .contact-form-wrapper,
  .contact-info-wrapper {
    padding: 30px 20px;
    margin-bottom: 30px;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .contact-item {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }
  
  .contact-icon {
    width: 40px;
    height: 40px;
  }
  
  .contact-icon i {
    font-size: 16px;
  }
  
  .contact-details h5 {
    font-size: 1rem;
  }
  
  .contact-details p {
    font-size: 0.9rem;
  }
  
  .social-icons {
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .page-header {
    padding: 100px 0 60px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .contact-section {
    padding: 60px 0;
  }
  
  .contact-form-wrapper,
  .contact-info-wrapper {
    padding: 25px 15px;
  }
  
  .contact-item {
    margin-bottom: 1.5rem;
  }
  
  .contact-icon {
    width: 35px;
    height: 35px;
  }
  
  .contact-icon i {
    font-size: 14px;
  }
  
  .contact-details h5 {
    font-size: 0.95rem;
  }
  
  .contact-details p {
    font-size: 0.85rem;
  }
}
</style>