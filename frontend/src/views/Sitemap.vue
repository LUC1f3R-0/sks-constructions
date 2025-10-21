<template>
  <div class="sitemap-page">
    <Header />
    <div class="container-fluid section-padding">
      <div class="row">
        <div class="col-12">
          <h1>Site Map</h1>
          <p>Find all pages and sections of our website organized by category.</p>
          
          <div class="sitemap-content">
            <div class="sitemap-section">
              <h2>Main Pages</h2>
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About Us</router-link></li>
                <li><router-link to="/services">Services</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><router-link to="/blog">Blog</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
              </ul>
            </div>
            
            <div class="sitemap-section">
              <h2>Services</h2>
              <ul>
                <li><router-link to="/services/engineering">Engineering Services</router-link></li>
                <li><router-link to="/services/architecture">Architecture Services</router-link></li>
                <li><router-link to="/services/management">Project Management</router-link></li>
                <li><router-link to="/services/finishing">Finishing Services</router-link></li>
                <li><router-link to="/services/renovation">Renovation Services</router-link></li>
                <li><router-link to="/services/infrastructure">Infrastructure Development</router-link></li>
              </ul>
            </div>
            
            <div class="sitemap-section">
              <h2>Blog Articles</h2>
              <ul>
                <li><router-link to="/blog/modern-construction-techniques">Modern Construction Techniques</router-link></li>
                <li><router-link to="/blog/sustainable-building-practices">Sustainable Building Practices</router-link></li>
                <li><router-link to="/blog/project-management-excellence">Project Management Excellence</router-link></li>
                <li><router-link to="/blog/interior-design-trends">Interior Design Trends</router-link></li>
              </ul>
            </div>
            
            <div class="sitemap-section">
              <h2>Company</h2>
              <ul>
                <li><router-link to="/team">Our Team</router-link></li>
                <li><router-link to="/careers">Careers</router-link></li>
              </ul>
            </div>
            
            <div class="sitemap-section">
              <h2>Legal</h2>
              <ul>
                <li><router-link to="/privacy">Privacy Policy</router-link></li>
                <li><router-link to="/terms">Terms of Service</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<style scoped>
.sitemap-page {
  min-height: 100vh;
}

.sitemap-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.sitemap-section {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
}

.sitemap-section h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 0.5rem;
}

.sitemap-section ul {
  list-style: none;
  padding: 0;
}

.sitemap-section li {
  margin-bottom: 0.5rem;
}

.sitemap-section a {
  color: #555;
  text-decoration: none;
  transition: color 0.3s ease;
}

.sitemap-section a:hover {
  color: #e74c3c;
  text-decoration: underline;
}
</style>
