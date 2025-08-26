import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  offset: 100
})

const app = createApp(App)
app.use(router)
app.mount('#app')
