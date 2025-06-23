'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import Layout from '@/components/Layout';
import ProductGrid from '@/components/ProductGrid';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories from products
  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout
      title="Our Products"
      description={`Discover our collection of ${products.length} premium tech products`}
      currentPage="products"
    >
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory !== 'All' && (
              <span className="ml-2 text-blue-600 font-medium">
                in {selectedCategory}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Categories:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 transform hover:scale-105 ${
                    category === selectedCategory
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <ProductGrid products={filteredProducts} />
    </Layout>
  );
}
