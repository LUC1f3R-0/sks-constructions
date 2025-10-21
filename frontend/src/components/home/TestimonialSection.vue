<template>
  <section class="testimonial-section section-padding">
    <div class="container-fluid">
      <!-- Section Title -->
      <div class="row">
        <div class="col-12">
          <div class="section-header text-center">
            <div class="section-badge" data-aos="fade-down">
              <i class="fas fa-quote-left"></i>
              <span>Client Reviews</span>
            </div>
            <h2 class="section-title" data-aos="fade-up">
              <span class="section-title-back">Testimonials</span>
              What Our Clients Say
            </h2>
            <p class="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Hear from our satisfied clients about their experience working with SKS DEVELOPERS (PVT) LTD
            </p>
          </div>
        </div>
      </div>

      <!-- Testimonials Slider -->
      <div class="row">
        <div class="col-12">
          <div class="testimonial-slider" data-aos="fade-up" data-aos-delay="300">
            <div class="testimonial-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div 
                v-for="(testimonial, index) in testimonials" 
                :key="index"
                class="testimonial-slide"
              >
                <div class="testimonial-card">
                  <div class="testimonial-content">
                    <div class="quote-icon">
                      <i class="fas fa-quote-left"></i>
                    </div>
                    <p class="testimonial-text">{{ testimonial.text }}</p>
                    <div class="testimonial-rating">
                      <i class="fas fa-star" v-for="i in 5" :key="i"></i>
                    </div>
                  </div>
                  <div class="testimonial-author">
                    <div class="author-image">
                      <img :src="testimonial.image" :alt="testimonial.name" />
                    </div>
                    <div class="author-info">
                      <h4 class="author-name">{{ testimonial.name }}</h4>
                      <p class="author-position">{{ testimonial.position }}</p>
                      <p class="author-company">{{ testimonial.company }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
            <!-- Slider Dots -->
            <div class="slider-dots">
              <button 
                v-for="(_testimonial, index) in testimonials" 
                :key="index"
                class="dot"
                :class="{ 'active': currentSlide === index }"
                @click="goToSlide(index)"
              ></button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Client Logos -->
      <div class="row mt-5">
        <div class="col-12">
          <div class="client-logos" data-aos="fade-up">
            <h4 class="logos-title">Trusted By Leading Companies</h4>
            <div class="logos-grid">
              <div class="logo-item" v-for="(logo, index) in clientLogos" :key="index">
                <div class="logo-placeholder">
                  <i :class="logo.icon"></i>
                  <span>{{ logo.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
let autoplayInterval: number | null = null

const testimonials = [
  {
    text: "SKS DEVELOPERS (PVT) LTD exceeded our expectations in every aspect. Their attention to detail, quality craftsmanship, and professional approach made our project a huge success. The team was always responsive and delivered on time.",
    name: "Sarah Johnson",
    position: "CEO",
    company: "Urban Development Corp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    text: "Working with SKS DEVELOPERS (PVT) LTD was a pleasure from start to finish. Their expertise in commercial construction and ability to handle complex projects made them the perfect partner for our office complex development.",
    name: "Michael Chen",
    position: "Project Manager",
    company: "Global Real Estate Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    text: "The renovation project was completed ahead of schedule and under budget. SKS DEVELOPERS (PVT) LTD' team showed exceptional skill in preserving the historical elements while modernizing the infrastructure. Highly recommended!",
    name: "Emily Rodriguez",
    position: "Director",
    company: "Heritage Foundation",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    text: "SKS DEVELOPERS (PVT) LTD delivered an outstanding residential project that perfectly matched our vision. Their innovative design solutions and quality construction have created a beautiful, functional space for our family.",
    name: "David Thompson",
    position: "Homeowner",
    company: "Private Residence",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    text: "The infrastructure project was completed with minimal disruption to our operations. SKS DEVELOPERS (PVT) LTD' expertise in large-scale projects and their commitment to safety and quality made them the ideal choice.",
    name: "Lisa Wang",
    position: "Operations Director",
    company: "City Infrastructure Authority",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  }
]

const clientLogos = [
  { name: "Urban Development Corp", icon: "fas fa-building" },
  { name: "Global Real Estate", icon: "fas fa-city" },
  { name: "Heritage Foundation", icon: "fas fa-landmark" },
  { name: "City Infrastructure", icon: "fas fa-road" },
  { name: "Commercial Properties", icon: "fas fa-store" },
  { name: "Residential Group", icon: "fas fa-home" },
  { name: "Industrial Solutions", icon: "fas fa-industry" }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length
}

const goToSlide = (index: number) => {
  currentSlide.value = index
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

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style lang="scss" scoped>
.testimonial-section {
  background: linear-gradient(135deg, var(--light-gray-1) 0%, var(--white) 100%);
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

.section-header {
  margin-bottom: 80px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--primary-color);
  color: var(--white);
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  
  i {
    font-size: 16px;
  }
}

.section-subtitle {
  font-size: 18px;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.testimonial-slider {
  position: relative;
  overflow: hidden;
  padding: 0 50px;
  
  @media (max-width: 768px) {
    padding: 0 30px;
  }
}

.testimonial-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.testimonial-slide {
  min-width: 100%;
  padding: 0 20px;
}

.testimonial-card {
  background: var(--white);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: var(--transition-default);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-10px);
    
    &::before {
      opacity: 0.05;
    }
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
}

.testimonial-content {
  margin-bottom: 30px;
}

.quote-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  i {
    color: var(--white);
    font-size: 24px;
  }
}

.testimonial-text {
  font-size: 18px;
  line-height: 1.6;
  color: var(--text-black);
  margin-bottom: 20px;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.testimonial-rating {
  display: flex;
  gap: 5px;
  
  i {
    color: var(--secondary-color);
    font-size: 18px;
  }
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
}

.author-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary-color);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-black);
  margin-bottom: 5px;
}

.author-position {
  font-size: 14px;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 5px;
}

.author-company {
  font-size: 14px;
  color: var(--text-gray);
  margin: 0;
}

.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  left: 0;
  pointer-events: none;
  z-index: 3;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  border: none;
  color: var(--white);
  border-radius: 50%;
  cursor: pointer;
  transition: var(--transition-default);
  pointer-events: auto;
  
  &:hover {
    background: var(--secondary-color);
    transform: translateY(-50%) scale(1.1);
  }
  
  &.prev-btn {
    left: -25px;
  }
  
  &.next-btn {
    right: -25px;
  }
  
  i {
    font-size: 16px;
  }
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(37, 99, 235, 0.3);
  border: none;
  cursor: pointer;
  transition: var(--transition-default);
  
  &:hover {
    background: var(--primary-color);
  }
  
  &.active {
    background: var(--primary-color);
    transform: scale(1.2);
  }
}

.client-logos {
  text-align: center;
  padding: 60px 0;
  
  .logos-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--text-black);
    margin-bottom: 40px;
  }
  
  .logos-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 992px) {
      gap: 25px;
    }
    
    @media (max-width: 768px) {
      gap: 20px;
    }
    
    @media (max-width: 480px) {
      gap: 15px;
    }
  }
  
  .logo-item {
    flex: 0 0 auto;
    width: 200px;
    
    @media (max-width: 768px) {
      width: 150px;
    }
    
    @media (max-width: 480px) {
      width: 100%;
      max-width: 250px;
    }
    
    .logo-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 20px;
      background: var(--white);
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: var(--transition-default);
      height: 120px;
      justify-content: center;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(37, 99, 235, 0.2);
      }
      
      i {
        font-size: 32px;
        color: var(--primary-color);
      }
      
      span {
        font-size: 14px;
        font-weight: 600;
        color: var(--text-black);
        text-align: center;
        line-height: 1.3;
      }
    }
  }
}
</style>
