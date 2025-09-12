# Product Gallery App

A modern, responsive e-commerce product gallery built with React 18, featuring real-time search, infinite scrolling, lazy-loaded images, and a beautiful dark/light theme toggle. Built with React's best practices and performance optimization.

## 🚀 Features

### Core Functionality
- **Real-time Search**: Debounced search with 400ms delay to optimize API calls
- **Infinite Scrolling**: Seamless pagination using IntersectionObserver API
- **Lazy Loading**: Images load only when entering viewport with skeleton placeholders
- **Theme Toggle**: Beautiful slider-style dark/light mode with localStorage persistence
- **Error Handling**: User-friendly error messages with retry functionality
- **Responsive Design**: Mobile-first design that works on all screen sizes

### UI/UX Enhancements
- **Smooth Animations**: Hover effects with scale transforms and color transitions
- **Loading States**: Skeleton placeholders and loading indicators
- **Modern Design**: Clean, minimalist interface with TailwindCSS
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

## 🛠 Tech Stack

- **React 18.3.1** - Latest React with hooks and concurrent features
- **Axios 1.7.9** - HTTP client for API requests
- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **react-lazyload 3.2.1** - Image lazy loading optimization
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```
   

## 🌐 API Integration

The app uses **DummyJSON API** for product data:

- **All Products**: `https://dummyjson.com/products?limit=18&skip=0`
- **Search Products**: `https://dummyjson.com/products/search?q={query}&limit=18&skip=0`
- **Pagination**: Uses `limit` and `skip` parameters for infinite scrolling

### API Features
- Real server-side search and pagination
- 18 products per page for optimal loading
- Automatic request cancellation to prevent race conditions
- Error handling with retry mechanism

## 📁 Project Structure

```
src/
├── components/
│   ├── SearchBar.js          # Search input field with theme button
│   ├── ProductList.js        # Infinite scroll product grid
│   └── ProductCard.js        # Individual product card with animations
├── hooks/
│   └── useDebounce.js        # Custom hook for search optimization
├── context/
│   └── ThemeContext.js       # Global theme state management
├── pages/
│   └── Home.js              # Main page component
├── App.js                   # Root component
├── index.js                 # Application entry point
└── index.css               # TailwindCSS imports
```

## 🎨 Key Components

### SearchBar
- Debounced search input (400ms delay)
- Responsive layout: stacked on mobile, inline on desktop
- Slider-style theme toggle with sun/moon icons
- Full-width design with proper spacing

### ProductList
- IntersectionObserver for infinite scrolling
- Request cancellation to prevent race conditions
- Loading states and error handling
- Responsive grid layout (1/2/3 columns)

### ProductCard
- Lazy-loaded images with skeleton placeholders
- Smooth hover animations and transitions
- Responsive design with proper spacing
- Accessibility features

## 🔧 Configuration

### TailwindCSS
- Configured with `darkMode: 'class'`
- Custom color palette with zinc and emerald themes
- Responsive breakpoints for mobile-first design

### Theme System
- Context API for global state management
- localStorage persistence
- Automatic class toggling on document root
- Smooth transitions between themes

## 🚀 Performance Optimizations

- **Debounced Search**: Prevents excessive API calls
- **Lazy Loading**: Images load only when needed
- **Request Cancellation**: Prevents race conditions
- **Memoized Components**: Optimized re-renders
- **IntersectionObserver**: Efficient infinite scrolling
- **Skeleton Loading**: Better perceived performance

## 📱 Responsive Design

- **Mobile (< 640px)**: Single column, stacked header
- **Tablet (640px+)**: Two columns, inline header
- **Desktop (1024px+)**: Three columns, full layout

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

