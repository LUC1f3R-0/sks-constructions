<template>
  <section class="services-section section-padding">
    <div class="container-fluid">
      <!-- Section Title -->
      <div class="row">
        <div class="col-12">
          <div class="section-header text-center">
            <div class="section-badge" data-aos="fade-down">
              <i class="fas fa-tools"></i>
              <span>What We Do</span>
            </div>
            <h2 class="section-title" data-aos="fade-up">
              <span class="section-title-back">Services</span>
              Our Services
            </h2>
            <p class="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              We specialize in complete service packages, from research, design, and development.
            </p>
          </div>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="row justify-content-center">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="col-lg-4 col-md-6 col-sm-12 col-12"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        >
          <div class="service-card hover-lift">
            <div class="service-image">
              <img :src="service.image" :alt="service.title" class="hover-scale" />
              <div class="service-overlay">
                <div class="service-icon">
                  <i :class="service.icon"></i>
                </div>
              </div>
            </div>
            <div class="service-content">
              <div class="service-header">
                <h3 class="service-title">{{ service.title }}</h3>
              </div>
              <p class="service-description">{{ service.description }}</p>
              <div class="service-cta">
                <router-link to="/contact" class="btn btn-primary construction-btn">
                  <i class="fas fa-phone"></i>
                  Contact Us
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Import images properly
import image01 from '@/assets/images/01.png'
import image02 from '@/assets/images/02.jpg'
import image03 from '@/assets/images/03.png'

const services = [
  {
    title: 'DESIGN',
    description: 'Our award-winning team of architects tackle each project with passionate and creativity.',
    image: image01,
    icon: 'fas fa-drafting-compass'
  },
  {
    title: 'CONSTRUCTION',
    description: 'Our contractors and construction team deliver results with precision and accuracy.',
    image: image02,
    icon: 'fas fa-hard-hat'
  },
  {
    title: 'PROJECT MANAGEMENT',
    description: 'Trust our project managers to work with you 1-on-1, each step of the way.',
    image: image03,
    icon: 'fas fa-tasks'
  }
]
</script>

<style lang="scss" scoped>
.services-section {
  background: linear-gradient(135deg, var(--white) 0%, var(--light-gray-2) 100%);
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

.service-card {
  background-color: var(--white);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  transition: var(--transition-slow);
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  
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
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 25px 70px rgba(37, 99, 235, 0.25);
    
    &::before {
      opacity: 0.08;
    }
    
    .service-icon {
      background: var(--white);
      color: var(--primary-color);
      transform: scale(1.2) rotate(360deg);
      box-shadow: 0 10px 30px rgba(37, 99, 235, 0.4);
      
      i {
        color: var(--primary-color);
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
      }
    }
    
    .service-title {
      color: var(--primary-color);
      transform: scale(1.05);
    }
    
    .service-description {
      color: var(--text-black);
    }
  }
}

.service-image {
  position: relative;
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-slow);
  }
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(2, 26, 71, 0.8) 0%, rgba(37, 99, 235, 0.3) 100%);
  opacity: 0;
  transition: var(--transition-default);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

.service-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-slow);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(37, 99, 235, 0.1);
  
  i {
    font-size: 24px;
    color: var(--primary-color);
    transition: var(--transition-default);
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  }
}

.service-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  opacity: 0;
  transform: translateY(20px);
  transition: var(--transition-default);
  
  .feature-tag {
    background: rgba(255, 255, 255, 0.9);
    color: var(--text-black);
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
  }
}

.service-content {
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.service-header {
  margin-bottom: 20px;
}

.service-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-black);
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
}

.service-description {
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 30px;
  flex: 1;
  font-size: 16px;
  transition: all 0.3s ease;
}

.service-cta {
  margin-top: auto;
  
  .construction-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--primary-color);
    color: var(--white);
    padding: 12px 25px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    border: 2px solid var(--primary-color);
    
    &:hover {
      background: transparent;
      color: var(--primary-color);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
    }
    
    i {
      font-size: 14px;
    }
  }
}

</style>
