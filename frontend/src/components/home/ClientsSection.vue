<template>
  <section class="clients-section section-padding">
    <div class="container-fluid">
      <!-- Section Header -->
      <div class="row">
        <div class="col-12">
          <div class="section-header text-center">
            <div class="section-badge" data-aos="fade-down">
              <i class="fas fa-handshake"></i>
              <span>Our Partners</span>
            </div>
            <h2 class="section-title" data-aos="fade-up">
              <span class="section-title-back">Clients</span>
              Trusted by Leading Companies
            </h2>
            <p class="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              We're proud to work with industry leaders and innovative companies who trust us with their construction needs
            </p>
          </div>
        </div>
      </div>

      <!-- Clients Grid -->
      <div class="row justify-content-center">
        <div 
          v-for="(client, index) in clients" 
          :key="index"
          class="col-lg-4 col-md-6 col-sm-6 col-6"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="client-card hover-lift">
            <div class="client-logo-wrapper">
              <img 
                :src="client.logo" 
                :alt="client.name" 
                class="client-logo hover-scale"
                @error="handleImageError"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="row mt-5">
        <div class="col-12">
          <div class="trust-indicators" data-aos="fade-up">
            <div class="trust-item">
              <div class="trust-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="trust-content">
                <h5>100% Satisfaction</h5>
                <p>All our clients are completely satisfied with our work</p>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="trust-content">
                <h5>On-Time Delivery</h5>
                <p>We complete projects within the agreed timeframe</p>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-icon">
                <i class="fas fa-award"></i>
              </div>
              <div class="trust-content">
                <h5>Quality Assured</h5>
                <p>ISO certified quality management system</p>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <div class="trust-content">
                <h5>Long-term Partnership</h5>
                <p>Building lasting relationships with our clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="row mt-5 justify-content-center">
        <div class="col-12">
          <div class="clients-cta text-center" data-aos="fade-up">
            <h3>Ready to Join Our Success Stories?</h3>
            <p>Let us help you build your next project with the same quality and dedication</p>
            <div class="d-flex justify-content-center">
              <router-link to="/contact" class="btn btn-primary construction-btn">
                <i class="fas fa-rocket"></i>
                Start Your Project
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Client data with the images from the clients folder
const clients = ref([
  {
    name: 'TechCorp Solutions',
    industry: 'Technology',
    logo: '/clients/1-1.png',
    years: '5',
    projects: '12'
  },
  {
    name: 'Global Industries',
    industry: 'Manufacturing',
    logo: '/clients/4-1.png',
    years: '8',
    projects: '25'
  },
  {
    name: 'Prime Enterprises',
    industry: 'Real Estate',
    logo: '/clients/5.png',
    years: '3',
    projects: '8'
  },
  {
    name: 'Innovation Hub',
    industry: 'Research & Development',
    logo: '/clients/6.jpg',
    years: '6',
    projects: '15'
  },
  {
    name: 'Future Builders',
    industry: 'Construction',
    logo: '/clients/download (1).png',
    years: '4',
    projects: '10'
  },
  {
    name: 'Elite Partners',
    industry: 'Consulting',
    logo: '/clients/download.png',
    years: '7',
    projects: '18'
  }
])

// Handle image loading errors
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04NSA0MEgxMTVWNTBIODVWNDBaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik04NSA1NUgxMTVWNjVIODVWNTVaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik04NSA3MEgxMTVWODBIODVWNzBaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iOTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2xpZW50IExvZ288L3RleHQ+Cjwvc3ZnPgo='
}
</script>

<style lang="scss" scoped>
.clients-section {
  background: linear-gradient(135deg, var(--white) 0%, var(--light-gray-2) 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%232563eb" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
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
  background: var(--secondary-color);
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

.section-title {
  font-family: var(--font-secondary);
  font-size: 60px;
  font-weight: 700;
  color: var(--text-black);
  margin-bottom: 20px;
  line-height: 1.1;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
  
  @media (max-width: 576px) {
    font-size: 32px;
  }
}

.section-title-back {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 120px;
  font-weight: 900;
  color: rgba(37, 99, 235, 0.05);
  z-index: -1;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 80px;
  }
  
  @media (max-width: 576px) {
    font-size: 60px;
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

.client-card {
  background-color: var(--white);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
  transition: var(--transition-slow);
  position: relative;
  z-index: 2;
  height: 180px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(37, 99, 235, 0.15);
  }
}

.client-logo-wrapper {
  position: relative;
  height: 180px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding: 20px;
}

.client-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: var(--transition-slow);
  
  &:hover {
    transform: scale(1.05);
  }
}


.trust-indicators {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 40px;
  }
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--white);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: var(--transition-default);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(37, 99, 235, 0.1);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 25px;
  }
}

.trust-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  i {
    color: var(--white);
    font-size: 24px;
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    
    i {
      font-size: 20px;
    }
  }
}

.trust-content {
  h5 {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-black);
    margin-bottom: 8px;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  
  p {
    font-size: 14px;
    color: var(--text-gray);
    margin: 0;
    line-height: 1.5;
    
    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
}

.clients-cta {
  background: linear-gradient(135deg, var(--dark-blue-1) 0%, var(--dark-blue-2) 100%);
  color: var(--white);
  padding: 60px 40px;
  border-radius: 20px;
  margin-top: 60px;
  
  h3 {
    font-size: 36px;
    margin-bottom: 15px;
    
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  
  p {
    font-size: 18px;
    margin-bottom: 30px;
    opacity: 0.9;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  
  .construction-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--primary-color);
    color: var(--white);
    padding: 15px 30px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition-default);
    
    &:hover {
      background: var(--secondary-color);
      transform: scale(1.05);
      color: var(--white);
    }
    
    i {
      font-size: 16px;
    }
  }
}

// Animation keyframes
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hover-lift {
  &:hover {
    animation: float 2s ease-in-out infinite;
  }
}

.hover-scale {
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
}
</style>
