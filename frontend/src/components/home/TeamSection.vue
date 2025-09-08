<template>
  <section class="team-section section-padding">
    <div class="container-fluid">
      <!-- Section Title -->
      <div class="row">
        <div class="col-12">
          <div class="section-header text-center">
            <div class="section-badge" data-aos="fade-down">
              <i class="fas fa-users"></i>
              <span>Our Team</span>
            </div>
            <h2 class="section-title" data-aos="fade-up">
              <span class="section-title-back">Team</span>
              Meet Our Experts
            </h2>
            <p class="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Our skilled professionals bring decades of experience and expertise to every project
            </p>
          </div>
        </div>
      </div>

      <!-- Team Members -->
      <div class="row">
        <div 
          v-for="(member, index) in teamMembers" 
          :key="index"
          class="col-lg-3 col-md-6 col-sm-12"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="team-card hover-lift">
            <div class="member-image">
              <img :src="member.image" :alt="member.name" />
              <div class="member-overlay">
                <div class="overlay-content">
                  <div class="social-links">
                    <a href="#" class="social-link" title="LinkedIn">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="social-link" title="Twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="social-link" title="Email">
                      <i class="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="member-badge">
                <i :class="member.badgeIcon"></i>
              </div>
            </div>
            <div class="member-info">
              <h4 class="member-name">{{ member.name }}</h4>
              <p class="member-position">{{ member.position }}</p>
              <div class="member-stats">
                <div class="stat-item">
                  <div class="stat-number">{{ member.projects }}</div>
                  <div class="stat-label">Projects</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">{{ member.experience }}</div>
                  <div class="stat-label">Years</div>
                </div>
              </div>
              <p class="member-description">{{ member.description }}</p>
              <div class="member-skills">
                <span v-for="skill in member.skills" :key="skill" class="skill-tag">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Stats -->
      <div class="row mt-5">
        <div class="col-12">
          <div class="team-stats" data-aos="fade-up">
            <div class="stats-container">
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="fas fa-hard-hat"></i>
                </div>
                <div class="stat-content">
                  <div class="stat-number" data-count="100">0</div>
                  <div class="stat-label">Team Members</div>
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="fas fa-trophy"></i>
                </div>
                <div class="stat-content">
                  <div class="stat-number" data-count="25">0</div>
                  <div class="stat-label">Years Experience</div>
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="fas fa-certificate"></i>
                </div>
                <div class="stat-content">
                  <div class="stat-number" data-count="50">0</div>
                  <div class="stat-label">Certifications</div>
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="fas fa-star"></i>
                </div>
                <div class="stat-content">
                  <div class="stat-number" data-count="500">0</div>
                  <div class="stat-label">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="row mt-5">
        <div class="col-12">
          <div class="team-cta text-center" data-aos="fade-up">
            <h3>Join Our Team</h3>
            <p>We're always looking for talented professionals to join our construction team</p>
            <router-link to="/careers" class="btn btn-primary construction-btn">
              <i class="fas fa-briefcase"></i>
              <span>View Careers</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const teamMembers = [
  {
    name: 'John Smith',
    position: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    badgeIcon: 'fas fa-crown',
    projects: 150,
    experience: 25,
    description: 'Leading our company with over 25 years of construction industry experience.',
    skills: ['Leadership', 'Strategy', 'Management']
  },
  {
    name: 'Sarah Johnson',
    position: 'Senior Project Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    badgeIcon: 'fas fa-tools',
    projects: 85,
    experience: 15,
    description: 'Expert in managing complex construction projects with precision and efficiency.',
    skills: ['Project Management', 'Planning', 'Coordination']
  },
  {
    name: 'Michael Chen',
    position: 'Lead Architect',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    badgeIcon: 'fas fa-drafting-compass',
    projects: 120,
    experience: 18,
    description: 'Creating innovative architectural designs that blend functionality with aesthetics.',
    skills: ['Architecture', 'Design', 'Innovation']
  },
  {
    name: 'Emily Rodriguez',
    position: 'Safety Director',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    badgeIcon: 'fas fa-shield-alt',
    projects: 200,
    experience: 12,
    description: 'Ensuring the highest safety standards across all our construction sites.',
    skills: ['Safety', 'Compliance', 'Training']
  }
]

onMounted(() => {
  // Initialize counter animation
  const counters = document.querySelectorAll('.stat-number')
  
  const animateCounter = (counter: Element) => {
    const target = parseInt(counter.getAttribute('data-count') || '0')
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0
    
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      counter.textContent = Math.floor(current).toString()
    }, 16)
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        observer.unobserve(entry.target)
      }
    })
  })
  
  counters.forEach(counter => observer.observe(counter))
})
</script>

<style lang="scss" scoped>
.team-section {
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

.team-card {
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  transition: var(--transition-slow);
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(255, 95, 19, 0.2);
    
    .member-overlay {
      opacity: 1;
    }
    
    .member-image img {
      transform: scale(1.1);
    }
  }
}

.member-image {
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

.member-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(2, 26, 71, 0.9) 0%, rgba(255, 95, 19, 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition-default);
}

.overlay-content {
  text-align: center;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  text-decoration: none;
  transition: var(--transition-default);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: var(--primary-color);
    transform: scale(1.1);
  }
  
  i {
    font-size: 16px;
  }
}

.member-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(255, 95, 19, 0.3);
  
  i {
    color: var(--white);
    font-size: 18px;
  }
}

.member-info {
  padding: 30px;
}

.member-name {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-black);
  margin-bottom: 10px;
  line-height: 1.2;
}

.member-position {
  font-size: 16px;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.member-stats {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  .stat-item {
    text-align: center;
    
    .stat-number {
      font-family: var(--font-secondary);
      font-size: 24px;
      font-weight: 700;
      color: var(--text-black);
      line-height: 1;
    }
    
    .stat-label {
      font-size: 12px;
      color: var(--text-gray);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
}

.member-description {
  font-size: 14px;
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 20px;
}

.member-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  .skill-tag {
    background: rgba(255, 95, 19, 0.1);
    color: var(--primary-color);
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
  }
}

.team-stats {
  background: linear-gradient(135deg, var(--dark-blue-1) 0%, var(--dark-blue-2) 100%);
  border-radius: 20px;
  padding: 60px 40px;
  color: var(--white);
  
  .stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
  }
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: center;
  
  .stat-icon {
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    
    i {
      color: var(--primary-color);
      font-size: 24px;
    }
  }
  
  .stat-content {
    flex: 1;
    
    .stat-number {
      font-family: var(--font-secondary);
      font-size: 36px;
      font-weight: 700;
      line-height: 1;
      margin-bottom: 5px;
    }
    
    .stat-label {
      font-size: 14px;
      opacity: 0.9;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
}

.team-cta {
  background: var(--white);
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 36px;
    font-weight: 700;
    color: var(--text-black);
    margin-bottom: 15px;
    
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  
  p {
    font-size: 18px;
    color: var(--text-gray);
    margin-bottom: 30px;
    
    @media (max-width: 768px) {
      font-size: 16px;
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
  
  &:hover {
    background: var(--secondary-color);
    transform: scale(1.05);
    color: var(--white);
  }
  
  i {
    font-size: 16px;
  }
}
</style>
