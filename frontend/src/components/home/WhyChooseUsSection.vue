<template>
  <section class="why-choose-us-section section-padding">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="section-header text-center" data-aos="fade-up">
            <h2 class="section-title">Why Choose SKS Developers?</h2>
            <p class="section-subtitle">
              With over 25 years of experience, we've built our reputation on excellence, innovation, and unwavering commitment to our clients.
            </p>
          </div>
        </div>
      </div>
      
      <div class="row">
        <!-- Experience & Expertise -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div class="feature-icon">
              <i class="fas fa-award"></i>
            </div>
            <h3 class="feature-title">25+ Years Experience</h3>
            <p class="feature-description">
              Over two decades of proven expertise in construction, engineering, and project management across Sri Lanka.
            </p>
            <ul class="feature-list">
              <li><i class="fas fa-check"></i>500+ Projects Completed</li>
              <li><i class="fas fa-check"></i>100+ Team Members</li>
              <li><i class="fas fa-check"></i>Industry Recognition</li>
            </ul>
          </div>
        </div>

        <!-- Quality & Innovation -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div class="feature-icon">
              <i class="fas fa-cogs"></i>
            </div>
            <h3 class="feature-title">Advanced Technology</h3>
            <p class="feature-description">
              We use cutting-edge construction technology and innovative building techniques to deliver superior results.
            </p>
            <ul class="feature-list">
              <li><i class="fas fa-check"></i>Modern Equipment</li>
              <li><i class="fas fa-check"></i>3D Modeling</li>
              <li><i class="fas fa-check"></i>Quality Control Systems</li>
            </ul>
          </div>
        </div>

        <!-- Client Focus -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div class="feature-icon">
              <i class="fas fa-users"></i>
            </div>
            <h3 class="feature-title">Client-Centric Approach</h3>
            <p class="feature-description">
              Your vision is our mission. We work closely with clients to ensure every project exceeds expectations.
            </p>
            <ul class="feature-list">
              <li><i class="fas fa-check"></i>Personalized Service</li>
              <li><i class="fas fa-check"></i>Regular Updates</li>
              <li><i class="fas fa-check"></i>Post-Project Support</li>
            </ul>
          </div>
        </div>

        <!-- Safety & Compliance -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="400">
            <div class="feature-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="feature-title">Safety First</h3>
            <p class="feature-description">
              We maintain the highest safety standards and comply with all local regulations and international best practices.
            </p>
            <ul class="feature-list">
              <li><i class="fas fa-check"></i>Zero Accident Policy</li>
              <li><i class="fas fa-check"></i>Certified Safety Officers</li>
              <li><i class="fas fa-check"></i>Regular Safety Training</li>
            </ul>
          </div>
        </div>

        <!-- Timely Delivery -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="500">
            <div class="feature-icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3 class="feature-title">On-Time Delivery</h3>
            <p class="feature-description">
              We understand the importance of deadlines and consistently deliver projects on time and within budget.
            </p>
            <ul class="feature-list">
              <li><i class="fas fa-check"></i>Project Management</li>
              <li><i class="fas fa-check"></i>Efficient Planning</li>
              <li><i class="fas fa-check"></i>Resource Optimization</li>
            </ul>
          </div>
        </div>

        <!-- Cost Effectiveness -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="600">
            <div class="feature-icon">
              <i class="fas fa-dollar-sign"></i>
            </div>
            <h3 class="feature-title">Competitive Pricing</h3>
            <p class="feature-description">
              We offer transparent, competitive pricing without compromising on quality or safety standards.
            </p>
            <ul class="feature-list">
              <li><i class="fas fa-check"></i>Transparent Quotes</li>
              <li><i class="fas fa-check"></i>No Hidden Costs</li>
              <li><i class="fas fa-check"></i>Value for Money</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- CTA Section -->
      <div class="row">
        <div class="col-12">
          <div class="cta-section text-center" data-aos="fade-up" data-aos-delay="700">
            <h3 class="cta-title">Ready to Experience the Difference?</h3>
            <p class="cta-subtitle">
              Let us show you why SKS Developers is the right choice for your construction needs.
            </p>
            <div class="cta-buttons">
              <router-link to="/why-choose-us" class="btn btn-primary">
                <i class="fas fa-star"></i>
                Learn More
              </router-link>
              <router-link to="/contact" class="btn btn-secondary">
                <i class="fas fa-phone"></i>
                Get Free Quote
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style lang="scss" scoped>
.why-choose-us-section {
  background: var(--light-gray-1);
  
  .feature-card {
    background: var(--white);
    padding: 40px 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: var(--transition-default);
    height: 100%;
    border: 1px solid var(--light-gray-1);
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    .feature-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 25px;
      
      i {
        font-size: 32px;
        color: var(--white);
      }
    }
    
    .feature-title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 15px;
      color: var(--text-black);
    }
    
    .feature-description {
      color: var(--text-gray);
      margin-bottom: 25px;
      line-height: 1.6;
    }
    
    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: left;
      
      li {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        color: var(--text-gray);
        
        i {
          color: var(--secondary-color);
          font-size: 14px;
        }
      }
    }
  }
  
  .cta-section {
    margin-top: 60px;
    padding: 40px;
    background: var(--white);
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    
    .cta-title {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 15px;
      color: var(--text-black);
    }
    
    .cta-subtitle {
      color: var(--text-gray);
      font-size: 18px;
      margin-bottom: 30px;
      line-height: 1.6;
    }
    
    .cta-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
      
      .btn {
        min-width: 180px;
      }
    }
  }
}
</style>
