<template>
  <section class="projects-section section-padding">
    <div class="container-fluid">
      <!-- Section Title -->
      <div class="row">
        <div class="col-12">
          <div class="section-header text-center">
            <div class="section-badge" data-aos="fade-down">
              <i class="fas fa-building"></i>
              <span>Our Portfolio</span>
            </div>
            <h2 class="section-title" data-aos="fade-up">
              <span class="section-title-back">Projects</span>
              Our Projects
            </h2>
            <p class="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Explore our portfolio of successful construction projects across various categories
            </p>
          </div>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="row">
        <div class="col-12">
          <div class="filter-tabs" data-aos="fade-up">
            <button 
              v-for="(category, index) in categories" 
              :key="index"
              class="filter-btn"
              :class="{ 'active': activeCategory === category.value }"
              @click="filterProjects(category.value)"
            >
              <i :class="category.icon"></i>
              <span>{{ category.label }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="row">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="index"
          class="col-lg-4 col-md-6 col-sm-12"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="project-card hover-lift">
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <div class="overlay-content">
                  <div class="overlay-icon">
                    <i class="fas fa-plus"></i>
                  </div>
                  <h4 class="overlay-title">{{ project.title }}</h4>
                  <p class="overlay-category">{{ project.category }}</p>
                  <div class="project-details">
                    <div class="detail-item">
                      <i class="fas fa-calendar"></i>
                      <span>{{ project.completionDate }}</span>
                    </div>
                    <div class="detail-item">
                      <i class="fas fa-map-marker-alt"></i>
                      <span>{{ project.location }}</span>
                    </div>
                  </div>
                  <div class="project-features">
                    <span v-for="feature in project.features" :key="feature" class="feature-tag">
                      {{ feature }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-caption">
              <div class="project-header">
                <h4 class="project-title">{{ project.title }}</h4>
                <div class="project-status" :class="project.status">
                  {{ project.status }}
                </div>
              </div>
              <p class="project-category">{{ project.category }}</p>
              <div class="project-meta">
                <div class="meta-item">
                  <i class="fas fa-clock"></i>
                  <span>{{ project.duration }}</span>
                </div>
                <div class="meta-item">
                  <i class="fas fa-dollar-sign"></i>
                  <span>{{ project.budget }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Projects Button -->
      <div class="row">
        <div class="col-12 text-center">
          <router-link to="/projects" class="btn btn-primary construction-btn" data-aos="fade-up">
            <i class="fas fa-th-large"></i>
            <span>View All Projects</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCategory = ref('all')

const categories = [
  { label: 'Show All', value: 'all', icon: 'fas fa-th-large' },
  { label: 'Commercial', value: 'commercial', icon: 'fas fa-building' },
  { label: 'Residential', value: 'residential', icon: 'fas fa-home' },
  { label: 'Infrastructure', value: 'infrastructure', icon: 'fas fa-road' },
  { label: 'Renovation', value: 'renovation', icon: 'fas fa-tools' }
]

const projects = [
  {
    title: 'Modern Office Complex',
    category: 'Commercial',
    value: 'commercial',
    image: '/src/assets/images/Construction-site-iStock-1267010934.jpg',
    completionDate: '2023',
    location: 'Colombo, Sri Lanka',
    duration: '18 months',
    budget: 'LKR 2.5B',
    status: 'completed',
    features: ['LEED Certified', 'Smart Building', 'Green Roof']
  },
  {
    title: 'Luxury Residential Tower',
    category: 'Residential',
    value: 'residential',
    image: '/src/assets/images/building-construction-site.jpg',
    completionDate: '2023',
    location: 'Kandy, Sri Lanka',
    duration: '24 months',
    budget: 'LKR 3.2B',
    status: 'completed',
    features: ['Penthouse Suites', 'Rooftop Pool', 'Concierge Service']
  },
  {
    title: 'Highway Bridge Construction',
    category: 'Infrastructure',
    value: 'infrastructure',
    image: '/src/assets/images/construction-brexit.jpg',
    completionDate: '2024',
    location: 'Galle, Sri Lanka',
    duration: '36 months',
    budget: 'LKR 5.8B',
    status: 'in-progress',
    features: ['Steel Structure', 'Seismic Design', 'Traffic Management']
  },
  {
    title: 'Shopping Mall Renovation',
    category: 'Renovation',
    value: 'renovation',
    image: '/src/assets/images/1656996478987.jpg',
    completionDate: '2023',
    location: 'Negombo, Sri Lanka',
    duration: '12 months',
    budget: 'LKR 1.2B',
    status: 'completed',
    features: ['Modern Design', 'Energy Efficient', 'New Stores']
  },
  {
    title: 'Corporate Headquarters',
    category: 'Commercial',
    value: 'commercial',
    image: '/src/assets/images/1661410178577.jpg',
    completionDate: '2024',
    location: 'Battaramulla, Sri Lanka',
    duration: '30 months',
    budget: 'LKR 4.5B',
    status: 'in-progress',
    features: ['Net Zero Energy', 'Biophilic Design', 'Advanced Security']
  },
  {
    title: 'Luxury Condominiums',
    category: 'Residential',
    value: 'residential',
    image: '/src/assets/images/1691443227485.jpeg',
    completionDate: '2023',
    location: 'Mount Lavinia, Sri Lanka',
    duration: '28 months',
    budget: 'LKR 5.2B',
    status: 'completed',
    features: ['Ocean Views', 'Private Balconies', 'Fitness Center']
  },
  {
    title: 'Subway Station Extension',
    category: 'Infrastructure',
    value: 'infrastructure',
    image: '/src/assets/images/Construction.jpg',
    completionDate: '2025',
    location: 'Colombo Metro, Sri Lanka',
    duration: '48 months',
    budget: 'LKR 7.8B',
    status: 'planning',
    features: ['Underground Construction', 'Accessibility', 'Modern Design']
  },
  {
    title: 'Historic Building Restoration',
    category: 'Renovation',
    value: 'renovation',
    image: '/src/assets/images/shutterstock_57862405-building-scaled.jpg',
    completionDate: '2023',
    location: 'Galle Fort, Sri Lanka',
    duration: '16 months',
    budget: 'LKR 1.8B',
    status: 'completed',
    features: ['Historical Preservation', 'Modern Amenities', 'Heritage Design']
  },
  {
    title: 'Mixed-Use Development',
    category: 'Commercial',
    value: 'commercial',
    image: '/src/assets/images/WorkersConstructionSite_1440x810.avif',
    completionDate: '2024',
    location: 'Rajagiriya, Sri Lanka',
    duration: '42 months',
    budget: 'LKR 9.5B',
    status: 'in-progress',
    features: ['Retail Space', 'Office Complex', 'Residential Units']
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects
  }
  return projects.filter(project => project.value === activeCategory.value)
})

const filterProjects = (category: string) => {
  activeCategory.value = category
}
</script>

<style lang="scss" scoped>
.projects-section {
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

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 60px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 40px;
  }
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 25px;
  background-color: var(--white);
  border: 2px solid transparent;
  color: var(--text-black);
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: var(--transition-default);
  border-radius: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  i {
    font-size: 16px;
  }
  
  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
  }
  
  &.active {
    background-color: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 12px;
    
    i {
      font-size: 14px;
    }
  }
}

