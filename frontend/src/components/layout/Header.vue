<template>
  <header class="header" :class="{ 'header-sticky': isSticky, 'header-default': !isSticky }">
    <!-- Top Header Bar -->
    <div class="top-header">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12">
            <div class="top-header-info d-flex flex-wrap justify-content-center justify-content-md-start">
              <span class="info-item">
                <i class="fas fa-phone"></i>
                <span>(+94) 717-640-039</span>
              </span>
              <span class="info-item">
                <i class="fas fa-envelope"></i>
                <span>info@sksdevelopers.lk</span>
              </span>
              <span class="info-item">
                <i class="fas fa-clock"></i>
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </span>
              <span class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Kiribathgoda, Sri Lanka</span>
              </span>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
            <div class="top-header-social d-flex justify-content-center justify-content-md-end">
              <a href="#" class="social-icon" title="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com/sksdevelopers" target="_blank" class="social-icon" title="Facebook">
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
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
            <div class="logo d-flex justify-content-center justify-content-sm-start">
              <router-link to="/" class="logo-link">
                <div class="logo-container">
                  <div class="logo-icon">
                    <img src="/land_company_logo.svg" alt="SKS DEVELOPERS (PVT) LTD Logo" class="logo-image">
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 col-md-8 col-sm-6 col-6">
            <div class="nav-wrapper d-flex justify-content-end">
              <!-- Desktop Menu -->
              <ul class="nav-menu" :class="{ 'nav-menu-active': isMobileMenuOpen }">
                <li class="nav-item">
                  <router-link to="/" class="nav-link" :class="{ 'active': isActive('/') }" @click="closeMobileMenu">
                    <span>Home</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link" :class="{ 'active': isActive('/about') }"
                    @click="closeMobileMenu">
                    <span>About</span>
                  </router-link>
                </li>
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" :class="{ 'active': isDropdownActive('/projects') }"
                    @click="toggleDropdown('projects')">
                    <span>Projects</span>
                    <i class="fas fa-chevron-down dropdown-arrow"></i>
                  </a>
                  <ul class="dropdown-menu" :class="{ 'show': activeDropdown === 'projects' }">
                    <li><router-link to="/projects" class="dropdown-item" :class="{ 'active': isActive('/projects') }"
                        @click="closeMobileMenu">
                        All Projects
                      </router-link></li>
                    <li><router-link to="/project-updates" class="dropdown-item" :class="{ 'active': isActive('/project-updates') }"
                        @click="closeMobileMenu">
                        Project Updates
                      </router-link></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" :class="{ 'active': isDropdownActive('/services') }"
                    @click="toggleDropdown('services')">
                    <span>Services</span>
                    <i class="fas fa-chevron-down dropdown-arrow"></i>
                  </a>
                  <ul class="dropdown-menu" :class="{ 'show': activeDropdown === 'services' }">
                    <li><router-link to="/services" class="dropdown-item" :class="{ 'active': isActive('/services') }"
                        @click="closeMobileMenu">
                        Our Services
                      </router-link></li>
                    <li><router-link to="/service-portfolio" class="dropdown-item" :class="{ 'active': isActive('/service-portfolio') }"
                        @click="closeMobileMenu">
                        Service Portfolio
                      </router-link></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link to="/testimonials" class="nav-link" :class="{ 'active': isActive('/testimonials') }"
                    @click="closeMobileMenu">
                    <span>Testimonials</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/contact" class="nav-link contact-link" :class="{ 'active': isActive('/contact') }"
                    @click="closeMobileMenu">
                    <span>Contact</span>
                  </router-link>
                </li>

                <!-- Additional Mobile Menu Items -->
                <li class="nav-item mobile-only">
                  <router-link to="/why-choose-us" class="nav-link" :class="{ 'active': isActive('/why-choose-us') }"
                    @click="closeMobileMenu">
                    <i class="fas fa-star"></i>
                    <span>Why Choose Us</span>
                  </router-link>
                </li>
                <li class="nav-item mobile-only">
                  <router-link to="/blog" class="nav-link" :class="{ 'active': isActive('/blog') }"
                    @click="closeMobileMenu">
                    <i class="fas fa-newspaper"></i>
                    <span>Blog</span>
                  </router-link>
                </li>

                <!-- Mobile Contact Info -->
                <div class="mobile-contact-info">
                  <div class="mobile-contact-item">
                    <i class="fas fa-phone"></i>
                    <span>(+94) 717-640-039</span>
                  </div>
                  <div class="mobile-contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>info@sksdevelopers.lk</span>
                  </div>
                  <div class="mobile-contact-item">
                    <i class="fas fa-clock"></i>
                    <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
                  </div>
                  <div class="mobile-contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Kiribathgoda, Sri Lanka</span>
                  </div>
                </div>
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

// Computed property to check if a link is active
const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

