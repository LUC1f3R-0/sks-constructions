# SKS DEVELOPERS (PVT) LTD - Vue 3 Website

A modern, professional construction company website built with Vue 3, TypeScript, and Bootstrap 4.

## 🚀 Features

- **Modern Design**: Professional construction company website with advanced animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Vue 3 Composition API**: Built with the latest Vue 3 features
- **TypeScript**: Full TypeScript support for better development experience
- **Bootstrap 4**: Responsive grid system and components
- **Advanced Animations**: AOS (Animate On Scroll) integration
- **Interactive Components**: Hero slider, testimonials, project gallery
- **Professional Styling**: Custom SCSS with CSS variables

## 🎨 Design Specifications

### Color Scheme
- **Primary Color**: #ff5f13 (Orange)
- **Secondary Color**: #f27420 (Alternative Orange)
- **Dark Blue**: #021a47, #00235b, #0e132a
- **White**: #ffffff
- **Light Gray**: #f5f5f5, #f7f7fd
- **Text Colors**: #16161a (Black), #677294 (Gray)

### Typography
- **Primary Font**: Barlow (sans-serif) - weights 200-900
- **Secondary Font**: Teko (sans-serif) - weights 300-700
- **Body Text**: 16px, line-height 24px
- **Section Titles**: 70px, font-weight 700, uppercase, Teko font

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Preloader.vue
│   │   │   └── ScrollToTop.vue
│   │   ├── home/
│   │   │   ├── HeroSlider.vue
│   │   │   ├── ServicesSection.vue
│   │   │   ├── AboutSection.vue
│   │   │   ├── ProjectsGallery.vue
│   │   │   ├── ContactCTA.vue
│   │   │   ├── CounterSection.vue
│   │   │   ├── TeamSection.vue
│   │   │   ├── TestimonialSection.vue
│   │   │   └── BlogSection.vue
│   │   └── layout/
│   │       ├── Header.vue
│   │       └── Footer.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Services.vue
│   │   ├── Projects.vue
│   │   ├── Blog.vue
│   │   └── Contact.vue
│   ├── router/
│   │   └── index.ts
│   ├── App.vue
│   └── main.ts
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **Vue 3**: Latest Vue.js framework with Composition API
- **TypeScript**: Type-safe JavaScript
- **Vue Router**: Client-side routing
- **Bootstrap 4**: CSS framework for responsive design
- **Font Awesome**: Icon library
- **AOS**: Animate On Scroll library
- **SCSS**: Advanced CSS preprocessing
- **Vite**: Fast build tool and development server

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sks-constructions/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Large Tablet**: 992px-1199px
- **Tablet**: 768px-991px
- **Mobile**: 576px-767px
- **Small Mobile**: 320px-575px

## 🎯 Key Components

### Header
- Sticky navigation with transparent to solid transition
- Mobile hamburger menu
- Dropdown menus for Projects, Blog, and Pages
- Social media icons with hover effects

### Hero Slider
- Full-screen background images
- Animated text with clip-path effects
- Auto-playing slider with navigation
- Call-to-action buttons

### Services Section
- 6 service cards with icons
- Hover effects and animations
- Responsive grid layout

### About Section
- Two-column layout (content + image)
- "Since 1994" badge overlay
- Animated counter

### Projects Gallery
- Filterable project grid
- Category tabs
- Hover overlays with project details

### Team Section
- Team member cards with social links
- Hover effects and animations
- Professional layout

### Testimonials
- Auto-playing testimonial slider
- Quote icons and author information
- Dark blue background theme

### Blog Section
- Blog post cards with date badges
- Category labels and excerpts
- Read more links

### Footer
- Newsletter signup form
- Contact information
- Social media links
- Quick navigation links

## 🎨 Customization

### Colors
Update CSS variables in `src/App.vue`:
```scss
:root {
  --primary-color: #ff5f13;
  --secondary-color: #f27420;
  --dark-blue-1: #021a47;
  --dark-blue-2: #00235b;
  --dark-blue-3: #0e132a;
  // ... more variables
}
```

### Fonts
The project uses Google Fonts (Barlow and Teko). Update the font import in `src/App.vue`:
```scss
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400;500;600;700;800;900&family=Teko:wght@300;400;500;600;700&display=swap');
```

## 📄 Pages

- **Home**: Main landing page with all sections
- **About**: Company information and team details
- **Services**: Detailed service offerings
- **Projects**: Portfolio and project gallery
- **Blog**: Latest news and articles
- **Contact**: Contact form and information

## 🔧 Development

### Adding New Components
1. Create component in appropriate directory
2. Use Vue 3 Composition API with `<script setup>`
3. Follow existing naming conventions
4. Add TypeScript types where needed

### Styling Guidelines
- Use SCSS with CSS variables
- Follow BEM methodology for class naming
- Implement responsive design for all breakpoints
- Use transition variables for consistent animations

### Animation Guidelines
- Use AOS for scroll-triggered animations
- Implement hover effects with CSS transitions
- Use CSS keyframes for complex animations
- Ensure animations are performant and accessible

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Static Hosting
The built files in `dist/` can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please contact the development team.

---

**SKS DEVELOPERS (PVT) LTD** - Building Excellence Since 1994
