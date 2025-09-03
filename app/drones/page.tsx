import { products } from '@/data/products';
import { ProductCard } from '@/components/product-card';
import { CategoryHero } from '@/components/category-hero';

export default function DronesPage() {
  const droneProducts = products.filter(product => product.category === 'drones');

  return (
    <div className="min-h-screen">
      <CategoryHero
        title="RC Drones"
        description="Explore our cutting-edge drone collection featuring 4K cameras, long-range capabilities, and advanced flight systems."
        image="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">All Drones ({droneProducts.length})</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {droneProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}