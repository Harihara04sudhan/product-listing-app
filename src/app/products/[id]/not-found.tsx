import Link from 'next/link';
import Layout from '@/components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, the product you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <div className="space-y-4">
            <Link
              href="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Browse All Products
            </Link>
            <div>
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
