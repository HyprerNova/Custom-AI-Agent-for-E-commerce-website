import { products } from '@/data/products';
import { ProductCard } from '@/components/product-card';
import { CategoryHero } from '@/components/category-hero';

export default function CarsPage() {
  const carProducts = products.filter(product => product.category === 'cars');

  return (
    <div className="min-h-screen">
      <CategoryHero
        title="RC Cars"
        description="Experience the thrill of high-speed racing and off-road adventures with our premium RC car collection."
        image="https://images.pexels.com/photos/163811/toy-car-toy-jeep-car-163811.jpeg"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">All RC Cars ({carProducts.length})</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {carProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}