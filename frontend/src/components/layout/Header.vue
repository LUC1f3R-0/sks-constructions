<template>
  <header class="header" :class="{ 'header-sticky': isSticky, 'header-default': !isSticky }">
    <!-- Top Header Bar -->
    <div class="top-header">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-6">
            <div class="top-header-info">
              <span class="info-item">
                <i class="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </span>
              <span class="info-item">
                <i class="fas fa-envelope"></i>
                <span>info@sksconstructions.com</span>
              </span>
              <span class="info-item">
                <i class="fas fa-clock"></i>
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </span>
              <span class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>New York, NY 10001</span>
              </span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="top-header-social">
              <a href="#" class="social-icon" title="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon" title="Facebook">
                <i class="fab fa-facebook-f"></i>
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

    <!-- Main Navigation -->
    <nav class="main-nav">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-3 col-6">
            <div class="logo">
              <router-link to="/" class="logo-link">
                <div class="logo-container">
                  <div class="logo-icon">
                    <i class="fas fa-hard-hat"></i>
                  </div>
                  <div class="logo-text">
                    <span class="logo-title">SKS</span>
                    <span class="logo-subtitle">CONSTRUCTIONS</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-lg-9 col-md-9 col-6">
            <div class="nav-wrapper">
              <!-- Desktop Menu -->
              <ul class="nav-menu" :class="{ 'nav-menu-active': isMobileMenuOpen }">
                <li class="nav-item">
                  <router-link to="/" class="nav-link" @click="closeMobileMenu">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link" @click="closeMobileMenu">
                    <i class="fas fa-info-circle"></i>
                    <span>About</span>
                  </router-link>
                </li>
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" @click="toggleDropdown('projects')">
                    <i class="fas fa-building"></i>
                    <span>Projects</span>
                    <i class="fas fa-chevron-down dropdown-arrow"></i>
                  </a>
                  <ul class="dropdown-menu" :class="{ 'show': activeDropdown === 'projects' }">
                    <li><router-link to="/projects" class="dropdown-item" @click="closeMobileMenu">
                      <i class="fas fa-th-large"></i>All Projects
                    </router-link></li>
                    <li><router-link to="/projects?category=interior" class="dropdown-item" @click="closeMobileMenu">
                      <i class="fas fa-couch"></i>Interior
                    </router-link></li>
                    <li><router-link to="/projects?category=exterior" class="dropdown-item" @click="closeMobileMenu">
                      <i class="fas fa-home"></i>Exterior
                    </router-link></li>
                    <li><router-link to="/projects?category=commercial" class="dropdown-item" @click="closeMobileMenu">
                      <i class="fas fa-building"></i>Commercial
                    </router-link></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link to="/services" class="nav-link" @click="closeMobileMenu">
                    <i class="fas fa-tools"></i>
                    <span>Services</span>
                  </router-link>
                </li>
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" @click="toggleDropdown('blog')">
                    <i class="fas fa-newspaper"></i>
                    <span>Blog</span>
                    <i class="fas fa-chevron-down dropdown-arrow"></i>
                  </a>
                  <ul class="dropdown-menu" :class="{ 'show': activeDropdown === 'blog' }">
                    <li><router-link to="/blog" class="dropdown-item" @click="closeMobileMenu">
                      <i class="fas fa-list"></i>All Posts
                    </router-link></li>
                    <li><router-link to="/blog?category=construction" class="dropdown-item" @click="closeMobileMenu">
                      <i class="fas fa-hard-hat"></i>Construction
                    </router-link></li>
                    <li><router-link to="/blog?category=design" class="dropdown-item" @click="closeMobileMenu">
                      <i class="fas fa-drafting-compass"></i>Design
                    </router-link></li>
                    <li><router-link to="/blog?category=news" class="dropdown-item" @click="closeMobileMenu">
                      <i class="fas fa-newspaper"></i>News
                    </router-link></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link to="/contact" class="nav-link contact-link" @click="closeMobileMenu">
                    <i class="fas fa-phone"></i>
                    <span>Contact</span>
                  </router-link>
                </li>
              </ul>

              <!-- Mobile Menu Toggle -->
              <div class="mobile-menu-toggle" @click="toggleMobileMenu">
                <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
                <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
                <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isSticky = ref(false)
const isMobileMenuOpen = ref(false)
const activeDropdown = ref('')

