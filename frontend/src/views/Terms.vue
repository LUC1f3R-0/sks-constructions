<template>
  <div class="terms-page">
    <Header />
    <div class="container-fluid section-padding">
      <div class="row">
        <div class="col-12">
          <h1>Terms of Service</h1>
          <p class="last-updated">Last updated: December 15, 2024</p>
          
          <div class="terms-content">
            <h2>Acceptance of Terms</h2>
            <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h2>Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.</p>
            
            <h2>Disclaimer</h2>
            <p>The materials on our website are provided on an 'as is' basis. SKS Constructions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>
            
            <h2>Limitations</h2>
            <p>In no event shall SKS Constructions or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>
            
            <h2>Accuracy of Materials</h2>
            <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current.</p>
            
            <h2>Links</h2>
            <p>We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site.</p>
            
            <h2>Modifications</h2>
            <p>We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms.</p>
            
            <h2>Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at legal@sksconstructions.com</p>
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
.terms-page {
  min-height: 100vh;
}

.last-updated {
  color: #666;
  font-style: italic;
  margin-bottom: 2rem;
}

.terms-content {
  line-height: 1.6;
}

.terms-content h2 {
  color: #2c3e50;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.terms-content p {
  margin-bottom: 1rem;
  color: #555;
}
</style>
