<template>
  <div class="careers-page">
    <Header />
    <div class="container-fluid section-padding">
      <div class="row">
        <div class="col-12">
          <h1>Careers at SKS DEVELOPERS (PVT) LTD</h1>
          <p>Join our team and be part of building the future. We offer exciting career opportunities in construction, engineering, and project management.</p>
          
          <div class="careers-content">
            <h2>Why Work With Us?</h2>
            <ul>
              <li>Competitive salary and benefits</li>
              <li>Professional development opportunities</li>
              <li>Collaborative work environment</li>
              <li>Innovative projects</li>
              <li>Career growth potential</li>
            </ul>
            
            <h2>Current Openings</h2>
            <div class="job-listings">
              <div class="job-item">
                <h3>Project Manager</h3>
                <p>Lead construction projects from planning to completion.</p>
                <span class="location">Location: Multiple</span>
              </div>
              <div class="job-item">
                <h3>Civil Engineer</h3>
                <p>Design and oversee construction projects.</p>
                <span class="location">Location: Multiple</span>
              </div>
              <div class="job-item">
                <h3>Site Supervisor</h3>
                <p>Manage day-to-day construction activities.</p>
                <span class="location">Location: Multiple</span>
              </div>
            </div>
            
            <h2>How to Apply</h2>
            <p>Send your resume and cover letter to careers@sksconstructions.com</p>
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
.careers-page {
  min-height: 100vh;
}

.careers-content {
  margin-top: 2rem;
}

.careers-content h2 {
  color: #2c3e50;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.careers-content ul {
  list-style-type: disc;
  margin-left: 2rem;
  margin-bottom: 2rem;
}

.careers-content li {
  margin-bottom: 0.5rem;
  color: #555;
}

.job-listings {
  margin-bottom: 2rem;
}

.job-item {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}

.job-item h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.job-item p {
  color: #666;
  margin-bottom: 0.5rem;
}

.location {
  color: #888;
  font-size: 0.9rem;
}
</style>