// Computed property to check if dropdown should be active
const isDropdownActive = (dropdownPath: string) => {
  return route.path.startsWith(dropdownPath)
}

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
      background: var(--white);
      animation: none;
    }

    .nav-link {
      color: var(--text-black);

      &:hover {
        color: var(--secondary-color);
      }

      &.active {
        color: var(--secondary-color);
      }
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
      background: var(--white);
      animation: none;
    }

    .nav-link {
      color: var(--text-black);

      &:hover {
        color: var(--secondary-color);
      }

      &.active {
        color: var(--secondary-color);
      }
    }
  }
}

.top-header {
  background: linear-gradient(135deg, var(--dark-blue-1) 0%, var(--dark-blue-2) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 0;

  @media (max-width: 1400px) {
    padding: 9px 0;
  }

  @media (max-width: 1200px) {
    padding: 8px 0;
  }

  @media (max-width: 992px) {
    padding: 7px 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
}

.top-header-info {
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 1400px) {
    gap: 25px;
  }

  @media (max-width: 1200px) {
    gap: 20px;
  }

  @media (max-width: 992px) {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 768px) {
    gap: 10px;
    justify-content: center;
  }

  @media (max-width: 576px) {
    gap: 8px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--white);
    font-size: 14px;
    transition: var(--transition-default);
    white-space: nowrap;

    @media (max-width: 1400px) {
      font-size: 13px;
      gap: 7px;
    }

    @media (max-width: 1200px) {
      font-size: 13px;
      gap: 6px;
    }

    @media (max-width: 992px) {
      font-size: 12px;
      gap: 6px;
    }

    @media (max-width: 768px) {
      font-size: 11px;
      gap: 5px;
    }

    @media (max-width: 576px) {
      font-size: 10px;
      gap: 4px;
      white-space: normal;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 9px;
      gap: 3px;
    }

    &:hover {
      color: var(--primary-color);
      transform: translateY(-1px);
    }

    i {
      color: var(--primary-color);
      font-size: 12px;
      transition: var(--transition-default);

      @media (max-width: 1200px) {
        font-size: 11px;
      }

      @media (max-width: 768px) {
        font-size: 10px;
      }

      @media (max-width: 576px) {
        font-size: 9px;
      }

      @media (max-width: 480px) {
        font-size: 8px;
      }
    }

    span {
      @media (max-width: 768px) {
        display: none;
      }

      @media (max-width: 576px) {
        display: inline;
      }
    }
  }
}

.top-header-social {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  align-items: center;

  @media (max-width: 1400px) {
    gap: 13px;
  }

  @media (max-width: 1200px) {
    gap: 12px;
  }

  @media (max-width: 992px) {
    gap: 11px;
    justify-content: center;
  }

  @media (max-width: 768px) {
    gap: 10px;
    justify-content: center;
  }

  @media (max-width: 576px) {
    gap: 8px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }

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

    @media (max-width: 1400px) {
      width: 29px;
      height: 29px;
    }

    @media (max-width: 1200px) {
      width: 28px;
      height: 28px;
    }

    @media (max-width: 992px) {
      width: 27px;
      height: 27px;
    }

    @media (max-width: 768px) {
      width: 26px;
      height: 26px;
    }

    @media (max-width: 576px) {
      width: 24px;
      height: 24px;
    }

    @media (max-width: 480px) {
      width: 22px;
      height: 22px;
    }

    &:hover {
      background-color: var(--primary-color);
      transform: rotate(180deg) scale(1.1);
    }

    i {
      font-size: 12px;

      @media (max-width: 1400px) {
        font-size: 11px;
      }

      @media (max-width: 768px) {
        font-size: 10px;
      }

      @media (max-width: 576px) {
        font-size: 9px;
      }

      @media (max-width: 480px) {
        font-size: 8px;
      }
    }
  }
}

.main-nav {
  background-color: transparent;
  padding: 20px 0;
  transition: var(--transition-default);

  @media (max-width: 1400px) {
    padding: 18px 0;
  }

  @media (max-width: 1200px) {
    padding: 16px 0;
  }

  @media (max-width: 992px) {
    padding: 14px 0;
  }

  @media (max-width: 768px) {
    padding: 8px 0;
  }

  @media (max-width: 576px) {
    padding: 6px 0;
  }

  @media (max-width: 480px) {
    padding: 4px 0;
  }
}

.logo {
  .logo-link {
    text-decoration: none;
    color: inherit;
    transition: var(--transition-default);

    &:hover {
      transform: scale(1.02);
    }
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .logo-icon {
    width: auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-default);

    @media (max-width: 1400px) {
      height: 55px;
    }

    @media (max-width: 1200px) {
      height: 50px;
    }

    @media (max-width: 992px) {
      height: 45px;
    }

    @media (max-width: 768px) {
      height: 35px;
    }

    @media (max-width: 576px) {
      height: 30px;
    }

    @media (max-width: 480px) {
      height: 25px;
    }

    .logo-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: var(--transition-default);
    }

  }

}

