<template>
  <div class="project-updates-page">
    <Header />

    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="page-title" data-aos="fade-up">Project Updates</h1>
            <p class="page-subtitle" data-aos="fade-up" data-aos-delay="100">
              Stay updated with our ongoing construction projects and progress
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="filter-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="filter-tabs" data-aos="fade-up">
              <button v-for="(status, index) in projectStatuses" :key="index" class="filter-btn"
                :class="{ 'active': activeStatus === status.value }" @click="filterProjects(status.value)">
                <i :class="status.icon"></i>
                <span>{{ status.label }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Updates -->
    <section class="updates-section section-padding">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center" data-aos="fade-up">
              <h2 class="section-title">Latest Project Updates</h2>
              <p class="section-subtitle">
                Real-time updates on our construction projects across Sri Lanka
              </p>
            </div>
          </div>
        </div>

        <!-- Project Updates Grid -->
        <div class="row">
          <div v-for="(update, index) in filteredUpdates" :key="index" class="col-lg-4 col-md-6 col-sm-12"
            data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="update-card">
              <div class="update-image">
                <img :src="update.image" :alt="update.title" />
                <div class="update-status" :class="update.status">
                  {{ update.status }}
                </div>
                <div class="update-overlay">
                  <div class="overlay-content">
                    <div class="overlay-icon">
                      <i class="fas fa-camera"></i>
                    </div>
                    <span class="overlay-text">View Gallery</span>
                  </div>
                </div>
              </div>
              <div class="update-content">
                <div class="update-header">
                  <h3 class="update-title">{{ update.title }}</h3>
                  <div class="update-date">
                    <i class="fas fa-calendar"></i>
                    <span>{{ update.date }}</span>
                  </div>
                </div>
                <p class="update-description">{{ update.description }}</p>
                <div class="update-meta">
                  <div class="meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>{{ update.location }}</span>
                  </div>
                  <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>{{ update.duration }}</span>
                  </div>
                </div>
                <div class="progress-section">
                  <div class="progress-header">
                    <span class="progress-label">Progress</span>
                    <span class="progress-percentage">{{ update.progress }}%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: update.progress + '%' }"></div>
                  </div>
                </div>
                <div class="update-actions">
                  <button class="btn btn-primary" @click="viewProjectDetails(update)">
                    <i class="fas fa-eye"></i>
                    View Details
                  </button>
                  <button class="btn btn-outline" @click="shareUpdate(update)">
                    <i class="fas fa-share"></i>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="row">
          <div class="col-12 text-center">
            <button class="btn btn-primary load-more-btn" data-aos="fade-up" @click="loadMoreUpdates">
              <i class="fas fa-plus"></i>
              Load More Updates
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Timeline -->
    <section class="timeline-section section-padding bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center" data-aos="fade-up">
              <h2 class="section-title">Project Timeline</h2>
              <p class="section-subtitle">
                Track the progress of our major ongoing projects
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="timeline" data-aos="fade-up" data-aos-delay="200">
              <div v-for="(milestone, index) in projectMilestones" :key="index" class="timeline-item"
                :class="{ 'completed': milestone.completed, 'current': milestone.current }" data-aos="fade-up"
                :data-aos-delay="300 + (index * 100)">
                <div class="timeline-marker">
                  <div class="marker-icon">
                    <i :class="milestone.icon"></i>
                  </div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-date">{{ milestone.date }}</div>
                  <h4 class="timeline-title">{{ milestone.title }}</h4>
                  <p class="timeline-description">{{ milestone.description }}</p>
                  <div class="timeline-project">
                    <i class="fas fa-building"></i>
                    <span>{{ milestone.project }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

const activeStatus = ref('all')
const email = ref('')

const projectStatuses = [
  { label: 'All Projects', value: 'all', icon: 'fas fa-th-large' },
  { label: 'In Progress', value: 'in-progress', icon: 'fas fa-hammer' },
  { label: 'Planning', value: 'planning', icon: 'fas fa-drafting-compass' },
  { label: 'Completed', value: 'completed', icon: 'fas fa-check-circle' }
]

const projectUpdates = ref([
  {
    id: 1,
    title: 'Modern Office Complex - Phase 2',
    description: 'Foundation work completed and structural framework installation in progress. The project is on track for completion by Q2 2024.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'in-progress',
    date: '2024-01-15',
    location: 'Colombo 7',
    duration: '18 months',
    progress: 65
  },
  {
    id: 2,
    title: 'Luxury Residential Tower',
    description: 'Interior finishing work has begun on the upper floors while the ground floor retail spaces are being prepared for tenant fit-outs.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'in-progress',
    date: '2024-01-12',
    location: 'Kandy',
    duration: '24 months',
    progress: 80
  },
  {
    id: 3,
    title: 'Industrial Manufacturing Plant',
    description: 'Site preparation and utility connections completed. Main construction work is scheduled to begin next month.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'planning',
    date: '2024-01-10',
    location: 'Gampaha',
    duration: '30 months',
    progress: 25
  },
  {
    id: 4,
    title: 'Shopping Mall Renovation',
    description: 'The renovation project has been completed successfully. The mall is now open to the public with modern amenities and improved facilities.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'completed',
    date: '2024-01-08',
    location: 'Kurunegala',
    duration: '12 months',
    progress: 100
  },
  {
    id: 5,
    title: 'Mixed-Use Development',
    description: 'Excavation work completed and foundation pouring in progress. The project includes retail, office, and residential components.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'in-progress',
    date: '2024-01-05',
    location: 'Anuradhapura',
    duration: '42 months',
    progress: 35
  },
  {
    id: 6,
    title: 'Historic Building Restoration',
    description: 'Planning phase completed with all necessary approvals obtained. Construction work is scheduled to begin in March 2024.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'planning',
    date: '2024-01-03',
    location: 'Galle',
    duration: '16 months',
    progress: 15
  }
])

const projectMilestones = [
  {
    date: 'Q1 2024',
    title: 'Foundation Completion',
    description: 'All major projects have completed foundation work and are ready for structural construction.',
    project: 'Multiple Projects',
    icon: 'fas fa-hammer',
    completed: true,
    current: false
  },
  {
    date: 'Q2 2024',
    title: 'Structural Framework',
    description: 'Structural framework installation and concrete work for ongoing projects.',
    project: 'Office Complex, Residential Tower',
    icon: 'fas fa-building',
    completed: false,
    current: true
  },
  {
    date: 'Q3 2024',
    title: 'Interior Finishing',
    description: 'Interior finishing work and MEP installations for near-completion projects.',
    project: 'Residential Tower, Mixed-Use Development',
    icon: 'fas fa-paint-brush',
    completed: false,
    current: false
  },
  {
    date: 'Q4 2024',
    title: 'Project Handover',
    description: 'Final inspections and handover of completed projects to clients.',
    project: 'Office Complex, Residential Tower',
    icon: 'fas fa-handshake',
    completed: false,
    current: false
  }
]

const filteredUpdates = computed(() => {
  if (activeStatus.value === 'all') {
    return projectUpdates.value
  }
  return projectUpdates.value.filter(update => update.status === activeStatus.value)
})

const filterProjects = (status: string) => {
  activeStatus.value = status
}

const viewProjectDetails = (update: any) => {
  // Implement project details modal or navigation
  console.log('Viewing details for:', update.title)
}

const shareUpdate = (update: any) => {
  // Implement sharing functionality
  console.log('Sharing update:', update.title)
}

const loadMoreUpdates = () => {
  // Implement load more functionality
  console.log('Loading more updates...')
}

const subscribeNewsletter = () => {
  // Implement newsletter subscription
  console.log('Newsletter subscription:', email.value)
  email.value = ''
}

onMounted(() => {
  // Initialize AOS (Animate On Scroll)
  if (typeof window !== 'undefined' && (window as any).AOS) {
    (window as any).AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    })
  }
})
</script>

