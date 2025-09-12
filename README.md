## Product Gallery App

An e-commerce product gallery built with React 18, Axios, and TailwindCSS featuring debounced search, infinite scroll, lazy-loaded images, global light/dark theme, and robust error handling.

### Tech Stack
- React 18.3.1, React Hooks
- Axios 1.x
- TailwindCSS 3.x
- react-lazyload 3.2.1

### Setup
1. Install dependencies:
   - `npm install`
2. Run dev server:
   - `npm start`

### Features
- Debounced search with a custom `useDebounce` hook to avoid extra API calls.
- Infinite scrolling using `IntersectionObserver`.
- Lazy-loaded product images using `react-lazyload` with skeleton placeholders.
- Global theme (light/dark) with `Context API` and `localStorage` persistence.
- Error UI with retry on network failure.

### API
- All products: `https://fakestoreapi.com/products`
- Single product: `https://fakestoreapi.com/products/:id`

### Project Structure
```
src/
  components/
    SearchBar.js
    ProductList.js
    ProductCard.js
  hooks/
    useDebounce.js
  context/
    ThemeContext.js
  pages/
    Home.js
  App.js
  index.js
  index.css
```

### Notes
- Tailwind is configured with `darkMode: 'class'`. The provider toggles the `html` element class.
- The search filters client-side since the API lacks server-side filtering.
