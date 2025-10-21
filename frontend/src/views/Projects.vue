<template>
  <div class="projects-page">
    <Header />
    
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="hero-title">Our Projects</h1>
            <p class="hero-subtitle">Explore our portfolio of successful projects across different categories</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="filter-buttons">
              <button 
                v-for="category in categories" 
                :key="category.value"
                @click="setActiveCategory(category.value)"
                :class="['filter-btn', { 
                  active: activeCategory === category.value,
                  loading: isFiltering && activeCategory === category.value
                }]"
                :disabled="isFiltering"
              >
                <span v-if="isFiltering && activeCategory === category.value" class="loading-spinner"></span>
                {{ category.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Gallery -->
    <section class="projects-gallery">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div :class="['projects-container', { filtering: isFiltering }]">
              <transition-group name="project-fade" tag="div" class="projects-grid">
              <div 
                v-for="project in filteredProjects" 
                :key="project.id"
                class="project-item"
                @click="openModal(project)"
              >
                <div class="project-image">
                  <img :src="project.image" :alt="project.title" />
                  <div class="project-overlay">
                    <div class="project-info">
                      <h3>{{ project.title }}</h3>
                      <p>{{ project.category }}</p>
                      <span class="view-icon">
                        <i class="fas fa-eye"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
        <div class="modal-image">
          <img :src="selectedProject.image" :alt="selectedProject.title" />
        </div>
        <div class="modal-info">
          <h3>{{ selectedProject.title }}</h3>
          <p class="category">{{ selectedProject.category }}</p>
          <p class="description">{{ selectedProject.description }}</p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const activeCategory = ref('all')
const selectedProject = ref<Project | null>(null)
const isFiltering = ref(false)

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'design', label: 'Design' },
  { value: 'construction', label: 'Construction' },
  { value: 'projectManagement', label: 'Project Management' }
]

const projects = ref<Project[]>([
  // Design Projects
  {
    id: 1,
    title: 'Modern Office Design',
    category: 'Design',
    image: '/projects/design/prj%20(10).jpg',
    description: 'A contemporary office space designed with modern aesthetics and functional layout for enhanced productivity.'
  },
  {
    id: 2,
    title: 'Residential Interior Design',
    category: 'Design',
    image: '/projects/design/prj%20(6).jpg',
    description: 'Elegant residential interior design featuring premium materials and sophisticated color schemes.'
  },
  {
    id: 3,
    title: 'Commercial Space Planning',
    category: 'Design',
    image: '/projects/design/prj%20(9).jpg',
    description: 'Strategic commercial space planning that maximizes functionality while maintaining aesthetic appeal.'
  },
  
  // Construction Projects
  {
    id: 4,
    title: 'Residential Building Construction',
    category: 'Construction',
    image: '/projects/construction/prj%20(2).jpg',
    description: 'High-quality residential building construction with attention to detail and structural integrity.'
  },
  {
    id: 5,
    title: 'Commercial Construction',
    category: 'Construction',
    image: '/projects/construction/prj%20(7).jpg',
    description: 'Large-scale commercial construction project completed on time and within budget.'
  },
  
  // Project Management
  {
    id: 6,
    title: 'Infrastructure Development',
    category: 'Project Management',
    image: '/projects/projectManagement/prj (3).jpg',
    description: 'Comprehensive infrastructure development project managed from conception to completion.'
  },
  {
    id: 7,
    title: 'Renovation Project',
    category: 'Project Management',
    image: '/projects/projectManagement/prj (5).jpg',
    description: 'Complete renovation project with meticulous planning and execution.'
  },
  {
    id: 8,
    title: 'Facility Management',
    category: 'Project Management',
    image: '/projects/projectManagement/prj (8).jpg',
    description: 'Ongoing facility management ensuring optimal performance and maintenance.'
  }
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.value
  }
  
  // Map category values to actual category names
  const categoryMap: { [key: string]: string } = {
    'design': 'Design',
    'construction': 'Construction',
    'projectManagement': 'Project Management'
  }
  
  const targetCategory = categoryMap[activeCategory.value] || activeCategory.value
  
  return projects.value.filter(project => 
    project.category === targetCategory
  )
})

const setActiveCategory = (category: string) => {
  if (activeCategory.value === category) return
  
  isFiltering.value = true
  
  // Add a small delay to ensure smooth transition
  setTimeout(() => {
    activeCategory.value = category
    setTimeout(() => {
      isFiltering.value = false
    }, 300)
  }, 100)
}

const openModal = (project: Project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

onMounted(() => {
  // Add keyboard event listener for ESC key
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && selectedProject.value) {
      closeModal()
    }
  }
  document.addEventListener('keydown', handleKeydown)
  
  // Cleanup on unmount
  return () => {
    document.removeEventListener('keydown', handleKeydown)
  }
})
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  background-color: #f8f9fa;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 160px 0 80px;
  text-align: center;
  margin-top: 0;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Filter Section */
.filter-section {
  padding: 60px 0 40px;
  background: white;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 12px 30px;
  border: 2px solid #667eea;
  background: transparent;
  color: #667eea;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.filter-btn:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.filter-btn.active {
  background: #667eea;
  color: white;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.filter-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.filter-btn.loading {
  position: relative;
}

.loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 8px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Projects Gallery */
.projects-gallery {
  padding: 40px 0 80px;
}

.projects-container {
  transition: opacity 0.3s ease;
}

.projects-container.filtering {
  opacity: 0.7;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Transition animations for project filtering */
.project-fade-enter-active,
.project-fade-leave-active {
  transition: all 0.5s ease;
}

.project-fade-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.project-fade-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.9);
}

.project-fade-move {
  transition: transform 0.5s ease;
}

.project-item {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-item:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-item:hover .project-overlay {
  opacity: 1;
}

.project-info {
  text-align: center;
  color: white;
}

.project-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.project-info p {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.view-icon {
  font-size: 2rem;
  opacity: 0.8;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 15px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: background 0.3s ease;
}

.close-btn:hover {
  background: rgba(0,0,0,0.8);
}

.modal-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
}

.modal-image img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

.modal-info {
  padding: 30px;
  background: white;
}

.modal-info h3 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.modal-info .category {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.modal-info .description {
  color: #666;
  line-height: 1.6;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 150px 0 70px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .filter-buttons {
    gap: 10px;
  }
  
  .filter-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .modal-content {
    max-width: 95vw;
    max-height: 95vh;
  }
  
  .modal-info {
    padding: 20px;
  }
  
  .modal-info h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 140px 0 60px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .filter-section {
    padding: 40px 0 30px;
  }
  
  .projects-gallery {
    padding: 30px 0 60px;
  }
}
</style>
