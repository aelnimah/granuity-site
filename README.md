# 🚀 Grantuity Marketing Site

> **A premium, animation-rich marketing website showcasing modern React development and sophisticated user experience design.**
// Dummy commit for Netlify redeploy

[![Built with React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Powered by Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.16-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Pure CSS](https://img.shields.io/badge/Styling-Pure%20CSS-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

**Grantuity.org** is a cutting-edge marketing website for Grantuity Group - a government funding consulting firm that has helped businesses secure over **$300M in funding**. This project showcases advanced React development techniques, sophisticated animations, and premium user experience design.

---

## 📋 **Table of Contents**

- [✨ Project Highlights](#-project-highlights)
- [🎯 Core Features & Pages](#-core-features--pages)
- [🛠️ Technical Architecture](#️-technical-architecture)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [📝 Content Management](#-content-management)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📞 Contact & Support](#-contact--support)

---

## ✨ **Project Highlights**

### 🎬 **Animation-First Design**
Every interaction is meticulously crafted with **Framer Motion** and custom CSS animations:
- **Scroll-triggered animations** with intersection observers
- **Smooth page transitions** and micro-interactions  
- **Dynamic counters** and progress indicators
- **Cinematic hover effects** throughout

### 🏗️ **Modern Architecture**
- **React 19.1.1** with hooks-based functional components
- **Vite 7.1.2** for lightning-fast development and optimized builds
- **Pure CSS** approach for complete design control (no framework dependencies)
- **Component-scoped styling** with consistent design system

### 📱 **Premium User Experience**
- **Fully responsive** design across all devices (480px, 768px, 1024px, 1280px breakpoints)
- **Performance-optimized** with lazy loading and code splitting
- **Accessibility-focused** with proper ARIA labels and keyboard navigation
- **SEO-ready** structure with semantic HTML

---

## 🎯 **Core Features & Pages**

### 🏠 **Homepage** (`/`)

#### **Hero Section**
- **Cinematic video background** with fallback image support
- **Animated text reveals** with staggered timing using Framer Motion
- **Floating CTA buttons** with hover transformations
- **Scroll indicator** with subtle pulse animation

#### **Impact Metrics**
- **Counting animations** triggered by scroll intersection
- **$300M+ Capital Secured** - Dynamic number animation
- **1000+ Grants Processed** - Smooth counting effect  
- **500+ Projects Funded** - Coordinated reveal timing

#### **Government Logos Carousel**
- **Auto-scrolling marquee** with pause on hover
- **Smooth infinite loop** animation
- **Responsive logo sizing** across devices
- **Legal disclaimers** with proper compliance

---

### 🛠️ **Services Page** (`/services`)

#### **Interactive Service Tabs**
- **Smooth tab transitions** with Framer Motion
- **Content fade-in effects** for each service type
- **"Explore Our Services" graphic** with animated elements
- **Responsive card layouts** that adapt to screen size

#### **Sectors We Serve Slideshow**
- **Auto-advancing carousel** with manual controls
- **Sector-specific imagery** and descriptions
- **Smooth slide transitions** with momentum scrolling
- **Industry icons** with hover animations

#### **Process Timeline**
- **Animated SVG path** that draws as you scroll
- **Glowing progress dot** following the timeline
- **Step-by-step reveals** with Framer Motion
- **Interactive milestone markers**

---

### 📝 **Dynamic Blog System** (`/blog`)

#### **JSON-Driven Content**
```json
{
  "id": "condominiums-development-sep-2025",
  "title": "Condominiums Development", 
  "date": "2025-09-10",
  "industry": "Real Estate & Construction",
  "content": "Full article content...",
  "image": "condo.jpg"
}
```

#### **Blog Features**
- **Dynamic post generation** from JSON data (`public/blogdata/blogData.json`)
- **Industry-themed images** with SVG placeholders
- **Excerpt generation** with smart truncation
- **Individual post pages** (`/blog/:id`) with full content display
- **Responsive card grid** with hover animations

#### **Blog Post Pages** (`/blog/:id`)
- **Full article rendering** with formatted content
- **Back navigation** with smooth transitions
- **Industry badges** and date formatting
- **Image optimization** with fallback handling

---

### 📞 **Contact Us Page** (`/contact`)

#### **Hero Section**
- **Brand-consistent hero** with gradient background
- **Professional typography** matching homepage styling
- **Responsive design** with proper navbar integration

#### **Two-Column Layout**
**Left Column - Contact Information:**
- **Email**: contact@grantuity.org
- **Phone**: 1 (866) 644-0469
- **LinkedIn**: Company profile link
- **Address**: First Canadian Place, 100 King Street West Suite 5600, Toronto, ON, M5X 1C9
- **Interactive cards** with Lucide React icons and hover animations

**Right Column - Contact Form:**
- **Comprehensive form fields**: Name, email, phone, company details, industry, revenue, message
- **Form validation** with required field indicators
- **Animated form fields** with staggered entrance effects
- **Brand-colored focus states** with glow effects
- **Thank you animation** on successful submission

#### **Google Maps Integration**
- **Embedded map** showing exact office location
- **Responsive iframe** with proper styling
- **Hover effects** and smooth animations

---

### 🚀 **Portal Coming Soon** (`/portal`)

#### **Client Communications Focus**
- **Animated "Coming Soon" experience** with floating elements
- **Four feature preview cards**:
  1. **Direct Messaging** - Instant communication with funding specialists
  2. **Document Sharing** - Secure upload and review of materials
  3. **Progress Tracking** - Real-time updates on applications
  4. **Meeting Scheduler** - Book consultations and strategy sessions

#### **Engaging Animations**
- **Floating background circles** with scaling effects
- **Animated icons** floating around the page
- **Pulsing portal icon** with continuous animation
- **Animated dots** in "Stay Tuned..." text
- **Staggered entrance animations** for all elements

---

### 💎 **High-Impact CTA Banner**
- **Conversion-optimized messaging** throughout the site
- **Gradient backgrounds** with subtle animations
- **Multi-CTA strategy** (Portal, Contact, Services)
- **Mobile-responsive** button layouts

---

## 🛠️ **Technical Architecture**

### **Tech Stack**
```json
{
  "frontend": "React 19.1.1",
  "build": "Vite 7.1.2", 
  "animations": "Framer Motion 12.23.16",
  "icons": "Lucide React 0.544.0",
  "routing": "React Router DOM 7.9.1",
  "styling": "Pure CSS (Component-scoped)",
  "linting": "ESLint 9.33.0"
}
```

### **Why Pure CSS Over Frameworks?**
We chose **pure CSS** over Tailwind/styled-components for:
- **Complete design control** without framework constraints
- **Optimal performance** with no runtime CSS-in-JS overhead
- **Custom animations** that integrate seamlessly with Framer Motion
- **Maintainable architecture** with component-scoped stylesheets

### **Component Architecture**
```javascript
// ✅ Good: Functional component with hooks and animations
const MyComponent = () => {
  const [state, setState] = useState(initialValue);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Component content */}
    </motion.div>
  );
};
```

---

## 🚀 **Getting Started**

### **Prerequisites**
- **Node.js 18+** with npm/yarn
- **Modern browser** (Chrome 88+, Firefox 85+, Safari 14+)
- **Git** for version control

### **Installation**
```bash
# Clone the repository
git clone https://github.com/grantuity/grantuity-site.git
cd grantuity-site

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Development Commands**
```bash
# 🔥 Start dev server with hot reload
npm run dev

# 🏗️ Build for production  
npm run build

# 👀 Preview production build
npm run preview

# 🧹 Lint code quality
npm run lint
```

---

## 📁 **Project Structure**

```
grantuity-site/
├── public/                     # Static assets
│   ├── blogdata/
│   │   └── blogData.json      # Blog posts content
│   ├── logos/                 # Government partner logos
│   ├── media/
│   │   ├── blog/              # Blog post images
│   │   ├── sectors/           # Industry sector images
│   │   ├── services/          # Service-related images
│   │   └── hero.mp4           # Homepage hero video
│   └── logo.png               # Site logo
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx/.css    # Navigation with scroll effects
│   │   ├── Footer.jsx/.css    # Site footer
│   │   ├── CTABanner.jsx/.css # Call-to-action sections
│   │   ├── CoreServicesTabs.jsx/.css # Service tabs component
│   │   ├── ProcessTimeline.jsx/.css  # Animated timeline
│   │   ├── SectorsWeServe.jsx/.css   # Sectors carousel
│   │   ├── PageWrapper.jsx    # Layout wrapper
│   │   └── ScrollToTop.jsx    # Scroll management
│   ├── pages/                 # Route components
│   │   ├── Home.jsx/.css      # Homepage
│   │   ├── Services.jsx/.css  # Services page
│   │   ├── Blog.jsx/.css      # Blog listing
│   │   ├── BlogPost.jsx/.css  # Individual blog posts
│   │   ├── Contact.jsx/.css   # Contact page
│   │   └── Portal.jsx/.css    # Portal coming soon
│   ├── data/                  # Static data files
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

---

## 🎨 **Design System**

### **Color Palette**
```css
/* Primary Brand Colors */
--primary-blue: #2C5777;
--primary-blue-dark: #1e3d52;
--primary-blue-light: rgba(44, 87, 119, 0.1);

/* Semantic Colors */
--text-primary: #333333;
--text-light: rgba(255, 255, 255, 0.9);
--background-light: #f8fafc;
--accent-gold: #FFD700;

/* Gray Scale */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
```

### **Typography**
```css
/* Font Families */
font-family: 'Inter', sans-serif;     /* Headings & UI */
font-family: 'Open Sans', sans-serif; /* Body text */

/* Font Sizes */
--text-4xl: 3.75rem;  /* Hero titles */
--text-2xl: 2rem;     /* Section titles */
--text-xl: 1.75rem;   /* Form titles */
--text-lg: 1.125rem;  /* Subtitles */
--text-base: 1rem;    /* Body text */
--text-sm: 0.875rem;  /* Labels */
```

### **Animation Standards**
```css
/* Consistent easing and timing */
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);
--duration-fast: 0.2s;
--duration-normal: 0.3s;
--duration-slow: 0.6s;
```

### **Responsive Breakpoints**
```css
/* Mobile First Approach */
@media screen and (max-width: 480px)  { /* Mobile */ }
@media screen and (max-width: 768px)  { /* Tablet */ }
@media screen and (max-width: 1024px) { /* Desktop */ }
@media screen and (max-width: 1280px) { /* Large Desktop */ }
```

### **Framer Motion Examples**
```javascript
// Staggered card animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Scroll-triggered animations
const isInView = useInView(ref, { once: true, margin: "-100px" });
```

---

## 📝 **Content Management**

### **How to Add Blog Posts**

1. **Edit the JSON file**: `public/blogdata/blogData.json`
```json
{
  "id": "your-post-slug",
  "title": "Your Post Title",
  "date": "2025-01-01", 
  "industry": "Your Industry",
  "content": "Full article content with \\n\\n for paragraphs...",
  "image": "your-image.jpg"
}
```

2. **Add the image**: Place in `public/media/blog/your-image.jpg`
   - **Recommended size**: 400x240px
   - **Format**: JPG, PNG, or SVG
   - **Naming**: Use kebab-case matching the JSON

3. **Content formatting**:
   - Use `\\n\\n` for paragraph breaks
   - Use `**text**` for bold formatting
   - Keep excerpts under 200 characters for optimal display

### **Updating Contact Information**

Edit the `contactInfo` array in `src/pages/Contact.jsx`:
```javascript
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@grantuity.org',
    link: 'mailto:contact@grantuity.org'
  },
  // ... other contact methods
];
```

### **Managing Government Logos**

Add logos to `public/logos/` and update the array in `src/pages/Home.jsx`:
```javascript
const logos = [
  { src: '/logos/new-logo.png', alt: 'Organization Name', href: 'https://...' },
];
```

---

## 🚀 **Deployment**

### **Production Build**
```bash
# Create optimized build
npm run build

# Output location: dist/
# Upload contents to your hosting provider
```

### **Recommended Platforms**

#### **🟢 Netlify (Recommended)**
1. Run `npm run build`
2. Drag `dist/` folder to Netlify
3. Configure SPA redirects: `_redirects` file with `/* /index.html 200`

#### **🔵 Vercel**  
1. Connect repository to Vercel
2. Auto-deploy on push to main
3. Zero-config React support

#### **🟠 AWS S3 + CloudFront**
1. Upload `dist/` to S3 bucket
2. Enable static website hosting  
3. Configure CloudFront distribution
4. Set up Route 53 for custom domain

### **Environment Variables**
Currently no environment variables are required for basic functionality.

---

## 🎯 **Design Guidelines**

### **Animation Principles**
- **Purposeful motion**: Every animation should enhance UX, not distract
- **Consistent timing**: Use standard duration/easing values
- **Performance first**: Prefer `transform` and `opacity` changes
- **Respect accessibility**: Honor `prefers-reduced-motion` settings

### **Component Development**
```javascript
// ✅ Good: Functional component with hooks
const MyComponent = () => {
  const [state, setState] = useState(initialValue);
  const ref = useRef(null);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Component content */}
    </motion.div>
  );
};
```

### **CSS Best Practices**
- Use component-scoped CSS files (e.g., `Component.css`)
- Follow BEM naming convention where appropriate
- Leverage CSS custom properties for consistency
- Ensure all interactive elements have hover/focus states

---

## 🤝 **Contributing**

### **Adding New Pages**
```bash
# 1. Create page component
src/pages/NewPage.jsx
src/pages/NewPage.css

# 2. Add to router
src/App.jsx

# 3. Update navigation
src/components/Navbar.jsx
src/components/Footer.jsx
```

### **Code Review Checklist**
- [ ] **Responsive design** works on all breakpoints (480px, 768px, 1024px, 1280px)
- [ ] **Animations** are smooth and purposeful  
- [ ] **Accessibility** standards met (WCAG 2.1)
- [ ] **Performance** impact minimized
- [ ] **Code quality** passes ESLint rules
- [ ] **Typography** uses Inter for headings, Open Sans for body
- [ ] **Colors** follow brand palette (#2C5777, #1e3d52)

### **Development Workflow**
1. **Feature branches**: Create from `main` for new features
2. **Consistent naming**: Use kebab-case for files and components
3. **Component structure**: Each component should have its own CSS file
4. **Animation testing**: Test on various devices and respect reduced motion
5. **Performance**: Use React DevTools to check for unnecessary re-renders

---

## 📊 **Performance & Analytics**

### **Lighthouse Scores** (Target)
- **🟢 Performance**: 95+
- **🟢 Accessibility**: 95+  
- **🟢 Best Practices**: 95+
- **🟢 SEO**: 90+

### **Optimization Features**
- **Code splitting** with React Router
- **Lazy loading** for images and components
- **Tree shaking** with Vite bundling
- **Asset optimization** (images, fonts, videos)
- **Gzip compression** on static assets
- **Framer Motion** optimized animations using transforms

---

## 🏆 **Project Showcase**

This project demonstrates:

### **🎨 Advanced Frontend Skills**
- **Modern React patterns** with hooks and functional components
- **Sophisticated animations** with Framer Motion integration
- **Responsive design mastery** across all device sizes
- **Performance optimization** techniques

### **🏗️ Professional Architecture**  
- **Scalable component structure** with clear separation of concerns
- **Maintainable CSS architecture** without framework dependencies
- **Production-ready deployment** configuration
- **Developer experience** optimization

### **💼 Business Impact**
- **Conversion-optimized** user experience design
- **Professional brand** representation
- **Accessible to all users** (WCAG compliance)
- **SEO-friendly** structure and content

---

## 📞 **Contact & Support**

### **Grantuity Group**
- **🌐 Website**: [grantuity.org](https://grantuity.org)
- **📧 Email**: contact@grantuity.org  
- **📱 Phone**: 1 (866) 644-0469
- **🏢 Address**: First Canadian Place, 100 King Street West Suite 5600, Toronto, ON, M5X 1C9
- **💼 LinkedIn**: [Grantuity Group](https://www.linkedin.com/company/grantuity/)

### **Form Submissions**

The website uses **Netlify Forms** to handle form submissions from both contact forms with **inline success messages**:

#### **Forms Configured:**
- **Home Page Form** (`home-contact`): Inline contact form in the "Work With Us" section
- **Contact Page Form** (`page-contact`): Full contact form on the Contact Us page

#### **Form Features:**
- **Inline Success Messages**: Forms show success/error messages without page redirects
- **Professional Styling**: Success messages inherit site typography and spacing
- **JavaScript Submission**: Uses `fetch()` API for seamless form handling
- **Error Handling**: Graceful error messages if submission fails

#### **Email Routing Setup:**
To configure email notifications in Netlify:

1. **Go to Netlify Dashboard** → Site Settings → Forms → Notifications
2. **Add Form Submission Notification**:
   - Set recipient to: `elnimaha@gmail.com`
   - Configure notification preferences
3. **Alternative**: Use Netlify's webhook functionality for custom endpoints

#### **How It Works:**
1. User submits form → JavaScript intercepts submission
2. Form data sent to Netlify via `fetch()` API
3. On success: Form replaced with styled success message
4. On error: Form replaced with styled error message
5. Netlify forwards submission to configured email
6. Form data stored in Netlify dashboard for backup

#### **Form Configuration Files:**
- `src/pages/Home.jsx`: Home page form with `name="home-contact"`
- `src/pages/Contact.jsx`: Contact page form with `name="page-contact"`
- `src/utils/formSubmission.js`: Shared form submission utility
- `src/utils/formSubmission.css`: Success/error message styles
- `public/_redirects`: Netlify configuration file for form handling

#### **Local Testing:**
For local development and testing:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Start local development with Netlify Forms
netlify dev
```
This enables form submission testing locally before deployment.

### **Development Support**
For technical questions about this codebase:
1. Check existing documentation in this README
2. Review component-specific comments in source files
3. Test changes locally before deployment
4. Follow the established patterns for consistency

---

## 📄 **License**

**Proprietary License** - All rights reserved by Grantuity Group.

This codebase represents proprietary intellectual property and trade secrets. Unauthorized reproduction, distribution, or use is strictly prohibited.

---

<div align="center">

### **Built with ❤️ and cutting-edge technology**

**React 19.1.1** • **Vite 7.1.2** • **Framer Motion 12.23.16** • **Pure CSS** • **Modern JavaScript**

*Showcasing the future of web development*

![Built with Love](https://img.shields.io/badge/Built%20with-❤️-red?style=for-the-badge)
![Modern Web](https://img.shields.io/badge/Modern-Web%20Development-blue?style=for-the-badge)

</div>