<style lang="scss" scoped>
.project-updates-page {
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 180px 0 80px;
  color: white;
  text-align: center;
  margin-top: 0;
}

.page-title {
  font-family: 'Teko', sans-serif !important;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  letter-spacing: 3px !important;
  text-transform: uppercase !important;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 0;
}

.filter-section {
  background: var(--white);
  padding: 40px 0;
  border-bottom: 1px solid var(--light-gray-1);
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 25px;
  background-color: var(--white);
  border: 2px solid var(--light-gray-1);
  color: var(--text-gray);
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: var(--transition-default);
  border-radius: 25px;

  i {
    font-size: 16px;
  }

  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }

  &.active {
    background-color: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }
}

.updates-section {
  background: var(--white);
}

.section-header {
  margin-bottom: 80px;
}

.section-title {
  font-family: var(--font-secondary);
  font-size: 60px;
  font-weight: 700;
  color: var(--text-black);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
}

.section-subtitle {
  font-size: 18px;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.update-card {
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: var(--transition-default);
  margin-bottom: 30px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  }
}

.update-image {
  position: relative;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-slow);
  }

  .update-status {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;

    &.in-progress {
      background: rgba(30, 64, 175, 0.9);
      color: var(--white);
    }

    &.planning {
      background: rgba(107, 114, 128, 0.9);
      color: var(--white);
    }

    &.completed {
      background: rgba(132, 204, 22, 0.9);
      color: var(--white);
    }
  }

  .update-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.8), rgba(132, 204, 22, 0.8));
    opacity: 0;
    transition: var(--transition-default);
    display: flex;
    align-items: center;
    justify-content: center;

    .overlay-content {
      text-align: center;
      color: var(--white);

      .overlay-icon {
        width: 50px;
        height: 50px;
        background: var(--white);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 10px;

        i {
          font-size: 20px;
          color: var(--primary-color);
        }
      }

      .overlay-text {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  &:hover {
    .update-overlay {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
    }
  }
}

.update-content {
  padding: 30px;
}

.update-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;

  .update-title {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-black);
    line-height: 1.3;
    flex: 1;
    margin-right: 15px;
  }

  .update-date {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    color: var(--text-gray);
    white-space: nowrap;

    i {
      font-size: 10px;
    }
  }
}

