<template>
  <div class="privacy-page">
    <Header />
    <div class="container-fluid section-padding">
      <div class="row">
        <div class="col-12">
          <h1>Privacy Policy</h1>
          <p class="last-updated">Last updated: December 15, 2024</p>
          
          <div class="privacy-content">
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, contact us, or use our services.</p>
            
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure security.</p>
            
            <h2>Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
            
            <h2>Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            
            <h2>Cookies</h2>
            <p>We use cookies and similar technologies to enhance your experience on our website and analyze usage patterns.</p>
            
            <h2>Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@sksconstructions.com</p>
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
.privacy-page {
  min-height: 100vh;
}

.last-updated {
  color: #666;
  font-style: italic;
  margin-bottom: 2rem;
}

.privacy-content {
  line-height: 1.6;
}

.privacy-content h2 {
  color: #2c3e50;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.privacy-content p {
  margin-bottom: 1rem;
  color: #555;
}
</style>
