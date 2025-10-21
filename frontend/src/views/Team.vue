<template>
  <div class="team-page">
    <Header />
    <div class="container-fluid section-padding">
      <div class="row">
        <div class="col-12">
          <h1>Our Team</h1>
          <p>Meet the dedicated professionals who make SKS DEVELOPERS (PVT) LTD a leader in the industry.</p>
          
          <div class="team-grid">
            <div class="team-member">
              <div class="member-photo">
                <div class="placeholder-photo">Photo</div>
              </div>
              <h3>John Smith</h3>
              <p class="position">CEO & Founder</p>
              <p class="bio">With over 20 years of experience in construction, John leads our company with vision and expertise.</p>
            </div>
            
            <div class="team-member">
              <div class="member-photo">
                <div class="placeholder-photo">Photo</div>
              </div>
              <h3>Sarah Johnson</h3>
              <p class="position">Project Director</p>
              <p class="bio">Sarah oversees all major projects, ensuring quality and timely delivery.</p>
            </div>
            
            <div class="team-member">
              <div class="member-photo">
                <div class="placeholder-photo">Photo</div>
              </div>
              <h3>Mike Chen</h3>
              <p class="position">Lead Engineer</p>
              <p class="bio">Mike brings technical expertise and innovation to every engineering challenge.</p>
            </div>
            
            <div class="team-member">
              <div class="member-photo">
                <div class="placeholder-photo">Photo</div>
              </div>
              <h3>Emily Davis</h3>
              <p class="position">Design Manager</p>
              <p class="bio">Emily creates beautiful and functional designs that exceed client expectations.</p>
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
.team-page {
  min-height: 100vh;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.team-member {
  text-align: center;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #f9f9f9;
}

.member-photo {
  margin-bottom: 1rem;
}

.placeholder-photo {
  width: 150px;
  height: 150px;
  background: #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #666;
  font-weight: bold;
}

.team-member h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.position {
  color: #e74c3c;
  font-weight: bold;
  margin-bottom: 1rem;
}

.bio {
  color: #555;
  font-size: 0.9rem;
  line-height: 1.4;
}
</style>
