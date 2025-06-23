# CloudFlex Store - Product Listing App

A modern, responsive product listing application built with Next.js, React, and Tailwind CSS. This project was created as part of the CloudFlex frontend assignment.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Product Grid**: Clean, modern grid layout with product cards
- **Dynamic Routing**: Individual product detail pages at `/products/[id]`
- **Modern UI**: Beautiful hover effects, transitions, and animations
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Well-structured, reusable components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React functional components with hooks
- **Images**: Next.js Image optimization
- **Routing**: Next.js App Router with dynamic routes

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── products/
│       ├── page.tsx
│       └── [id]/
│           └── page.tsx
├── components/
│   ├── Layout.tsx
│   ├── ProductCard.tsx
│   └── ProductGrid.tsx
├── data/
│   └── products.ts
└── types/
    └── product.ts
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd product-listing-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Pages

- **Home** (`/`): Landing page with store introduction
- **Products** (`/products`): Main product listing page with responsive grid
- **Product Details** (`/products/[id]`): Individual product detail pages

## 🎨 Key Features

### Responsive Grid Layout
- **Desktop/Tablet**: 4-column grid (3 columns on smaller screens)
- **Mobile**: Single column stack layout
- **Hover Effects**: Smooth transitions and scale animations

### Product Cards
- Product image with fallback placeholder
- Product name, price, and description
- Category tags and rating display
- Stock status indicators
- "View Details" call-to-action buttons

### Dynamic Routing
- Individual product pages with detailed information
- URL structure: `/products/[id]`
- 404 handling for non-existent products

## 🔧 Customization

### Adding New Products

Edit the `src/data/products.ts` file to add new products:

```typescript
{
  id: 13,
  name: "Your Product Name",
  price: 99.99,
  image: "https://example.com/image.jpg",
  description: "Product description here",
  category: "Category",
  rating: 4.5,
  inStock: true
}
```

### Styling Modifications

The project uses Tailwind CSS for styling. Key files:
- `src/app/globals.css`: Global styles and custom utilities
- Component files: Individual component styling

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📝 Assignment Requirements Fulfilled

- ✅ **Route**: `/products` page created
- ✅ **Product Grid**: Responsive grid with product cards
- ✅ **Card Content**: Name, price, image, "View Details" button
- ✅ **Local Data**: JavaScript array with dummy data
- ✅ **Responsive Design**: Grid on desktop/tablet, stacked on mobile
- ✅ **Styling**: Tailwind CSS throughout
- ✅ **Bonus**: Dynamic routing (`/products/[id]`)
- ✅ **Bonus**: Hover effects and transitions
- ✅ **Bonus**: Component structure (Card, Grid, Layout)

## 🎯 Performance Optimizations

- Next.js Image component for optimized image loading
- Lazy loading for better performance
- Static generation where possible
- Optimized CSS with Tailwind's purge functionality

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👨‍💻 Development

The project follows modern React and Next.js best practices:
- Functional components with TypeScript
- Clean component architecture
- Responsive design principles
- Semantic HTML structure
- Accessible design patterns

---


