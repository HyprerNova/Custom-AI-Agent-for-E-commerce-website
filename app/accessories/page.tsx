import { products } from '@/data/products';
import { ProductCard } from '@/components/product-card';
import { CategoryHero } from '@/components/category-hero';

export default function AccessoriesPage() {
  const accessoryProducts = products.filter(product => product.category === 'accessories');

  return (
    <div className="min-h-screen">
      <CategoryHero
        title="RC Accessories"
        description="Complete your setup with our comprehensive range of batteries, controllers, chargers, and essential RC accessories."
        image="https://images.pexels.com/photos/3945651/pexels-photo-3945651.jpeg"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">All Accessories ({accessoryProducts.length})</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {accessoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}