<template>
  <div class="testimonials-page">
    <Header />
    
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="page-title" data-aos="fade-up">Client Testimonials</h1>
            <p class="page-subtitle" data-aos="fade-up" data-aos-delay="100">
              Hear from our satisfied clients about their experience working with SKS Developers
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section section-padding">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="section-header text-center" data-aos="fade-up">
              <h2 class="section-title">What Our Clients Say</h2>
              <p class="section-subtitle">
                Trust-building testimonials from clients who have experienced our excellence
              </p>
            </div>
          </div>
        </div>

        <!-- Featured Testimonials -->
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="(testimonial, index) in featuredTestimonials" :key="index">
            <div class="testimonial-card" data-aos="fade-up" :data-aos-delay="index * 100">
              <div class="testimonial-header">
                <div class="client-image">
                  <img :src="testimonial.image" :alt="testimonial.name" />
                </div>
                <div class="client-info">
                  <h4 class="client-name">{{ testimonial.name }}</h4>
                  <p class="client-position">{{ testimonial.position }}</p>
                  <p class="client-company">{{ testimonial.company }}</p>
                </div>
                <div class="rating">
                  <i v-for="star in 5" :key="star" class="fas fa-star"></i>
                </div>
              </div>
              <div class="testimonial-content">
                <p class="testimonial-text">"{{ testimonial.text }}"</p>
              </div>
              <div class="testimonial-meta">
                <div class="project-info">
                  <i class="fas fa-building"></i>
                  <span>{{ testimonial.project }}</span>
                </div>
                <div class="project-date">
                  <i class="fas fa-calendar"></i>
                  <span>{{ testimonial.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Success Stories -->
        <div class="row">
          <div class="col-12">
            <div class="success-stories-section" data-aos="fade-up" data-aos-delay="400">
              <h3 class="stories-title">Success Stories</h3>
              <div class="stories-grid">
                <div class="story-item" v-for="(story, index) in successStories" :key="index" data-aos="fade-up" :data-aos-delay="500 + (index * 100)">
                  <div class="story-image">
                    <img :src="story.image" :alt="story.title" />
                    <div class="story-overlay">
                      <div class="story-icon">
                        <i class="fas fa-trophy"></i>
                      </div>
                    </div>
                  </div>
                  <div class="story-content">
                    <h4 class="story-title">{{ story.title }}</h4>
                    <p class="story-description">{{ story.description }}</p>
                    <div class="story-stats">
                      <div class="stat">
                        <span class="stat-number">{{ story.duration }}</span>
                        <span class="stat-label">Duration</span>
                      </div>
                      <div class="stat">
                        <span class="stat-number">{{ story.budget }}</span>
                        <span class="stat-label">Budget</span>
                      </div>
                      <div class="stat">
                        <span class="stat-number">{{ story.rating }}</span>
                        <span class="stat-label">Rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Client Logos -->
        <div class="row">
          <div class="col-12">
            <div class="client-logos-section" data-aos="fade-up" data-aos-delay="600">
              <h3 class="logos-title">Trusted By</h3>
              <div class="logos-grid">
                <div class="logo-item" v-for="(logo, index) in clientLogos" :key="index" data-aos="fade-up" :data-aos-delay="700 + (index * 50)">
                  <img :src="logo.image" :alt="logo.name" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="cta-content text-center" data-aos="fade-up">
              <h2>Ready to Join Our Success Stories?</h2>
              <p>Let us help you achieve your construction goals with the same level of excellence our clients have experienced.</p>
              <div class="cta-buttons">
                <router-link to="/contact" class="btn btn-primary construction-btn">
                  <i class="fas fa-phone"></i>
                  <span>Start Your Project</span>
                </router-link>
                <router-link to="/service-portfolio" class="btn btn-outline construction-btn">
                  <i class="fas fa-briefcase"></i>
                  <span>View Our Services</span>
                </router-link>
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
import { ref, onMounted } from 'vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

const featuredTestimonials = ref([
  {
    name: "Rajesh Perera",
    position: "Managing Director",
    company: "Perera Holdings Ltd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    text: "SKS Developers delivered our office complex project ahead of schedule and within budget. Their attention to detail and professional approach exceeded our expectations. Highly recommended for any commercial construction project.",
    project: "Office Complex - Colombo 7",
    date: "Completed 2023"
  },
  {
    name: "Priya Fernando",
    position: "Homeowner",
    company: "Private Residence",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    text: "The team at SKS Developers transformed our vision into reality. From the initial consultation to the final handover, they maintained excellent communication and delivered exceptional quality. Our dream home is everything we hoped for and more.",
    project: "Luxury Residential - Kandy",
    date: "Completed 2023"
  },
  {
    name: "David Silva",
    position: "Operations Manager",
    company: "Silva Industries",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    text: "Working with SKS Developers was a game-changer for our industrial facility project. Their expertise in complex construction requirements and commitment to safety standards made all the difference. We're already planning our next project with them.",
    project: "Industrial Facility - Gampaha",
    date: "Completed 2024"
  },
  {
    name: "Nimali Jayawardena",
    position: "Property Developer",
    company: "Jayawardena Properties",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    text: "SKS Developers has been our trusted construction partner for over 5 years. Their reliability, quality workmanship, and competitive pricing make them our go-to choice for all development projects. They truly understand the construction business.",
    project: "Apartment Complex - Negombo",
    date: "Completed 2024"
  },
  {
    name: "Kumar Ratnayake",
    position: "Business Owner",
    company: "Ratnayake Enterprises",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    text: "The renovation of our shopping mall was completed flawlessly by SKS Developers. They managed to keep the business operational during construction and delivered a modern, attractive space that has increased our foot traffic significantly.",
    project: "Shopping Mall Renovation - Kurunegala",
    date: "Completed 2023"
  },
  {
    name: "Samanthi Wickramasinghe",
    position: "Architect",
    company: "Wickramasinghe Associates",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    text: "As an architect, I've worked with many construction companies, but SKS Developers stands out for their technical expertise and collaborative approach. They bring our designs to life with precision and creativity that exceeds expectations.",
    project: "Mixed-Use Development - Anuradhapura",
    date: "In Progress 2024"
  }
])

const successStories = ref([
  {
    title: "Modern Office Complex",
    description: "A state-of-the-art 15-story office building with LEED certification and smart building technology.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "18 months",
    budget: "$15M",
    rating: "5.0"
  },
  {
    title: "Luxury Residential Tower",
    description: "A premium residential development with 50 luxury apartments and world-class amenities.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "24 months",
    budget: "$25M",
    rating: "4.9"
  },
  {
    title: "Industrial Manufacturing Plant",
    description: "A comprehensive industrial facility with specialized requirements and advanced infrastructure.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "30 months",
    budget: "$35M",
    rating: "5.0"
  }
])

const clientLogos = ref([
  { name: "Perera Holdings", image: "https://via.placeholder.com/150x80/2563eb/ffffff?text=Perera+Holdings" },
  { name: "Silva Industries", image: "https://via.placeholder.com/150x80/84cc16/ffffff?text=Silva+Industries" },
  { name: "Jayawardena Properties", image: "https://via.placeholder.com/150x80/2563eb/ffffff?text=Jayawardena+Properties" },
  { name: "Ratnayake Enterprises", image: "https://via.placeholder.com/150x80/84cc16/ffffff?text=Ratnayake+Enterprises" },
  { name: "Wickramasinghe Associates", image: "https://via.placeholder.com/150x80/2563eb/ffffff?text=Wickramasinghe+Associates" },
  { name: "Fernando Group", image: "https://via.placeholder.com/150x80/84cc16/ffffff?text=Fernando+Group" }
])

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
.testimonials-page {
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

.testimonials-section {
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

.testimonial-card {
  background: var(--white);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: var(--transition-default);
  height: 100%;
  border: 1px solid rgba(37, 99, 235, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  }
}

.testimonial-header {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
  
  .client-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .client-info {
    flex: 1;
    
    .client-name {
      font-size: 18px;
      font-weight: 700;
      color: var(--text-black);
      margin-bottom: 5px;
    }
    
    .client-position {
      font-size: 14px;
      color: var(--primary-color);
      font-weight: 600;
      margin-bottom: 2px;
    }
    
    .client-company {
      font-size: 13px;
      color: var(--text-gray);
      margin: 0;
    }
  }
  
  .rating {
    display: flex;
    gap: 2px;
    
    i {
      color: #ffc107;
      font-size: 14px;
    }
  }
}

.testimonial-content {
  margin-bottom: 20px;
  
  .testimonial-text {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-gray);
    font-style: italic;
    margin: 0;
  }
}

.testimonial-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(37, 99, 235, 0.1);
  
  .project-info,
  .project-date {
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

.success-stories-section {
  margin-top: 80px;
  
  .stories-title {
    font-size: 36px;
    font-weight: 700;
    color: var(--text-black);
    text-align: center;
    margin-bottom: 50px;
  }
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.story-item {
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: var(--transition-default);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  }
  
  .story-image {
    position: relative;
    height: 250px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition-slow);
    }
    
    .story-overlay {
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
      
      .story-icon {
        width: 60px;
        height: 60px;
        background: var(--white);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        i {
          font-size: 24px;
          color: var(--primary-color);
        }
      }
    }
  }
  
  &:hover .story-image {
    .story-overlay {
      opacity: 1;
    }
    
    img {
      transform: scale(1.1);
    }
  }
  
  .story-content {
    padding: 30px;
    
    .story-title {
      font-size: 20px;
      font-weight: 700;
      color: var(--text-black);
      margin-bottom: 15px;
    }
    
    .story-description {
      color: var(--text-gray);
      line-height: 1.6;
      margin-bottom: 20px;
    }
    
    .story-stats {
      display: flex;
      justify-content: space-between;
      
      .stat {
        text-align: center;
        
        .stat-number {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 12px;
          color: var(--text-gray);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      }
    }
  }
}

.client-logos-section {
  margin-top: 80px;
  
  .logos-title {
    font-size: 36px;
    font-weight: 700;
    color: var(--text-black);
    text-align: center;
    margin-bottom: 50px;
  }
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  align-items: center;
  
  .logo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: var(--white);
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: var(--transition-default);
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }
    
    img {
      max-width: 100%;
      height: auto;
      filter: grayscale(100%);
      transition: var(--transition-default);
    }
    
    &:hover img {
      filter: grayscale(0%);
    }
  }
}

.cta-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--dark-blue-1) 100%);
  color: var(--white);
}

.cta-content {
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
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
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

.btn-primary {
  background: var(--secondary-color);
  color: var(--white);
  border: 2px solid var(--secondary-color);
  
  &:hover {
    background: transparent;
    color: var(--secondary-color);
  }
}

.btn-outline {
  background: transparent;
  color: var(--white);
  border: 2px solid var(--white);
  
  &:hover {
    background: var(--white);
    color: var(--primary-color);
  }
}

.section-padding {
  padding: 100px 0;
  
  @media (max-width: 768px) {
    padding: 60px 0;
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
  }
}

@media (max-width: 576px) {
  .page-header {
    padding: 100px 0 60px;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>