.project-card {
  background-color: var(--white);
  margin-bottom: 30px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: var(--transition-slow);
  border-radius: 15px;
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(37, 99, 235, 0.2);
    
    .project-overlay {
      opacity: 1;
      visibility: visible;
    }
    
    .project-image img {
      transform: scale(1.1);
    }
  }
}

.project-image {
  position: relative;
  height: 300px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-slow);
  }
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(2, 26, 71, 0.95) 0%, rgba(37, 99, 235, 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-default);
  padding: 30px;
}

.overlay-content {
  text-align: center;
  color: var(--white);
  width: 100%;
}

.overlay-icon {
  width: 60px;
  height: 60px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  transition: var(--transition-default);
  
  i {
    font-size: 20px;
    color: var(--white);
  }

}

.overlay-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.3;
}

.overlay-category {
  font-size: 14px;
  color: var(--primary-color);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.project-details {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  
  .detail-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    
    i {
      color: var(--primary-color);
      font-size: 10px;
    }
  }
}

.project-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  
  .feature-tag {
    background: rgba(255, 255, 255, 0.9);
    color: var(--text-black);
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 11px;
    font-weight: 600;
  }
}

.project-caption {
  padding: 25px;
  background-color: var(--white);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}

.project-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-black);
  line-height: 1.3;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
}

.project-status {
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  
  &.completed {
    background: rgba(132, 204, 22, 0.1);
    color: var(--secondary-color);
  }
  
  &.in-progress {
    background: rgba(30, 64, 175, 0.1);
    color: var(--primary-color);
  }
  
  &.planning {
    background: rgba(107, 114, 128, 0.1);
    color: var(--text-gray);
  }
}

.project-category {
  font-size: 14px;
  color: var(--primary-color);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
}

.project-meta {
  display: flex;
  gap: 20px;
  
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
  margin-top: 50px;
  
  &:hover {
    background: var(--secondary-color);
    transform: scale(1.05);
    color: var(--white);
  }
  
  i {
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    margin-top: 30px;
  }
}
</style>