const handleScroll = () => {
  // Check if we're on the home page
  const isHomePage = route.path === '/'
  
  if (isHomePage) {
    // On home page, make header sticky after scrolling past hero section
    isSticky.value = window.scrollY > 245
  } else {
    // On other pages, make header sticky immediately
    isSticky.value = window.scrollY > 50
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
  activeDropdown.value = ''
}

const toggleDropdown = (dropdown: string) => {
  if (activeDropdown.value === dropdown) {
    activeDropdown.value = ''
  } else {
    activeDropdown.value = dropdown
  }
}

// Watch for route changes to reset header state
watch(() => route.path, () => {
  // Reset mobile menu and dropdowns when route changes
  isMobileMenuOpen.value = false
  activeDropdown.value = ''
  document.body.style.overflow = ''
  
  // Trigger scroll handler to update sticky state for new page
  setTimeout(() => {
    handleScroll()
  }, 100)
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Initial call to set correct state
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease-out;
  
  &.header-sticky {
    background-color: var(--white);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    
    .main-nav {
      background-color: var(--white);
    }
    
    .logo-icon {
      background: var(--primary-color);
      color: var(--white);
    }
    
    .nav-link {
      color: var(--text-black);
      
      &:hover {
        color: var(--primary-color);
      }
    }
    
    .logo-icon {
      animation: none;
    }
  }
  
  &.header-default {
    // Default state for non-home pages or when not scrolled
    background-color: var(--white);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    
    .main-nav {
      background-color: var(--white);
    }
    
    .logo-icon {
      background: var(--primary-color);
      color: var(--white);
    }
    
    .nav-link {
      color: var(--text-black);
      
      &:hover {
        color: var(--primary-color);
      }
    }
    
    .logo-icon {
      animation: none;
    }
  }
}

.top-header {
  background: linear-gradient(135deg, var(--dark-blue-1) 0%, var(--dark-blue-2) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 0;
  
  @media (max-width: 768px) {
    display: none;
  }
}

.top-header-info {
  display: flex;
  gap: 30px;
  
  @media (max-width: 992px) {
    gap: 20px;
  }
  
  .info-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--white);
    font-size: 14px;
    transition: var(--transition-default);
    
    &:hover {
      color: var(--primary-color);
    }
    
    i {
      color: var(--primary-color);
      font-size: 12px;
    }
  }
}

.top-header-social {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--white);
    border-radius: 50%;
    transition: var(--transition-default);
    
    &:hover {
      background-color: var(--primary-color);
      transform: rotate(180deg) scale(1.1);
    }
    
    i {
      font-size: 12px;
    }
  }
}

.main-nav {
  background-color: transparent;
  padding: 20px 0;
  transition: var(--transition-default);
}

.logo {
  .logo-link {
    text-decoration: none;
    color: inherit;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .logo-icon {
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: var(--transition-default);
    animation: pulse 2s infinite;
    
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(255, 95, 19, 0.7);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(255, 95, 19, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(255, 95, 19, 0);
      }
    }
  }
  
  .logo-text {
    display: flex;
    flex-direction: column;
    
    .logo-title {
      font-family: var(--font-secondary);
      font-size: 28px;
      font-weight: 700;
      color: var(--primary-color);
      line-height: 1;
    }
    
    .logo-subtitle {
      font-size: 10px;
      font-weight: 600;
      color: var(--text-gray);
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
}

.nav-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 30px;
  
  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    left: -100%;
    width: 300px;
    height: 100vh;
    background: linear-gradient(135deg, var(--white) 0%, var(--light-gray-1) 100%);
    flex-direction: column;
    padding: 80px 30px 30px;
    transition: left 0.3s ease-out;
    box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
    gap: 0;
    
    &.nav-menu-active {
      left: 0;
    }
  }
  
  @media (max-width: 576px) {
    width: 280px;
  }
}

.nav-item {
  position: relative;
  
  @media (max-width: 992px) {
    width: 100%;
    border-bottom: 1px solid var(--light-gray-1);
  }
}

.nav-link {
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: var(--transition-default);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--primary-color);
    
    &::after {
      width: 100%;
    }
  }
  
  i {
    font-size: 14px;
  }
  
  @media (max-width: 992px) {
    color: var(--text-black);
    padding: 15px 0;
    width: 100%;
    
    &:hover {
      color: var(--primary-color);
    }
  }
}

.contact-link {
  background: var(--primary-color);
  color: var(--white) !important;
  padding: 10px 20px !important;
  border-radius: 25px;
  transition: var(--transition-default);
  
  &:hover {
    background: var(--secondary-color);
    transform: scale(1.05);
  }
  
  @media (max-width: 992px) {
    background: var(--primary-color);
    color: var(--white) !important;
    margin-top: 10px;
  }
}

.dropdown-toggle {
  cursor: pointer;
  
  .dropdown-arrow {
    font-size: 10px;
    transition: var(--transition-default);
  }
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--white);
  min-width: 220px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: var(--transition-default);
  list-style: none;
  padding: 15px 0;
  margin: 0;
  border-radius: 10px;
  border: 1px solid var(--light-gray-1);
  
  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  @media (max-width: 992px) {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background-color: var(--light-gray-1);
    margin-left: 20px;
    display: none;
    border-radius: 0;
    border: none;
    
    &.show {
      display: block;
    }
  }
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  color: var(--text-black);
  text-decoration: none;
  transition: var(--transition-default);
  
  &:hover {
    background-color: var(--light-gray-1);
    color: var(--primary-color);
    transform: translateX(5px);
  }
  
  i {
    font-size: 14px;
    width: 16px;
  }
  
  @media (max-width: 992px) {
    padding: 10px 15px;
  }
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  
  @media (max-width: 992px) {
    display: flex;
  }
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background-color: var(--primary-color);
  transition: var(--transition-default);
  border-radius: 2px;
  
  &.active {
    &:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    &:nth-child(2) {
      opacity: 0;
    }
    
    &:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  }
}
</style>
