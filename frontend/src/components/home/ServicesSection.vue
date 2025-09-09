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
              We provide comprehensive construction services with advanced engineering techniques and innovative solutions
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
          :data-aos-delay="index * 100"
        >
          <div class="service-card hover-lift">
            <div class="service-image">
              <img :src="service.image" :alt="service.title" class="hover-scale" />
              <div class="service-overlay">
                <div class="service-icon">
                  <i :class="service.icon"></i>
                </div>
                <div class="service-features">
                  <span v-for="feature in service.features" :key="feature" class="feature-tag">
                    {{ feature }}
                  </span>
                </div>
              </div>
            </div>
            <div class="service-content">
              <div class="service-header">
                <h3 class="service-title">{{ service.title }}</h3>
                <div class="service-rating">
                  <i class="fas fa-star" v-for="i in 5" :key="i"></i>
                </div>
              </div>
              <p class="service-description">{{ service.description }}</p>
              <div class="service-meta">
                <div class="meta-item">
                  <i class="fas fa-clock"></i>
                  <span>{{ service.duration }}</span>
                </div>
                <div class="meta-item">
                  <i class="fas fa-users"></i>
                  <span>{{ service.team }}</span>
                </div>
              </div>
              <router-link :to="service.link" class="service-link">
                <span>Learn More</span>
                <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="row mt-5 justify-content-center">
        <div class="col-12">
          <div class="services-cta text-center" data-aos="fade-up">
            <h3>Need a Custom Solution?</h3>
            <p>Let us create a tailored construction plan for your specific needs</p>
            <div class="d-flex justify-content-center">
              <router-link to="/contact" class="btn btn-primary construction-btn">
                <i class="fas fa-phone"></i>
                Get Free Consultation
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Engineering Techniques & Implementation',
    description: 'Advanced engineering solutions with cutting-edge technology and innovative approaches to construction challenges.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: 'fas fa-cogs',
    link: '/services/engineering',
    duration: '3-6 months',
    team: '5-10 experts',
    features: ['Structural Analysis', '3D Modeling', 'Quality Control']
  },
  {
    title: 'Architectural Design & Planning',
    description: 'Comprehensive architectural services from concept to completion, ensuring functional and aesthetic excellence.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: 'fas fa-drafting-compass',
    link: '/services/architecture',
    duration: '2-4 months',
    team: '3-5 designers',
    features: ['Concept Design', 'Blueprints', '3D Visualization']
  },
  {
    title: 'Construction Management',
    description: 'Professional project management ensuring timely delivery, quality control, and cost-effective solutions.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: 'fas fa-hard-hat',
    link: '/services/management',
    duration: '6-12 months',
    team: '10-20 workers',
    features: ['Project Planning', 'Timeline Management', 'Budget Control']
  },
  {
    title: 'Interior & Exterior Finishing',
    description: 'Premium finishing services that transform spaces with attention to detail and quality craftsmanship.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: 'fas fa-paint-roller',
    link: '/services/finishing',
    duration: '1-3 months',
    team: '3-8 craftsmen',
    features: ['Custom Finishes', 'Quality Materials', 'Attention to Detail']
  },
  {
    title: 'Renovation & Restoration',
    description: 'Expert renovation and restoration services preserving historical value while modernizing functionality.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: 'fas fa-tools',
    link: '/services/renovation',
    duration: '2-6 months',
    team: '5-15 specialists',
    features: ['Historical Preservation', 'Modern Upgrades', 'Structural Repair']
  },
  {
    title: 'Infrastructure Development',
    description: 'Large-scale infrastructure projects including roads, bridges, and public facilities with sustainable practices.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: 'fas fa-road',
    link: '/services/infrastructure',
    duration: '12-24 months',
    team: '20-50 engineers',
    features: ['Large Scale Projects', 'Sustainable Design', 'Public Safety']
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
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(255, 95, 19, 0.2);
    
    &::before {
      opacity: 0.05;
    }
    
    .service-icon {
      background: var(--primary-color);
      color: var(--white);
      transform: scale(1.1) rotate(360deg);
    }
    
    .service-link {
      color: var(--primary-color);
      
      i {
        transform: translateX(8px);
      }
    }
    
    .service-features {
      opacity: 1;
      transform: translateY(0);
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
  background: linear-gradient(135deg, rgba(2, 26, 71, 0.8) 0%, rgba(255, 95, 19, 0.3) 100%);
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
  
  i {
    font-size: 24px;
    color: var(--primary-color);
    transition: var(--transition-default);
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
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.service-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-black);
  line-height: 1.3;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
}

.service-rating {
  display: flex;
  gap: 2px;
  
  i {
    color: var(--secondary-color);
    font-size: 14px;
  }
}

.service-description {
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
}

.service-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  .meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: var(--text-gray);
    
    i {
      color: var(--primary-color);
      font-size: 12px;
    }
  }
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-black);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition-default);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  i {
    font-size: 12px;
    transition: var(--transition-default);
  }
  
  &:hover {
    text-decoration: none;
  }
}

.services-cta {
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
</style>
