import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById } from '@/data/products';
import Layout from '@/components/Layout';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <Layout currentPage="products">
      <div className="mb-6">
        <Link
          href="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Products
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
          {/* Product Image */}
          <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {!product.inStock && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Out of Stock
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="text-sm text-blue-600 uppercase tracking-wide font-semibold">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <span className="text-yellow-400 text-lg">⭐</span>
                <span className="ml-1 text-lg font-semibold">{product.rating}</span>
                <span className="ml-2 text-gray-600">(4.2k reviews)</span>
              </div>
            </div>

            <div className="text-4xl font-bold text-gray-900 mb-6">
              ₹{product.price.toLocaleString('en-IN')}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <span className="font-medium text-gray-900">Availability:</span>
                  <span className={`ml-2 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-auto">
              <button
                disabled={!product.inStock}
                className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  product.inStock
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transform hover:scale-105'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              
              <button className="px-6 py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:border-gray-400 transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Product Information */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
          <p className="text-gray-600 text-sm">Free shipping on orders over ₹4,000</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">30-Day Returns</h3>
          <p className="text-gray-600 text-sm">Easy returns within 30 days</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Warranty</h3>
          <p className="text-gray-600 text-sm">1-year manufacturer warranty</p>
        </div>
      </div>
    </Layout>
  );
}
