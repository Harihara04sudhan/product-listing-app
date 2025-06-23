import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 6639,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 16599,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Advanced fitness tracking with heart rate monitor and GPS functionality.",
    category: "Wearables",
    rating: 4.8,
    inStock: true
  },
  {
    id: 3,
    name: "Portable Laptop Stand",
    price: 4149,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    description: "Ergonomic aluminum laptop stand with adjustable height and angle.",
    category: "Accessories",
    rating: 4.3,
    inStock: true
  },
  {
    id: 4,
    name: "Wireless Charging Pad",
    price: 2489,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    category: "Electronics",
    rating: 4.2,
    inStock: false
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 5809,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader.",
    category: "Accessories",
    rating: 4.6,
    inStock: true
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 10789,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    description: "RGB backlit mechanical keyboard with blue switches and programmable keys.",
    category: "Accessories",
    rating: 4.7,
    inStock: true
  },
  {
    id: 7,
    name: "4K Webcam",
    price: 7469,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop",
    description: "Ultra HD webcam with auto-focus and built-in noise-cancelling microphone.",
    category: "Electronics",
    rating: 4.4,
    inStock: true
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 4979,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    description: "Portable waterproof speaker with 360-degree sound and 12-hour battery.",
    category: "Electronics",
    rating: 4.5,
    inStock: true
  },
  {
    id: 9,
    name: "Gaming Mouse",
    price: 6639,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    description: "High-precision gaming mouse with customizable RGB lighting and 12000 DPI.",
    category: "Gaming",
    rating: 4.8,
    inStock: true
  },
  {
    id: 10,
    name: "Phone Stand",
    price: 1659,
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=400&fit=crop",
    description: "Adjustable phone stand compatible with all smartphone sizes.",
    category: "Accessories",
    rating: 4.1,
    inStock: true
  },
  {
    id: 11,
    name: "Wireless Mouse",
    price: 3319,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=400&fit=crop",
    description: "Ergonomic wireless mouse with precision tracking and long battery life.",
    category: "Accessories",
    rating: 4.3,
    inStock: true
  },
  {
    id: 12,
    name: "LED Desk Lamp",
    price: 3817,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Adjustable LED desk lamp with touch controls and USB charging port.",
    category: "Home Office",
    rating: 4.4,
    inStock: false
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};