.update-description {
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 20px;
}

.update-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  .meta-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: var(--text-gray);

    i {
      color: var(--primary-color);
      font-size: 12px;
    }
  }
}

.progress-section {
  margin-bottom: 25px;

  .progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    .progress-label {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-black);
    }

    .progress-percentage {
      font-size: 14px;
      font-weight: 700;
      color: var(--primary-color);
    }
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: var(--light-gray-1);
    border-radius: 4px;
    overflow: hidden;

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      border-radius: 4px;
      transition: width 0.3s ease;
    }
  }
}

.update-actions {
  display: flex;
  gap: 10px;

  .btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition-default);
    border: none;
    cursor: pointer;

    i {
      font-size: 12px;
    }
  }

  .btn-primary {
    background: var(--primary-color);
    color: var(--white);

    &:hover {
      background: var(--dark-blue-1);
      transform: translateY(-2px);
    }
  }

  .btn-outline {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);

    &:hover {
      background: var(--primary-color);
      color: var(--white);
      transform: translateY(-2px);
    }
  }
}

.load-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 30px;
  font-weight: 600;
  transition: var(--transition-default);
  margin-top: 50px;

  &:hover {
    background: var(--dark-blue-1);
    transform: translateY(-2px);
  }

  i {
    font-size: 16px;
  }
}

.timeline-section {
  background: var(--light-gray-1);
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 30px;
    }
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 60px;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    flex-direction: row;

    .timeline-content {
      margin-left: 60px;
      text-align: left;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;

      .timeline-content {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    .timeline-content {
      margin-right: 60px;
      text-align: right;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;

      .timeline-content {
        margin-right: 0;
        margin-top: 20px;
        text-align: left;
      }
    }
  }

  &.completed .timeline-marker {
    background: var(--secondary-color);
  }

  &.current .timeline-marker {
    background: var(--primary-color);
    animation: pulse 2s infinite;
  }
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  @media (max-width: 768px) {
    left: 30px;
  }

  .marker-icon {
    width: 60px;
    height: 60px;
    background: var(--text-gray);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    i {
      color: var(--white);
      font-size: 24px;
    }
  }
}

.timeline-content {
  background: var(--white);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 300px;

  .timeline-date {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  .timeline-title {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-black);
    margin-bottom: 15px;
  }

  .timeline-description {
    font-size: 15px;
    color: var(--text-gray);
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .timeline-project {
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

.newsletter-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--dark-blue-1) 100%);
  color: var(--white);
}

.newsletter-content {
  h2 {
    font-family: var(--font-secondary);
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 35px;
    }
  }

  p {
    font-size: 18px;
    margin-bottom: 40px;
    opacity: 0.9;
  }
}

.newsletter-form {
  max-width: 500px;
  margin: 0 auto;

  .form-group {
    position: relative;
    display: flex;
    gap: 0;

    .form-control {
      flex: 1;
      padding: 15px 20px;
      background: rgba(255, 255, 255, 0.15);
      border: 2px solid rgba(255, 255, 255, 0.3);
      color: var(--white);
      border-radius: 25px 0 0 25px;
      backdrop-filter: blur(10px);
      font-weight: 500;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

      &:focus {
        outline: none;
        border-color: var(--secondary-color);
        background: rgba(255, 255, 255, 0.2);
      }
    }

    .btn {
      padding: 15px 25px;
      background: var(--secondary-color);
      color: var(--white);
      border: none;
      border-radius: 0 25px 25px 0;
      font-weight: 600;
      transition: var(--transition-default);
      display: flex;
      align-items: center;
      gap: 8px;

      &:hover {
        background: var(--accent-green);
        transform: translateY(-1px);
      }

      i {
        font-size: 14px;
      }
    }
  }
}

.bg-light {
  background: var(--light-gray-1);
}

.section-padding {
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: translateX(-50%) scale(1);
  }

  50% {
    transform: translateX(-50%) scale(1.1);
  }
}

/* Responsive Design */
@media (max-width: 1400px) {
  .page-header {
    padding: 160px 0 80px;
  }
}

@media (max-width: 1200px) {
  .page-header {
    padding: 150px 0 80px;
  }
}

@media (max-width: 992px) {
  .page-header {
    padding: 140px 0 80px;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 120px 0 60px;
  }

  .page-title {
    font-size: 2.5rem;
    letter-spacing: 2px !important;
  }
}

@media (max-width: 576px) {
  .page-header {
    padding: 100px 0 60px;
  }

  .page-title {
    font-size: 2rem;
    letter-spacing: 1.5px !important;
  }
}
</style>