.nav-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  @media (max-width: 992px) {
    justify-content: center;
  }
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 25px;

  @media (max-width: 1400px) {
    gap: 25px;
  }

  @media (max-width: 1200px) {
    gap: 20px;
  }

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

  @media (max-width: 768px) {
    width: 280px;
    padding: 70px 25px 25px;
  }

  @media (max-width: 576px) {
    width: 260px;
    padding: 60px 20px 20px;
  }

  @media (max-width: 480px) {
    width: 240px;
    padding: 50px 15px 15px;
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

  @media (max-width: 1400px) {
    font-size: 15px;
    gap: 7px;
  }

  @media (max-width: 1200px) {
    font-size: 14px;
    gap: 6px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--secondary-color);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--secondary-color);
    transform: translateY(-1px);

    &::after {
      width: 100%;
    }

    i {
      transform: scale(1.1);
    }
  }

  &.active {
    color: var(--primary-color);

    &::after {
      width: 100%;
    }

    i {
      transform: scale(1.1);
    }
  }

  i {
    font-size: 14px;
    transition: var(--transition-default);

    @media (max-width: 1400px) {
      font-size: 13px;
    }

    @media (max-width: 1200px) {
      font-size: 12px;
    }
  }

  @media (max-width: 992px) {
    color: var(--text-black);
    padding: 15px 0;
    width: 100%;
    font-size: 16px;

    &:hover {
      color: var(--primary-color);
    }

    &.active {
      color: var(--primary-color);
      background-color: rgba(37, 99, 235, 0.1);
      border-radius: 5px;
      padding-left: 10px;
    }

    i {
      font-size: 14px;
    }
  }

  @media (max-width: 576px) {
    padding: 12px 0;
    font-size: 15px;

    i {
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px 0;
    font-size: 14px;

    i {
      font-size: 12px;
    }
  }
}

.contact-link {
  background: var(--secondary-color);
  color: var(--white) !important;
  padding: 10px 20px !important;
  border-radius: 25px;
  transition: var(--transition-default);

  &:hover {
    background: var(--accent-green);
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(132, 204, 22, 0.3);
  }

  &.active {
    background: var(--accent-green);
    box-shadow: 0 5px 15px rgba(132, 204, 22, 0.3);
  }

  @media (max-width: 992px) {
    background: var(--secondary-color);
    color: var(--white) !important;
    margin-top: 10px;

    &.active {
      background: var(--accent-green);
    }
  }
}

.dropdown-toggle {
  cursor: pointer;

  .dropdown-arrow {
    font-size: 10px;
    transition: var(--transition-default);
  }

  &:hover .dropdown-arrow {
    transform: rotate(180deg);
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

    i {
      transform: scale(1.1);
    }
  }

  &.active {
    background-color: var(--primary-color);
    color: var(--white);

    i {
      transform: scale(1.1);
    }
  }

  i {
    font-size: 14px;
    width: 16px;
    transition: var(--transition-default);
  }

  @media (max-width: 992px) {
    padding: 10px 15px;

    &.active {
      background-color: var(--primary-color);
      color: var(--white);
      border-radius: 5px;
      margin: 0 5px;
    }
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

  @media (max-width: 576px) {
    gap: 3px;
  }

  @media (max-width: 480px) {
    gap: 2px;
  }
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background-color: var(--primary-color);
  transition: var(--transition-default);
  border-radius: 2px;

  @media (max-width: 1400px) {
    width: 24px;
    height: 3px;
  }

  @media (max-width: 1200px) {
    width: 23px;
    height: 3px;
  }

  @media (max-width: 992px) {
    width: 22px;
    height: 3px;
  }

  @media (max-width: 768px) {
    width: 21px;
    height: 2px;
  }

  @media (max-width: 576px) {
    width: 20px;
    height: 2px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 2px;
  }

  // Active state transformations for hamburger to X animation
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

    // Adjust transforms for smaller screens
    @media (max-width: 768px) {
      &:nth-child(1) {
        transform: rotate(45deg) translate(4px, 4px);
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -5px);
      }
    }

    @media (max-width: 576px) {
      &:nth-child(1) {
        transform: rotate(45deg) translate(3px, 3px);
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -4px);
      }
    }

    @media (max-width: 480px) {
      &:nth-child(1) {
        transform: rotate(45deg) translate(2px, 2px);
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translate(4px, -3px);
      }
    }
  }
}

.mobile-contact-info {
  display: none;
  /* Hidden by default */
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--light-gray-1);

  @media (max-width: 992px) {
    display: flex;
  }
}

.mobile-only {
  display: none;
  
  @media (max-width: 992px) {
    display: block;
  }
}

.mobile-contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-black);
  font-size: 14px;
  transition: var(--transition-default);

  &:hover {
    color: var(--primary-color);
    transform: translateX(5px);
  }

  i {
    font-size: 14px;
    color: var(--primary-color);
  }
}
</style>
